import { isPlainObject } from "is-plain-object";
import { Entity, isEntity } from "./Entity";
import {
  ActualFactoryOpts,
  EntityConstructor,
  EntityManager,
  IdOf,
  MaybeAbstractEntityConstructor,
  OptsOf,
  isId,
} from "./EntityManager";
import {
  EntityMetadata,
  ManyToManyField,
  ManyToOneField,
  OneToManyField,
  OneToOneField,
  PolymorphicField,
  PrimitiveField,
  getAllMetas,
  getMetadata,
  isManyToOneField,
  isOneToOneField,
} from "./EntityMetadata";
import { DeepNew, New } from "./index";
import { tagId } from "./keys";
import { assertNever } from "./utils";

/**
 * DeepPartial-esque type specific to our `newTestInstance` factory.
 *
 * Specifically (vs using DeepPartial directly) this:
 *
 * 1. Adds a `use` tag of `Entity | Entity[]` that will be checked for existing
 * entities before creating new ones (i.e. "if `newTestInstance` needs a `Book`,
 * use the one in `use` instead of making a new one).
 *
 * 2. Works specifically against the constructor/entity opts fields.
 */
export type FactoryOpts<T extends Entity> = DeepPartialOpts<T> & {
  use?: Entity | Entity[];
  useFactoryDefaults?: boolean | "none";
};

// Chosen b/c it's a monday https://www.timeanddate.com/calendar/monthly.html?year=2018&month=1&country=1
export const jan1 = new Date(2018, 0, 1);
export const jan2 = new Date(2018, 0, 2);
export const jan3 = new Date(2018, 0, 3);
export let testDate = jan1;

