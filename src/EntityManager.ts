import DataLoader from "dataloader";
import Knex from "knex";
import { flushEntities } from "./EntityPersister";
import { Collection } from "./relationships";

export interface EntityConstructor<T> {
  new (em: EntityManager): T;
}

export interface EntityOrmField {
  metadata: EntityMetadata;
  data: Record<any, any>;
  dirty?: boolean;
  em: EntityManager;
}

export interface Entity {
  id: string | undefined;

  __orm: EntityOrmField;
}

type FilterQuery<T> = any;

export class EntityManager {
  constructor(private knex: Knex) {}

  private loaders: Record<string, DataLoader<any, any>> = {};
  private entities: Entity[] = [];

  async find<T extends Entity>(type: EntityConstructor<T>, where: FilterQuery<T>): Promise<T[]> {
    return this.loaderForEntity(type).load(1);
  }

  async load<T extends Entity>(type: EntityConstructor<T>, id: string): Promise<T> {
    return this.loaderForEntity(type).load(id);
  }

  async loadCollection<T extends Entity, U extends Entity>(collection: Collection<T, U>): Promise<U[]> {
    return this.loaderForCollection(collection).load(collection.__orm.entity.id);
  }

  /** Registers a newly-instantiated entity with our EntityManager; only called by entity constructors. */
  register(entity: Entity): void {
    this.entities.push(entity);
  }

  markDirty(entity: Entity): void {
    entity.__orm.dirty = true;
  }

  async flush(): Promise<void> {
    await flushEntities(this.knex, this.entities);
  }

  private loaderForEntity<T extends Entity>(type: EntityConstructor<T>) {
    let loader = this.loaders[type.name];
    if (!loader) {
      loader = new DataLoader<string, T>(async keys => {
        const meta = (type as any).metadata as EntityMetadata;

        const rows = await this.knex
          .select("*")
          .from(meta.tableName)
          .whereIn("id", keys as string[]);

        const rowsById = new Map<string, T>();
        rows.forEach(row => {
          const entity = (new meta.cstr(this) as any) as T;
          meta.columns.forEach(c => c.serde.setOnEntity(entity.__orm.data, row));
          rowsById.set(entity.id!, entity);
        });

        return keys.map(k => rowsById.get(k) || new Error(`${type.name}#${k} not found`));
      });
      this.loaders[type.name] = loader;
    }
    return loader;
  }

  private loaderForCollection<T extends Entity, U extends Entity>(collection: Collection<T, U>) {
    // The metadata for the entity that contains the collection
    const meta = collection.__orm.entity.__orm.metadata;
    const loaderName = `${meta.tableName}.${collection.__orm.fieldName}`;
    let loader = this.loaders[loaderName];
    if (!loader) {
      loader = new DataLoader<string, U[]>(async keys => {
        const otherMeta = collection.__orm.otherMeta;

        const rows = await this.knex
          .select("*")
          .from(otherMeta.tableName)
          .whereIn(collection.__orm.otherColumnName, keys as string[]);

        const rowsById = new Map<string, U[]>();

        rows.forEach(row => {
          // TODO See if this is already in our UoW
          const entity = (new otherMeta.cstr(this) as any) as U;
          otherMeta.columns.forEach(c => c.serde.setOnEntity(entity.__orm.data, row));

          // TODO If this came from the UoW, it may not be an id? I.e. pre-insert.
          const ownerId = entity.__orm.data[collection.__orm.otherFieldName];
          if (ownerId === undefined) {
            throw new Error("Could not find ownerId in other entity");
          }
          if (!rowsById.has(ownerId)) {
            rowsById.set(ownerId, []);
          }
          rowsById.get(ownerId)!.push(entity);
        });

        return keys.map(k => rowsById.get(k) || []);
      });
      this.loaders[loaderName] = loader;
    }
    return loader;
  }
}

export interface ColumnSerde {
  setOnEntity(data: any, row: any): void;
  setOnRow(data: any, row: any): void;
  getFromEntity(data: any): any;
}

export class SimpleSerde implements ColumnSerde {
  constructor(private fieldName: string, private columnName: string) {}

  setOnEntity(data: any, row: any): void {
    data[this.fieldName] = row[this.columnName];
  }

  setOnRow(data: any, row: any): void {
    row[this.columnName] = data[this.fieldName];
  }

  getFromEntity(data: any) {
    return data[this.fieldName];
  }
}

/** Maps integer primary keys ot strings "because GraphQL". */
export class PrimaryKeySerde implements ColumnSerde {
  constructor(private fieldName: string, private columnName: string) {}

  setOnEntity(data: any, row: any): void {
    data[this.fieldName] = String(row[this.columnName]);
  }

  setOnRow(data: any, row: any): void {
    row[this.columnName] = maybeNumber(data[this.fieldName]);
  }

  getFromEntity(data: any) {
    return maybeNumber(data[this.fieldName]);
  }
}

export class ForeignKeySerde implements ColumnSerde {
  constructor(private fieldName: string, private columnName: string) {}

  setOnEntity(data: any, row: any): void {
    data[this.fieldName] = String(row[this.columnName]);
  }

  setOnRow(data: any, row: any): void {
    this.maybeResolveReferenceToId(data);
    row[this.columnName] = maybeNumber(data[this.fieldName]);
  }

  getFromEntity(data: any) {
    this.maybeResolveReferenceToId(data);
    return maybeNumber(data[this.fieldName]);
  }

  // Before a referred-to object is saved, we keep its instance in our data
  // map, and then assume it will be persisted before we're asked to persist
  // ourselves, at which point we'll resolve it to an id.
  private maybeResolveReferenceToId(data: any) {
    const value = data[this.fieldName];
    if (value.id) {
      data[this.fieldName] = value.id;
    }
  }
}

export interface EntityMetadata {
  cstr: EntityConstructor<any>;
  tableName: string;
  // Eventually our dbType should go away to support N-column fields
  columns: Array<{ fieldName: string; columnName: string; dbType: string; serde: ColumnSerde }>;
  order: number;
}

/** Converts `value` to a number, i.e. for string ids, unles its undefined. */
function maybeNumber(value: any): number | undefined {
  return value === undefined ? undefined : Number(value);
}
