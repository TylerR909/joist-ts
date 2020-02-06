import {
  EntityManager,
  EntityMetadata,
  EntityOrmField,
  ForeignKeySerde,
  PrimaryKeySerde,
  SimpleSerde,
} from "../src/EntityManager";
import { Author } from "./Author";
import { ManyToOneReference } from "../src/collections/ManyToOneReference";
import { Reference } from "../src";

export class Book {
  readonly __orm: EntityOrmField;
  readonly author: Reference<Book, Author> = new ManyToOneReference(this, Author, "author");

  constructor(em: EntityManager, opts?: Partial<{ title: string }>) {
    this.__orm = { metadata: bookMeta, data: {} as Record<any, any>, em };
    if (opts) {
      Object.entries(opts).forEach(([key, value]) => ((this as any)[key] = value));
    }
    em.register(this);
  }

  // TODO Codegen
  get id(): string {
    return this.__orm.data["id"];
  }

  get title(): string {
    return this.__orm.data["title"];
  }

  set title(title: string) {
    this.__orm.data["title"] = title;
    this.__orm.em.markDirty(this);
  }
}

// TODO Codegen
export const bookMeta: EntityMetadata = {
  cstr: Book,
  type: "Book",
  tableName: "books",
  columns: [
    { fieldName: "id", columnName: "id", dbType: "int", serde: new PrimaryKeySerde("id", "id") },
    { fieldName: "title", columnName: "title", dbType: "varchar", serde: new SimpleSerde("title", "title") },
    {
      fieldName: "author",
      columnName: "author_id",
      dbType: "int",
      serde: new ForeignKeySerde("author", "author_id"),
    },
  ],
  order: 2,
};

(Book as any).metadata = bookMeta;