/** Creates a test instance of `T`. */
export function newTestInstance<T extends Entity>(
  em: EntityManager,
  cstr: EntityConstructor<T>,
  /** The test's test-specific override opts. */
  testOpts: FactoryOpts<T> = {},
  /** The factory file's default opts. */
  factoryOpts: FactoryOpts<T> = {},
): DeepNew<T> {
  const meta = getMetadata(cstr);
  const opts = mergeOpts(testOpts, factoryOpts);
  const use = getOrCreateUseMap(opts);

  const selfFields: string[] = [];

  // Create just the primitive and m2o fields 1st, so we can create a minimal/valid
  // instance of the entity. We'll do the o2m/other fields as a second pass.
  const initialOpts = Object.values(meta.allFields)
    .map((field) => {
      const { fieldName } = field;

      // Use the opts value if they passed one in
      if (fieldName in opts && (opts as any)[fieldName] !== defaultValueMarker) {
        const optValue = (opts as any)[fieldName];
        // We don't explicitly support null (callers should pass undefined), but we accept it
        // for good measure.
        if (optValue === null || (optValue === undefined && !field.required)) {
          return [];
        }
        switch (field.kind) {
          case "m2o":
          case "poly":
            return [fieldName, resolveFactoryOpt(em, opts, field, optValue, undefined)];
          case "o2o":
          case "o2m":
          case "m2m":
            // We do these in the 2nd pass after `entity` exists (see additionalOpts)
            return [];
          case "lo2m":
            // If a child is passing themselves into a parent that is a large collection, just ignore it
            return [];
          case "primitive":
          case "enum":
          case "primaryKey":
            // Look for strings that want to use the test index
            if (typeof optValue === "string" && optValue.includes(testIndexString)) {
              const actualIndex = getTestIndex(em, meta.cstr);
              const value = optValue.replace(testIndexString, String(actualIndex));
              return [fieldName, value];
            } else if (typeof optValue === "number" && optValue === testIndex) {
              const actualIndex = getTestIndex(em, meta.cstr);
              return [fieldName, actualIndex];
            }
            // Otherwise just use the user's opt value as-is
            return [fieldName, optValue];
          default:
            return assertNever(field);
        }
      }

      // Don't fill in required fields if told not to
      const ignoreAllDefaults = "useFactoryDefaults" in opts && opts.useFactoryDefaults === "none";
      const required = field.required && !ignoreAllDefaults;

      if (
        field.kind === "primitive" &&
        (required || (opts as any)[fieldName] === defaultValueMarker) &&
        !field.derived &&
        !field.protected
      ) {
        const codegenDefault = getCodegenDefault(cstr, field.fieldName);
        return [fieldName, codegenDefault ?? defaultValueForField(em, cstr, field)];
      } else if (field.kind === "m2o" && !field.derived) {
        // If neither the user nor the factory (i.e. for an explicit "fan out" case) set this field,
        // then look in `use` and for an "obvious" there-is-only-one default (even for optional fields)
        const existing = getObviousDefault(em, field.otherMetadata(), opts);
        // If this is a m2o pointing to an o2o, i.e. that as a unique constraint, make sure the
        // existing entity we found isn't already claimed
        const isUniqueAndAlreadyUsed =
          existing &&
          isOneToOneField(field.otherMetadata().fields[field.otherFieldName]) &&
          (existing as any)[field.otherFieldName].isLoaded &&
          (existing as any)[field.otherFieldName].isSet;
        if (existing && !isUniqueAndAlreadyUsed && !ignoreAllDefaults) {
          return [fieldName, existing];
        }
        // Otherwise, only make a new entity only if the field is required
        if (required) {
          // ...unless this is a self-referential key, in which case avoid infinite looping.
          if (field.otherMetadata() === meta) {
            selfFields.push(fieldName);
            return [];
          } else {
            return [fieldName, resolveFactoryOpt(em, opts, field, undefined, undefined)];
          }
        }
      } else if (field.kind === "enum" && required) {
        const codegenDefault = getCodegenDefault(cstr, field.fieldName);
        return [fieldName, codegenDefault ?? field.enumDetailType.getValues()[0]];
      } else if (field.kind === "poly" && required) {
        return [fieldName, resolveFactoryOpt(em, opts, field, undefined, undefined)];
      }
      return [];
    })
    .filter((t) => t.length > 0);

  const entity = em.create(cstr, Object.fromEntries(initialOpts)) as New<T>;

  // If the type we just made doesn't exist in `use` yet, remember it. This works better than
  // looking at the values in `fullOpts`, because instead of waiting until the end of the
  // `build fullOpts` loop, we're also invoking `newTestInstance` as we go through the loop itself,
  // creating each test instance within nested/recursive `newTestInstance` calls.
  if (!use.has(entity.constructor)) {
    addForAllMetas(use, entity, false);
  }

  // Now that we've got the entity, do a 2nd pass for o2m/m2m where we pass
  // `{ parent: entity }` down to children (i.e. to replace our original
  // null marker approach).
  const additionalOpts = Object.entries(opts).map(([fieldName, optValue]) => {
    const field = meta.allFields[fieldName];
    // Check `!field` b/c `use` won't have a field
    if (optValue === null || optValue === undefined || !field) {
      return [];
    }
    if (field.kind === "o2m") {
      // If this is a list of children, i.e. book.authors, handle partials to newTestInstance'd
      return [fieldName, (optValue as Array<any>).map((opt) => resolveFactoryOpt(em, opts, field, opt, entity))];
    } else if (field.kind == "m2m") {
      return [
        fieldName,
        (optValue as Array<any>).map((opt) => resolveFactoryOpt(em, opts, field, opt, [entity] as any)),
      ];
    } else if (field.kind === "o2o") {
      // If this is an o2o, i.e. author.image, just pass the optValue (i.e. it won't be a list)
      return [fieldName, resolveFactoryOpt(em, opts, field, optValue as any, entity)];
    } else {
      return [];
    }
  });

  for (const fieldName of selfFields) {
    additionalOpts.push([fieldName, entity]);
  }

  entity.set(Object.fromEntries(additionalOpts.filter((t) => t.length > 0)));

  return entity as DeepNew<T>;
}

