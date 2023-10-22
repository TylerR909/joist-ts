import DataLoader from "dataloader";
import { Entity } from "../Entity";
import { EntityManager } from "../EntityManager";
import { EntityMetadata } from "../EntityMetadata";
import { buildHintTree } from "../HintTree";
import { preloadJoins } from "../joinPreloading";
import { LoadHint } from "../loadHints";
import { indexBy } from "../utils";

export function loadDataLoader<T extends Entity>(
  em: EntityManager,
  meta: EntityMetadata<T>,
): DataLoader<{ entity: string; hint: LoadHint<T> | undefined }, T | undefined> {
  // Batch different populate hints together and defer to the hint tree to do the right thing
  return em.getLoader("load", meta.type, async (loads) => {
    const rootTree = buildHintTree<string>(loads);

    // const alias = abbreviation(meta.tableName);
    // const query: ParsedFindQuery = {
    //   selects: [`"${alias}".*`],
    //   tables: [{ alias, join: "primary", table: meta.tableName }],
    //   conditions: [{ alias, column: "id", dbType: meta.idType, cond: { kind: "in", value: keys } }],
    //   orderBys: [{ alias, column: "id", order: "ASC" }],
    // };
    // addTablePerClassJoinsAndClassTag(query, meta, alias, true);
    // Skip maybeAddOrderBy
    // maybeAddNotSoftDeleted(conditions, meta, alias, "include");
    // const rows = await em.driver.executeFind(em, query, {});
    // Pass overwriteExisting (which is the default anyway) because it might be EntityManager.refresh calling us.
    // const entities = rows.map((row) => em.hydrate(meta.cstr, row, { overwriteExisting: true }));

    const entities = await preloadJoins(em, meta, rootTree, "load");

    const entitiesById = indexBy(entities, (e) => e.idTagged!);

    // Return the results back in the same order as the keys
    return loads.map(({ entity: id }) => {
      const entity = entitiesById.get(id);
      // We generally expect all of our entities to be found, but they may not for API calls like
      // `findOneOrFail` or for `EntityManager.refresh` when the entity has been deleted out from
      // under us.
      if (entity === undefined) {
        const existingEntity = em.findExistingInstance<T>(id);
        if (existingEntity) {
          existingEntity.__orm.deleted = "deleted";
        }
      }
      return entity;
    });
  });
}
