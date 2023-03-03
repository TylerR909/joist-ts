import { Alias } from "src/Aliases";
import { Entity } from "./Entity";
import { FilterOf, OrderOf } from "./EntityManager";
import { ColumnCondition } from "./QueryParser";

/**
 * Combines a `where` filter with optional `orderBy`, `limit`, and `offset` settings.
 */
export type FilterAndSettings<T> = {
  where: FilterOf<T>;
  conditions?: ExpressionFilter;
  orderBy?: OrderOf<T>;
  limit?: number;
  offset?: number;
};

export type OrderBy = "ASC" | "DESC";

/**
 * A filter for an entity of type `T` for `em.find` inline conditions.
 *
 * An entity filter can either filter by "an exact entity" (i.e. the book with id 2)
 * or its own set of filters (i.e. all books with a title that starts with "The").
 *
 * @typeparam T The entity type, i.e. `Author`
 * @typeparam I The ID type of the entity, i.e. `AuthorId`
 * @typeparam F The filter type for the entity, i.e. `AuthorFilter`
 * @typeparam N Either `null | undefined` if the entity can be null, or `never` if it cannot.
 */
export type EntityFilter<T extends Entity, I, F, N> =
  | T
  | T[]
  | I
  | I[]
  | ({ as?: Alias<T> } & F)
  | N
  | { ne: T | I | N };

export type BooleanFilter<N> = true | false | N;

export type FilterWithAlias<T extends Entity> = { as?: Alias<T> } & FilterOf<T>;

/** Filters against a specific field's values within `em.find` inline conditions. */
export type ValueFilter<V, N> =
  | V
  | V[]
  | N
  // Both eq and in are redundant with `V` and `V[]` above but are convenient for matching GQL filter APIs
  | { eq: V | N }
  | { ne: V | N }
  | { in: V[] }
  | { gt: V }
  | { gte: V }
  | { lt: V }
  | { lte: V }
  | { like: V }
  | { ilike: V }
  | { gte: V; lte: V };

/** Filters against complex expressions of filters. */
export type ExpressionFilter =
  | { and: Array<ExpressionFilter | ColumnCondition> }
  | { or: Array<ExpressionFilter | ColumnCondition> };