/**
 * Resolves a `FactoryEntityOpt` (i.e. maybe an existing entity, maybe an id, maybe a hash of opts) to an entity.
 *
 * If `opt` is `undefined`, then the usual factory semantics of "check use", "look for only one instance" are
 * checked before finally creating a brand new entity.
 *
 * We also accept an optional `otherFieldName` so that, if we do create a new entity, we pass along the null
 * marker for them to know not to create their own version of us.
 *
 * (This was originally intended to be a public API, but the use case ended up being handled
 * by the more-ergonomic `maybeNew` feature; we could explore making this public if another
 * similar use case comes up in the future.)
 */
function resolveFactoryOpt<T extends Entity>(
  em: EntityManager,
  opts: FactoryOpts<any>,
  field: OneToManyField | ManyToOneField | OneToOneField | ManyToManyField | PolymorphicField,
  opt: FactoryEntityOpt<any> | undefined,
  maybeEntity: T | undefined,
): T | IdOf<T> {
  const { meta, otherFieldName } = metaFromFieldAndOpt(field, opt);
  // const meta = field.kind === "poly" ? field.components[0].otherMetadata() : field.otherMetadata();
  // const otherFieldName = field.kind === "poly" ? field.components[0].otherFieldName : field.otherFieldName;
  if (isEntity(opt)) {
    return opt as T;
  } else if (isId(opt)) {
    // Try finding the entity in the UoW, otherwise fallback on just setting it as the id (which we support that now)
    return (em.entities.find((e) => e.idTaggedMaybe === opt || getTestId(em, e) === opt) as T) || opt;
  } else if (opt && !isPlainObject(opt) && !(opt instanceof MaybeNew)) {
    // If opt isn't a POJO, assume this is a completely-custom factory
    return meta.factory(em, opt);
  } else {
    // Look for an obvious default
    if (opt === undefined || opt instanceof MaybeNew) {
      if (field.kind !== "poly") {
        const existing = getObviousDefault(em, meta, opts);
        if (existing) {
          return existing as T;
        }
        // Otherwise fall though to making a new entity via the factory
      } else {
        // We have a polymorphic maybeNew to sort through
        const existing = (
          opt instanceof MaybeNew ? opt.polyRefPreferredOrder : field.components.map((c) => c.otherMetadata().cstr)
        )
          .map((cstr) => getObviousDefault(em, getMetadata(cstr), opts))
          .find((existing) => !!existing);
        if (existing) {
          return existing as T;
        }
      }
    }
    // If this is image.author (m2o) but the other-side is a o2o, pass null instead of []
    maybeEntity ??= (meta.allFields[otherFieldName].kind === "o2o" ? null : []) as any;
    return meta.factory(em, {
      // Because of the `!isPlainObject` above, opt will either be undefined or an object here
      ...applyUse((opt as any) || {}, getOrCreateUseMap(opts), meta),
      ...(opt instanceof MaybeNew && opt.opts),
      [otherFieldName]: maybeEntity,
    });
  }
}

/** Determines the metadata and otherFieldName to use in resolveFactoryOpt to account for polymorphic fields */
function metaFromFieldAndOpt<T extends Entity>(
  field: OneToManyField | ManyToOneField | OneToOneField | ManyToManyField | PolymorphicField,
  opt: FactoryEntityOpt<T> | undefined,
): { meta: EntityMetadata; otherFieldName: string } {
  if (field.kind !== "poly") {
    // If it isn't a poly field, then the field itself can tell us everything we need to know
    return { meta: field.otherMetadata(), otherFieldName: field.otherFieldName };
  }
  const componentToUse =
    // Otherwise, we check if the `opt` specifies a particular component to use, and if not fall back to the first one
    field.components.find(
      (component) =>
        opt instanceof MaybeNew &&
        getAllMetas(component.otherMetadata())
          .map((m) => m.cstr)
          .includes(opt.polyRefPreferredOrder[0]),
    ) ?? field.components[0];
  return { meta: componentToUse.otherMetadata(), otherFieldName: componentToUse.otherFieldName };
}

