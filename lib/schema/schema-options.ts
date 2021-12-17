import { SearchDataStructure } from "../client";
import { IdStrategy } from "./schema-definitions";

/**
 * Valid values for how to use stop words for a given schema.
 */
export type StopWordOptions = "OFF" | "DEFAULT" | "CUSTOM";

/**
 * Configuration options for a {@link Schema}.
 */
export type SchemaOptions = {

  /**
   * The string that comes before the ID when creating Redis keys for
   * {@link Entity | Entities}. Defaults to the class name of the {@link Entity}.
   * Combined with the results of idStrategy to generate a key. If prefix is `Foo`
   * and idStrategy returns `12345` then the generated key would be `Foo:12345`.
   * */
  prefix?: string;

  /**
   * The name used by RediSearch to store the index for this {@link Schema}. Defaults
   * to prefix followed by `:index`. So, for a prefix of `Foo`, it would use `Foo:index`.
   */
  indexName?: string;

  /** The data structure used to store the {@link Entity} in Redis. */
  dataStructure?: SearchDataStructure;

  /**
   * A function that generates a random {@link Entity.entityId | Entity ID}. Defaults
   * to a function that generates [ULIDs](https://github.com/ulid/spec). Combined with
   * prefix to generate a Redis key. If prefix is `Foo` and idStratgey returns `12345`
   * then the generated key would be `Foo:12345`.
   */
  idStrategy?: IdStrategy;

  /**
   * Configures the usage of stop words. Valid values are `OFF`, `DEFAULT`, and `CUSTOM`. 
   * Setting this of `OFF` disables all stop words. Setting this to `DEFAULT` uses the
   * stop words intrinsic to RediSearch. Setting this to `CUSTOM` tells RediSearch to
   * use the stop words in {@link SchemaOptions.stopWords}.
   */
  useStopWords?: StopWordOptions;

  /**
   * Stop words to be used by this schema. If {@link SchemaOptions.useStopWords} is
   * anything other than `CUSTOM`, this option is ignored.
   */
  stopWords?: string[]
}
