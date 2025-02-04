import { MatchedEntity } from "./toMatchEntity";
export { makeRun, makeRunEach, run, runEach } from "./run";
export { toMatchEntity } from "./toMatchEntity";

declare global {
  namespace jest {
    interface Matchers<R, T = {}> {
      toMatchEntity(expected: MatchedEntity<T>): CustomMatcherResult;
    }
  }
}