/** We look for `use`-cached and "if-only-one" defaults. */
function getObviousDefault<T extends Entity>(
  em: EntityManager,
  metadata: EntityMetadata,
  opts: FactoryOpts<any>,
): T | undefined {
  // If neither the user nor the factory (i.e. for an explicit "fan out" case) set this field then look in use
  const use = getOrCreateUseMap(opts);
  // ...we used to check "explicit use" vs. "implicit use" here and only use implicit values
  // if the field was required; but in theory our "use if-only-one" heuristic was already looser
  // that this, so it seems fine to just always check use, regardless of field required/optional.
  //
  // Note that we still use explicit/implicit use to know whether the user's `newAuthor` factory
  // should have a use param passed to it, or if we should apply it here after-the-fact. (This gives
  // `newAuthor` the opportunity to apply defaults.)
  if (use.has(metadata.cstr)) {
    return use.get(metadata.cstr)![0] as T;
  }
  // If there is a single existing instance of this type, assume the caller is fine with that
  const existing = em.entities.filter((e) => e instanceof metadata.cstr);
  if (existing.length === 1) {
    return existing[0] as T;
  }
  return undefined;
}

// When a factory is called, i.e. `newAuthor`, opts will:
//
// - Have values explicitly passed by the user/other factories
// - Have values from the user's explicit `use` parameter
// - NOT have guessed (i.e. "only existing entity") or an implicitly-created `use` parameter
//
// This allows the factory to "fan out" by default, i.e. newInternalUser creating its own User
// and Market creating its own ProductAttribute, which originally we couldn't do when
// guessed/implicit opts were passed directly to `newAuthor`.
//
// Now, if the `newAuthor` factory doesn't explicitly "fan out" (by passing `user: {}` to
// `newTestInstance`), we still "fan in" by having `newTestInstance` sneak in the guessed/implicit
// opts of only-one-existing or factory-created instances.

/** Given we're going to call a factory, make sure any `use`s are put into `opts`. */
function applyUse(optsMaybeNew: object, use: UseMap, metadata: EntityMetadata): object {
  const opts = optsMaybeNew instanceof MaybeNew ? optsMaybeNew.opts : optsMaybeNew;
  // Find any unset fields
  Object.values(metadata.fields)
    .filter((f) => !(f.fieldName in opts))
    .forEach((f) => {
      // And set them to the current `use` entity for their type, if it exists
      if ((isManyToOneField(f) || isOneToOneField(f)) && use.has(f.otherMetadata().cstr)) {
        const def = use.get(f.otherMetadata().cstr)!;
        // Only pass explicit/user-defined `use` entities, so that factories can "fan out" if they want,
        // and not see other factory-created entities look like user-specific values.
        if (def[1]) {
          (opts as any)[f.fieldName] = def[0];
        }
      }
    });
  // Make a copy so that we don't leak `use` onto opts that tests might later use in assertions.
  return { ...opts, use };
}

/**
 * A marker value for later replacement with the test instance's "unique-ish" index.
 *
 * This is meant to just be a helpful identifier in fields like entity names/descriptions for
 * debugging purposes.
 */
export const testIndex: number = -1_111_111_222;

const testIndexString = String(testIndex);

const defaultValueMarker: any = {};

/**
 * A marker value for the default `newTestInstance` behavior.
 *
 * Useful for passing arguments to `newTestInstance` where you sometimes want to
 * provide a specific value, and other times ask for the "pick a default" behavior
 * (i.e. you don't want to pass `undefined` b/c that means explicitly "leave this
 * key unset").
 *
 * Note that this is a function so that we can infer the return type as basically
 * `any` without really using `any` (which would disable type-checking in the rest
 * of the expression).
 */
export function defaultValue<T>(): T {
  return defaultValueMarker;
}

/**
 * Allows a factory to provide a default, i.e. for a field that would otherwise
 * be optional, but still have that field be override by opts & use, without
 * accidentally creating an extra entity as a side-effect.
 *
 * I.e.:
 *
 * ```typescript
 * export function newAuthor(em: Entity, opts: FactoryOpts<Author>) {
 *   return newTestInstance(em, Author, {
 *     // publisher is not technically required, but make one
 *     publisher: maybeNew<Publisher>({}),
 *     ...opts,
 *   });
 * }
 * ```
 */
export function maybeNew<T extends Entity>(opts?: ActualFactoryOpts<T>): FactoryEntityOpt<T> {
  // Return a marker that resolveFactoryOpt will look for
  return new MaybeNew<T>((opts || {}) as any) as any;
}

/**
 * Similar to `maybeNew` in behaviour/use but with enhancements to support polymorphic fields:
 * 1) Allows you to specify which entity type to create, if it is found a new one is needed
 * 2) Allows you to prioritize which existing entities to select
 *
 * For example below, we are specifying that an Author should be created if needed (and optionally it's default opts
 * in the `ifNewOpts` field), and also that the priority order for choosing existing entities is Author, Book, and then Publisher.
 * Note since BookReview is excluded from `existingSearchOrder`, an existing BookReview will never be chosen.
 *
 * ```typescript
 * export function newComment(em: EntityManager, opts: FactoryOpts<Comment> = {}): New<Comment> {
 *   return newTestInstance(em, Comment, {
 *     parent: maybeNewPoly<CommentParent, Author>(
 *       Author, {
 *         ifNewOpts: { firstName: "optional"},
 *         existingSearchOrder: [Author, Book, Publisher]
 *       }),
 *     ...opts,
 *   });
 * }
 * ```
 */
export function maybeNewPoly<T extends Entity, NewT extends T = T>(
  ifNewCstr: EntityConstructor<NewT>,
  opts?: {
    ifNewOpts?: ActualFactoryOpts<NewT>;
    existingSearchOrder?: MaybeAbstractEntityConstructor<T>[];
  },
): FactoryEntityOpt<NewT> {
  // Return a marker that resolveFactoryOpt will look for
  return new MaybeNew<T>((opts?.ifNewOpts || {}) as any, opts?.existingSearchOrder ?? [ifNewCstr]) as any;
}

class MaybeNew<T extends Entity> {
  constructor(
    public opts: FactoryOpts<T>,
    public polyRefPreferredOrder: MaybeAbstractEntityConstructor<T>[] = [],
  ) {}
}

/**
 * Returns a unique-ish test index for putting in `name` fields.
 *
 * Note that `testIndex` is easier to just include in a string, because it doesn't require passing
 * the `EntityManger` and `type`. But if a factory really wants the test index as a number, they can
 * call this method.
 *
 * Despite the name, these are 1-based, i.e. the first `Author` is `a1`.
 */
export function getTestIndex<T extends Entity>(em: EntityManager, type: MaybeAbstractEntityConstructor<T>): number {
  const existing = em.entities.filter((e) => e instanceof type);
  return existing.length + 1;
}

/** Fakes a probably-right id for un-persisted entities. Solely used for quick lookups in tests/factories. */
function getTestId<T extends Entity>(em: EntityManager, entity: T): string {
  const meta = getMetadata(entity);
  const sameType = em.entities.filter((e) => e instanceof meta.cstr);
  return tagId(meta, String(sameType.indexOf(entity) + 1));
}

function defaultValueForField(em: EntityManager, cstr: EntityConstructor<any>, field: PrimitiveField): unknown {
  switch (field.type) {
    case "string":
      if (field.fieldName === "name") {
        return `${cstr.name} ${getTestIndex(em, cstr)}`;
      }
      return field.fieldName;
    case "number":
      return 0;
    case "bigint":
      return 0n;
    case "Date":
      return testDate;
    case "boolean":
      return false;
  }
  return null;
}

// Utility type to destructure T out of T | undefined
type DefinedOr<T> = T | undefined | null;

type DeepPartialOpts<T extends Entity> = AllowRelationsOrPartials<OptsOf<T>>;

/** What a factory can accept for a given entity. */
export type FactoryEntityOpt<T extends Entity> =
  | T
  | IdOf<T>
  | (ActualFactoryOpts<T> & { useFactoryDefaults?: boolean | "none" });

type AllowRelationsOrPartials<T> = {
  [P in keyof T]?: T[P] extends DefinedOr<infer U>
    ? U extends Array<infer V>
      ? V extends Entity
        ? Array<FactoryEntityOpt<V>>
        : T[P]
      : U extends Entity
      ? FactoryEntityOpt<U>
      : T[P]
    : T[P];
};

// Map of constructor --> [default entity, explicitly passed/created internally]
type UseMap = Map<Function, [Entity, boolean]>;

// Do a one-time conversion of the user's `use` array into a map for internal use, which we'll
// then re-use across all `newTestInstance` calls within a given `new<Entity>` call.
function getOrCreateUseMap(opts: FactoryOpts<any>): UseMap {
  const use: Entity | Entity[] | UseMap | undefined = opts.use;
  let map: UseMap;

  if (use instanceof Map) {
    // it's already a map
    map = use;
  } else {
    map = new Map();
    if (use instanceof Array) {
      // it's a top-level `newAuthor` with a user-passed `use: array`
      use.forEach((e) => addForAllMetas(map, e, true));
    } else if (use) {
      // it's a top-level `newAuthor` w/o a `use: entity` param
      addForAllMetas(map, use, true);
    }
    // Scan opts for entities to implicitly add to the map, i.e. if the user
    // calls `newAuthor(em, { book: b1 })`, we'll use `b1` for any other books we
    // might happen to create.
    const todo = [opts];
    while (todo.length > 0) {
      const opts = todo.pop();
      Object.values(opts || {}).forEach((opt) => {
        if (isEntity(opt) && !map.has(opt.constructor)) {
          addForAllMetas(map, opt, false);
        } else if (opt instanceof Array) {
          todo.push(...opt);
        } else if (isPlainObject(opt)) {
          todo.push(opt);
        }
      });
    }
  }
  // Store our potentially-massaged map back into opts i.e. in case resolveFactoryOpt needs it.
  // Use as any b/c UseMap is our internal impl detail and not public.
  (opts as any).use = map;
  return map;
}

// If e is a subtype like SmallPublisher, register it for the base Publisher as well
function addForAllMetas(map: UseMap, e: Entity, explicit: boolean) {
  const meta = getMetadata(e);
  if (meta.baseType || meta.subTypes.length) {
    getAllMetas(meta).forEach((m) => map.set(m.cstr, [e, explicit]));
  } else {
    map.set(meta.cstr, [e, explicit]);
  }
}

/** Merge the factory's opts and the test's opts so that `{ age: 40 }` and `{ firstName: "b1" }` get merged. */
function mergeOpts(testOpts: Record<string, any>, factoryOpts: Record<string, any>): object {
  // Merge the factory's opts and the test's opts so that `{ age: 40 }` and `{ firstName: "b1" }` get merged
  if (testOpts.useFactoryDefaults === false || testOpts.useFactoryDefaults === "none") {
    return testOpts;
  }
  const opts: any = { ...testOpts };
  Object.entries(factoryOpts).forEach(([key, factoryValue]) => {
    const testValue = testOpts[key];
    if (testOpts[key] === undefined) {
      // If the test doesn't define an opt, we have nothing to merge...unless
      // they literally passed `foo: undefined`, in which case they win.
      if (!(key in testOpts)) {
        opts[key] = factoryValue;
      }
    } else if (isPlainObject(factoryValue) && isPlainObject(testValue)) {
      // Should this deep merge? Probably?
      opts[key] = mergeOpts(testValue, factoryValue);
    } else if (factoryValue instanceof MaybeNew && isPlainObject(testValue)) {
      opts[key] = mergeOpts(testValue, factoryValue.opts);
    } else if (factoryValue instanceof MaybeNew && testValue instanceof MaybeNew) {
      opts[key] = new MaybeNew<any>(
        mergeOpts(testValue.opts, factoryValue.opts),
        testValue.polyRefPreferredOrder ?? factoryValue.polyRefPreferredOrder,
      );
    }
  });
  return opts;
}

function getCodegenDefault(cstr: any, fieldName: string): any {
  const m = getMetadata(cstr);
  if (!m.baseType) {
    return (m.cstr as any).defaultValues[fieldName];
  } else {
    // Look for defaults for fields in base types
    return getAllMetas(m)
      .map((m) => (m.cstr as any).defaultValues[fieldName])
      .filter((v) => v !== undefined)[0];
  }
}
