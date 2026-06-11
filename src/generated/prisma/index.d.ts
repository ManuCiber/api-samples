
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Muestra
 * 
 */
export type Muestra = $Result.DefaultSelection<Prisma.$MuestraPayload>
/**
 * Model Visitador
 * 
 */
export type Visitador = $Result.DefaultSelection<Prisma.$VisitadorPayload>
/**
 * Model Entrega
 * 
 */
export type Entrega = $Result.DefaultSelection<Prisma.$EntregaPayload>
/**
 * Model LogInventario
 * 
 */
export type LogInventario = $Result.DefaultSelection<Prisma.$LogInventarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.muestra`: Exposes CRUD operations for the **Muestra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Muestras
    * const muestras = await prisma.muestra.findMany()
    * ```
    */
  get muestra(): Prisma.MuestraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitador`: Exposes CRUD operations for the **Visitador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitadors
    * const visitadors = await prisma.visitador.findMany()
    * ```
    */
  get visitador(): Prisma.VisitadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrega`: Exposes CRUD operations for the **Entrega** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entregas
    * const entregas = await prisma.entrega.findMany()
    * ```
    */
  get entrega(): Prisma.EntregaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logInventario`: Exposes CRUD operations for the **LogInventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogInventarios
    * const logInventarios = await prisma.logInventario.findMany()
    * ```
    */
  get logInventario(): Prisma.LogInventarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Muestra: 'Muestra',
    Visitador: 'Visitador',
    Entrega: 'Entrega',
    LogInventario: 'LogInventario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "muestra" | "visitador" | "entrega" | "logInventario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Muestra: {
        payload: Prisma.$MuestraPayload<ExtArgs>
        fields: Prisma.MuestraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MuestraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MuestraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>
          }
          findFirst: {
            args: Prisma.MuestraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MuestraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>
          }
          findMany: {
            args: Prisma.MuestraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>[]
          }
          create: {
            args: Prisma.MuestraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>
          }
          createMany: {
            args: Prisma.MuestraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MuestraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>[]
          }
          delete: {
            args: Prisma.MuestraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>
          }
          update: {
            args: Prisma.MuestraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>
          }
          deleteMany: {
            args: Prisma.MuestraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MuestraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MuestraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>[]
          }
          upsert: {
            args: Prisma.MuestraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuestraPayload>
          }
          aggregate: {
            args: Prisma.MuestraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMuestra>
          }
          groupBy: {
            args: Prisma.MuestraGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuestraGroupByOutputType>[]
          }
          count: {
            args: Prisma.MuestraCountArgs<ExtArgs>
            result: $Utils.Optional<MuestraCountAggregateOutputType> | number
          }
        }
      }
      Visitador: {
        payload: Prisma.$VisitadorPayload<ExtArgs>
        fields: Prisma.VisitadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>
          }
          findFirst: {
            args: Prisma.VisitadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>
          }
          findMany: {
            args: Prisma.VisitadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>[]
          }
          create: {
            args: Prisma.VisitadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>
          }
          createMany: {
            args: Prisma.VisitadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>[]
          }
          delete: {
            args: Prisma.VisitadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>
          }
          update: {
            args: Prisma.VisitadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>
          }
          deleteMany: {
            args: Prisma.VisitadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>[]
          }
          upsert: {
            args: Prisma.VisitadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitadorPayload>
          }
          aggregate: {
            args: Prisma.VisitadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitador>
          }
          groupBy: {
            args: Prisma.VisitadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitadorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitadorCountAggregateOutputType> | number
          }
        }
      }
      Entrega: {
        payload: Prisma.$EntregaPayload<ExtArgs>
        fields: Prisma.EntregaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntregaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntregaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          findFirst: {
            args: Prisma.EntregaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntregaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          findMany: {
            args: Prisma.EntregaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>[]
          }
          create: {
            args: Prisma.EntregaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          createMany: {
            args: Prisma.EntregaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntregaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>[]
          }
          delete: {
            args: Prisma.EntregaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          update: {
            args: Prisma.EntregaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          deleteMany: {
            args: Prisma.EntregaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntregaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntregaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>[]
          }
          upsert: {
            args: Prisma.EntregaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntregaPayload>
          }
          aggregate: {
            args: Prisma.EntregaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrega>
          }
          groupBy: {
            args: Prisma.EntregaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntregaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntregaCountArgs<ExtArgs>
            result: $Utils.Optional<EntregaCountAggregateOutputType> | number
          }
        }
      }
      LogInventario: {
        payload: Prisma.$LogInventarioPayload<ExtArgs>
        fields: Prisma.LogInventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogInventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogInventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>
          }
          findFirst: {
            args: Prisma.LogInventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogInventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>
          }
          findMany: {
            args: Prisma.LogInventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>[]
          }
          create: {
            args: Prisma.LogInventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>
          }
          createMany: {
            args: Prisma.LogInventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogInventarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>[]
          }
          delete: {
            args: Prisma.LogInventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>
          }
          update: {
            args: Prisma.LogInventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>
          }
          deleteMany: {
            args: Prisma.LogInventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogInventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogInventarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>[]
          }
          upsert: {
            args: Prisma.LogInventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogInventarioPayload>
          }
          aggregate: {
            args: Prisma.LogInventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogInventario>
          }
          groupBy: {
            args: Prisma.LogInventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogInventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogInventarioCountArgs<ExtArgs>
            result: $Utils.Optional<LogInventarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    muestra?: MuestraOmit
    visitador?: VisitadorOmit
    entrega?: EntregaOmit
    logInventario?: LogInventarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MuestraCountOutputType
   */

  export type MuestraCountOutputType = {
    entregas: number
    logs_inventario: number
  }

  export type MuestraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entregas?: boolean | MuestraCountOutputTypeCountEntregasArgs
    logs_inventario?: boolean | MuestraCountOutputTypeCountLogs_inventarioArgs
  }

  // Custom InputTypes
  /**
   * MuestraCountOutputType without action
   */
  export type MuestraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuestraCountOutputType
     */
    select?: MuestraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MuestraCountOutputType without action
   */
  export type MuestraCountOutputTypeCountEntregasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntregaWhereInput
  }

  /**
   * MuestraCountOutputType without action
   */
  export type MuestraCountOutputTypeCountLogs_inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogInventarioWhereInput
  }


  /**
   * Count Type VisitadorCountOutputType
   */

  export type VisitadorCountOutputType = {
    entregas: number
  }

  export type VisitadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entregas?: boolean | VisitadorCountOutputTypeCountEntregasArgs
  }

  // Custom InputTypes
  /**
   * VisitadorCountOutputType without action
   */
  export type VisitadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitadorCountOutputType
     */
    select?: VisitadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitadorCountOutputType without action
   */
  export type VisitadorCountOutputTypeCountEntregasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntregaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    email: string
    password: string
    role: string
    created_at: Date
    updated_at: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "role" | "created_at" | "updated_at", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      password: string
      role: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'String'>
    readonly created_at: FieldRef<"Usuario", 'DateTime'>
    readonly updated_at: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Muestra
   */

  export type AggregateMuestra = {
    _count: MuestraCountAggregateOutputType | null
    _avg: MuestraAvgAggregateOutputType | null
    _sum: MuestraSumAggregateOutputType | null
    _min: MuestraMinAggregateOutputType | null
    _max: MuestraMaxAggregateOutputType | null
  }

  export type MuestraAvgAggregateOutputType = {
    existencias: number | null
    umbral_minimo: number | null
  }

  export type MuestraSumAggregateOutputType = {
    existencias: number | null
    umbral_minimo: number | null
  }

  export type MuestraMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    existencias: number | null
    umbral_minimo: number | null
    created_at: Date | null
  }

  export type MuestraMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    existencias: number | null
    umbral_minimo: number | null
    created_at: Date | null
  }

  export type MuestraCountAggregateOutputType = {
    id: number
    nombre: number
    existencias: number
    umbral_minimo: number
    created_at: number
    _all: number
  }


  export type MuestraAvgAggregateInputType = {
    existencias?: true
    umbral_minimo?: true
  }

  export type MuestraSumAggregateInputType = {
    existencias?: true
    umbral_minimo?: true
  }

  export type MuestraMinAggregateInputType = {
    id?: true
    nombre?: true
    existencias?: true
    umbral_minimo?: true
    created_at?: true
  }

  export type MuestraMaxAggregateInputType = {
    id?: true
    nombre?: true
    existencias?: true
    umbral_minimo?: true
    created_at?: true
  }

  export type MuestraCountAggregateInputType = {
    id?: true
    nombre?: true
    existencias?: true
    umbral_minimo?: true
    created_at?: true
    _all?: true
  }

  export type MuestraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Muestra to aggregate.
     */
    where?: MuestraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Muestras to fetch.
     */
    orderBy?: MuestraOrderByWithRelationInput | MuestraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MuestraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Muestras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Muestras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Muestras
    **/
    _count?: true | MuestraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MuestraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MuestraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuestraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuestraMaxAggregateInputType
  }

  export type GetMuestraAggregateType<T extends MuestraAggregateArgs> = {
        [P in keyof T & keyof AggregateMuestra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuestra[P]>
      : GetScalarType<T[P], AggregateMuestra[P]>
  }




  export type MuestraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuestraWhereInput
    orderBy?: MuestraOrderByWithAggregationInput | MuestraOrderByWithAggregationInput[]
    by: MuestraScalarFieldEnum[] | MuestraScalarFieldEnum
    having?: MuestraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuestraCountAggregateInputType | true
    _avg?: MuestraAvgAggregateInputType
    _sum?: MuestraSumAggregateInputType
    _min?: MuestraMinAggregateInputType
    _max?: MuestraMaxAggregateInputType
  }

  export type MuestraGroupByOutputType = {
    id: string
    nombre: string
    existencias: number
    umbral_minimo: number
    created_at: Date
    _count: MuestraCountAggregateOutputType | null
    _avg: MuestraAvgAggregateOutputType | null
    _sum: MuestraSumAggregateOutputType | null
    _min: MuestraMinAggregateOutputType | null
    _max: MuestraMaxAggregateOutputType | null
  }

  type GetMuestraGroupByPayload<T extends MuestraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuestraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuestraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuestraGroupByOutputType[P]>
            : GetScalarType<T[P], MuestraGroupByOutputType[P]>
        }
      >
    >


  export type MuestraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    existencias?: boolean
    umbral_minimo?: boolean
    created_at?: boolean
    entregas?: boolean | Muestra$entregasArgs<ExtArgs>
    logs_inventario?: boolean | Muestra$logs_inventarioArgs<ExtArgs>
    _count?: boolean | MuestraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muestra"]>

  export type MuestraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    existencias?: boolean
    umbral_minimo?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["muestra"]>

  export type MuestraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    existencias?: boolean
    umbral_minimo?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["muestra"]>

  export type MuestraSelectScalar = {
    id?: boolean
    nombre?: boolean
    existencias?: boolean
    umbral_minimo?: boolean
    created_at?: boolean
  }

  export type MuestraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "existencias" | "umbral_minimo" | "created_at", ExtArgs["result"]["muestra"]>
  export type MuestraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entregas?: boolean | Muestra$entregasArgs<ExtArgs>
    logs_inventario?: boolean | Muestra$logs_inventarioArgs<ExtArgs>
    _count?: boolean | MuestraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MuestraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MuestraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MuestraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Muestra"
    objects: {
      entregas: Prisma.$EntregaPayload<ExtArgs>[]
      logs_inventario: Prisma.$LogInventarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      existencias: number
      umbral_minimo: number
      created_at: Date
    }, ExtArgs["result"]["muestra"]>
    composites: {}
  }

  type MuestraGetPayload<S extends boolean | null | undefined | MuestraDefaultArgs> = $Result.GetResult<Prisma.$MuestraPayload, S>

  type MuestraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MuestraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MuestraCountAggregateInputType | true
    }

  export interface MuestraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Muestra'], meta: { name: 'Muestra' } }
    /**
     * Find zero or one Muestra that matches the filter.
     * @param {MuestraFindUniqueArgs} args - Arguments to find a Muestra
     * @example
     * // Get one Muestra
     * const muestra = await prisma.muestra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MuestraFindUniqueArgs>(args: SelectSubset<T, MuestraFindUniqueArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Muestra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MuestraFindUniqueOrThrowArgs} args - Arguments to find a Muestra
     * @example
     * // Get one Muestra
     * const muestra = await prisma.muestra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MuestraFindUniqueOrThrowArgs>(args: SelectSubset<T, MuestraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Muestra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuestraFindFirstArgs} args - Arguments to find a Muestra
     * @example
     * // Get one Muestra
     * const muestra = await prisma.muestra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MuestraFindFirstArgs>(args?: SelectSubset<T, MuestraFindFirstArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Muestra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuestraFindFirstOrThrowArgs} args - Arguments to find a Muestra
     * @example
     * // Get one Muestra
     * const muestra = await prisma.muestra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MuestraFindFirstOrThrowArgs>(args?: SelectSubset<T, MuestraFindFirstOrThrowArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Muestras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuestraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Muestras
     * const muestras = await prisma.muestra.findMany()
     * 
     * // Get first 10 Muestras
     * const muestras = await prisma.muestra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muestraWithIdOnly = await prisma.muestra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MuestraFindManyArgs>(args?: SelectSubset<T, MuestraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Muestra.
     * @param {MuestraCreateArgs} args - Arguments to create a Muestra.
     * @example
     * // Create one Muestra
     * const Muestra = await prisma.muestra.create({
     *   data: {
     *     // ... data to create a Muestra
     *   }
     * })
     * 
     */
    create<T extends MuestraCreateArgs>(args: SelectSubset<T, MuestraCreateArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Muestras.
     * @param {MuestraCreateManyArgs} args - Arguments to create many Muestras.
     * @example
     * // Create many Muestras
     * const muestra = await prisma.muestra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MuestraCreateManyArgs>(args?: SelectSubset<T, MuestraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Muestras and returns the data saved in the database.
     * @param {MuestraCreateManyAndReturnArgs} args - Arguments to create many Muestras.
     * @example
     * // Create many Muestras
     * const muestra = await prisma.muestra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Muestras and only return the `id`
     * const muestraWithIdOnly = await prisma.muestra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MuestraCreateManyAndReturnArgs>(args?: SelectSubset<T, MuestraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Muestra.
     * @param {MuestraDeleteArgs} args - Arguments to delete one Muestra.
     * @example
     * // Delete one Muestra
     * const Muestra = await prisma.muestra.delete({
     *   where: {
     *     // ... filter to delete one Muestra
     *   }
     * })
     * 
     */
    delete<T extends MuestraDeleteArgs>(args: SelectSubset<T, MuestraDeleteArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Muestra.
     * @param {MuestraUpdateArgs} args - Arguments to update one Muestra.
     * @example
     * // Update one Muestra
     * const muestra = await prisma.muestra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MuestraUpdateArgs>(args: SelectSubset<T, MuestraUpdateArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Muestras.
     * @param {MuestraDeleteManyArgs} args - Arguments to filter Muestras to delete.
     * @example
     * // Delete a few Muestras
     * const { count } = await prisma.muestra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MuestraDeleteManyArgs>(args?: SelectSubset<T, MuestraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Muestras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuestraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Muestras
     * const muestra = await prisma.muestra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MuestraUpdateManyArgs>(args: SelectSubset<T, MuestraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Muestras and returns the data updated in the database.
     * @param {MuestraUpdateManyAndReturnArgs} args - Arguments to update many Muestras.
     * @example
     * // Update many Muestras
     * const muestra = await prisma.muestra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Muestras and only return the `id`
     * const muestraWithIdOnly = await prisma.muestra.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MuestraUpdateManyAndReturnArgs>(args: SelectSubset<T, MuestraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Muestra.
     * @param {MuestraUpsertArgs} args - Arguments to update or create a Muestra.
     * @example
     * // Update or create a Muestra
     * const muestra = await prisma.muestra.upsert({
     *   create: {
     *     // ... data to create a Muestra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Muestra we want to update
     *   }
     * })
     */
    upsert<T extends MuestraUpsertArgs>(args: SelectSubset<T, MuestraUpsertArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Muestras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuestraCountArgs} args - Arguments to filter Muestras to count.
     * @example
     * // Count the number of Muestras
     * const count = await prisma.muestra.count({
     *   where: {
     *     // ... the filter for the Muestras we want to count
     *   }
     * })
    **/
    count<T extends MuestraCountArgs>(
      args?: Subset<T, MuestraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuestraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Muestra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuestraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MuestraAggregateArgs>(args: Subset<T, MuestraAggregateArgs>): Prisma.PrismaPromise<GetMuestraAggregateType<T>>

    /**
     * Group by Muestra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuestraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MuestraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MuestraGroupByArgs['orderBy'] }
        : { orderBy?: MuestraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MuestraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuestraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Muestra model
   */
  readonly fields: MuestraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Muestra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MuestraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entregas<T extends Muestra$entregasArgs<ExtArgs> = {}>(args?: Subset<T, Muestra$entregasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs_inventario<T extends Muestra$logs_inventarioArgs<ExtArgs> = {}>(args?: Subset<T, Muestra$logs_inventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Muestra model
   */
  interface MuestraFieldRefs {
    readonly id: FieldRef<"Muestra", 'String'>
    readonly nombre: FieldRef<"Muestra", 'String'>
    readonly existencias: FieldRef<"Muestra", 'Int'>
    readonly umbral_minimo: FieldRef<"Muestra", 'Int'>
    readonly created_at: FieldRef<"Muestra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Muestra findUnique
   */
  export type MuestraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * Filter, which Muestra to fetch.
     */
    where: MuestraWhereUniqueInput
  }

  /**
   * Muestra findUniqueOrThrow
   */
  export type MuestraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * Filter, which Muestra to fetch.
     */
    where: MuestraWhereUniqueInput
  }

  /**
   * Muestra findFirst
   */
  export type MuestraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * Filter, which Muestra to fetch.
     */
    where?: MuestraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Muestras to fetch.
     */
    orderBy?: MuestraOrderByWithRelationInput | MuestraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Muestras.
     */
    cursor?: MuestraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Muestras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Muestras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Muestras.
     */
    distinct?: MuestraScalarFieldEnum | MuestraScalarFieldEnum[]
  }

  /**
   * Muestra findFirstOrThrow
   */
  export type MuestraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * Filter, which Muestra to fetch.
     */
    where?: MuestraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Muestras to fetch.
     */
    orderBy?: MuestraOrderByWithRelationInput | MuestraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Muestras.
     */
    cursor?: MuestraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Muestras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Muestras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Muestras.
     */
    distinct?: MuestraScalarFieldEnum | MuestraScalarFieldEnum[]
  }

  /**
   * Muestra findMany
   */
  export type MuestraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * Filter, which Muestras to fetch.
     */
    where?: MuestraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Muestras to fetch.
     */
    orderBy?: MuestraOrderByWithRelationInput | MuestraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Muestras.
     */
    cursor?: MuestraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Muestras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Muestras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Muestras.
     */
    distinct?: MuestraScalarFieldEnum | MuestraScalarFieldEnum[]
  }

  /**
   * Muestra create
   */
  export type MuestraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * The data needed to create a Muestra.
     */
    data: XOR<MuestraCreateInput, MuestraUncheckedCreateInput>
  }

  /**
   * Muestra createMany
   */
  export type MuestraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Muestras.
     */
    data: MuestraCreateManyInput | MuestraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Muestra createManyAndReturn
   */
  export type MuestraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * The data used to create many Muestras.
     */
    data: MuestraCreateManyInput | MuestraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Muestra update
   */
  export type MuestraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * The data needed to update a Muestra.
     */
    data: XOR<MuestraUpdateInput, MuestraUncheckedUpdateInput>
    /**
     * Choose, which Muestra to update.
     */
    where: MuestraWhereUniqueInput
  }

  /**
   * Muestra updateMany
   */
  export type MuestraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Muestras.
     */
    data: XOR<MuestraUpdateManyMutationInput, MuestraUncheckedUpdateManyInput>
    /**
     * Filter which Muestras to update
     */
    where?: MuestraWhereInput
    /**
     * Limit how many Muestras to update.
     */
    limit?: number
  }

  /**
   * Muestra updateManyAndReturn
   */
  export type MuestraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * The data used to update Muestras.
     */
    data: XOR<MuestraUpdateManyMutationInput, MuestraUncheckedUpdateManyInput>
    /**
     * Filter which Muestras to update
     */
    where?: MuestraWhereInput
    /**
     * Limit how many Muestras to update.
     */
    limit?: number
  }

  /**
   * Muestra upsert
   */
  export type MuestraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * The filter to search for the Muestra to update in case it exists.
     */
    where: MuestraWhereUniqueInput
    /**
     * In case the Muestra found by the `where` argument doesn't exist, create a new Muestra with this data.
     */
    create: XOR<MuestraCreateInput, MuestraUncheckedCreateInput>
    /**
     * In case the Muestra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MuestraUpdateInput, MuestraUncheckedUpdateInput>
  }

  /**
   * Muestra delete
   */
  export type MuestraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    /**
     * Filter which Muestra to delete.
     */
    where: MuestraWhereUniqueInput
  }

  /**
   * Muestra deleteMany
   */
  export type MuestraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Muestras to delete
     */
    where?: MuestraWhereInput
    /**
     * Limit how many Muestras to delete.
     */
    limit?: number
  }

  /**
   * Muestra.entregas
   */
  export type Muestra$entregasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    where?: EntregaWhereInput
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    cursor?: EntregaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntregaScalarFieldEnum | EntregaScalarFieldEnum[]
  }

  /**
   * Muestra.logs_inventario
   */
  export type Muestra$logs_inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    where?: LogInventarioWhereInput
    orderBy?: LogInventarioOrderByWithRelationInput | LogInventarioOrderByWithRelationInput[]
    cursor?: LogInventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogInventarioScalarFieldEnum | LogInventarioScalarFieldEnum[]
  }

  /**
   * Muestra without action
   */
  export type MuestraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
  }


  /**
   * Model Visitador
   */

  export type AggregateVisitador = {
    _count: VisitadorCountAggregateOutputType | null
    _avg: VisitadorAvgAggregateOutputType | null
    _sum: VisitadorSumAggregateOutputType | null
    _min: VisitadorMinAggregateOutputType | null
    _max: VisitadorMaxAggregateOutputType | null
  }

  export type VisitadorAvgAggregateOutputType = {
    muestras_asignadas: number | null
  }

  export type VisitadorSumAggregateOutputType = {
    muestras_asignadas: number | null
  }

  export type VisitadorMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    zona: string | null
    muestras_asignadas: number | null
    created_at: Date | null
  }

  export type VisitadorMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    zona: string | null
    muestras_asignadas: number | null
    created_at: Date | null
  }

  export type VisitadorCountAggregateOutputType = {
    id: number
    nombre: number
    zona: number
    muestras_asignadas: number
    created_at: number
    _all: number
  }


  export type VisitadorAvgAggregateInputType = {
    muestras_asignadas?: true
  }

  export type VisitadorSumAggregateInputType = {
    muestras_asignadas?: true
  }

  export type VisitadorMinAggregateInputType = {
    id?: true
    nombre?: true
    zona?: true
    muestras_asignadas?: true
    created_at?: true
  }

  export type VisitadorMaxAggregateInputType = {
    id?: true
    nombre?: true
    zona?: true
    muestras_asignadas?: true
    created_at?: true
  }

  export type VisitadorCountAggregateInputType = {
    id?: true
    nombre?: true
    zona?: true
    muestras_asignadas?: true
    created_at?: true
    _all?: true
  }

  export type VisitadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitador to aggregate.
     */
    where?: VisitadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitadors to fetch.
     */
    orderBy?: VisitadorOrderByWithRelationInput | VisitadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitadors
    **/
    _count?: true | VisitadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitadorMaxAggregateInputType
  }

  export type GetVisitadorAggregateType<T extends VisitadorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitador[P]>
      : GetScalarType<T[P], AggregateVisitador[P]>
  }




  export type VisitadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitadorWhereInput
    orderBy?: VisitadorOrderByWithAggregationInput | VisitadorOrderByWithAggregationInput[]
    by: VisitadorScalarFieldEnum[] | VisitadorScalarFieldEnum
    having?: VisitadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitadorCountAggregateInputType | true
    _avg?: VisitadorAvgAggregateInputType
    _sum?: VisitadorSumAggregateInputType
    _min?: VisitadorMinAggregateInputType
    _max?: VisitadorMaxAggregateInputType
  }

  export type VisitadorGroupByOutputType = {
    id: string
    nombre: string
    zona: string
    muestras_asignadas: number
    created_at: Date
    _count: VisitadorCountAggregateOutputType | null
    _avg: VisitadorAvgAggregateOutputType | null
    _sum: VisitadorSumAggregateOutputType | null
    _min: VisitadorMinAggregateOutputType | null
    _max: VisitadorMaxAggregateOutputType | null
  }

  type GetVisitadorGroupByPayload<T extends VisitadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitadorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitadorGroupByOutputType[P]>
        }
      >
    >


  export type VisitadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    zona?: boolean
    muestras_asignadas?: boolean
    created_at?: boolean
    entregas?: boolean | Visitador$entregasArgs<ExtArgs>
    _count?: boolean | VisitadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitador"]>

  export type VisitadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    zona?: boolean
    muestras_asignadas?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["visitador"]>

  export type VisitadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    zona?: boolean
    muestras_asignadas?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["visitador"]>

  export type VisitadorSelectScalar = {
    id?: boolean
    nombre?: boolean
    zona?: boolean
    muestras_asignadas?: boolean
    created_at?: boolean
  }

  export type VisitadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "zona" | "muestras_asignadas" | "created_at", ExtArgs["result"]["visitador"]>
  export type VisitadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entregas?: boolean | Visitador$entregasArgs<ExtArgs>
    _count?: boolean | VisitadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VisitadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VisitadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitador"
    objects: {
      entregas: Prisma.$EntregaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      zona: string
      muestras_asignadas: number
      created_at: Date
    }, ExtArgs["result"]["visitador"]>
    composites: {}
  }

  type VisitadorGetPayload<S extends boolean | null | undefined | VisitadorDefaultArgs> = $Result.GetResult<Prisma.$VisitadorPayload, S>

  type VisitadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitadorCountAggregateInputType | true
    }

  export interface VisitadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitador'], meta: { name: 'Visitador' } }
    /**
     * Find zero or one Visitador that matches the filter.
     * @param {VisitadorFindUniqueArgs} args - Arguments to find a Visitador
     * @example
     * // Get one Visitador
     * const visitador = await prisma.visitador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitadorFindUniqueArgs>(args: SelectSubset<T, VisitadorFindUniqueArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitadorFindUniqueOrThrowArgs} args - Arguments to find a Visitador
     * @example
     * // Get one Visitador
     * const visitador = await prisma.visitador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitadorFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitadorFindFirstArgs} args - Arguments to find a Visitador
     * @example
     * // Get one Visitador
     * const visitador = await prisma.visitador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitadorFindFirstArgs>(args?: SelectSubset<T, VisitadorFindFirstArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitadorFindFirstOrThrowArgs} args - Arguments to find a Visitador
     * @example
     * // Get one Visitador
     * const visitador = await prisma.visitador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitadorFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitadors
     * const visitadors = await prisma.visitador.findMany()
     * 
     * // Get first 10 Visitadors
     * const visitadors = await prisma.visitador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitadorWithIdOnly = await prisma.visitador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitadorFindManyArgs>(args?: SelectSubset<T, VisitadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitador.
     * @param {VisitadorCreateArgs} args - Arguments to create a Visitador.
     * @example
     * // Create one Visitador
     * const Visitador = await prisma.visitador.create({
     *   data: {
     *     // ... data to create a Visitador
     *   }
     * })
     * 
     */
    create<T extends VisitadorCreateArgs>(args: SelectSubset<T, VisitadorCreateArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitadors.
     * @param {VisitadorCreateManyArgs} args - Arguments to create many Visitadors.
     * @example
     * // Create many Visitadors
     * const visitador = await prisma.visitador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitadorCreateManyArgs>(args?: SelectSubset<T, VisitadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitadors and returns the data saved in the database.
     * @param {VisitadorCreateManyAndReturnArgs} args - Arguments to create many Visitadors.
     * @example
     * // Create many Visitadors
     * const visitador = await prisma.visitador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitadors and only return the `id`
     * const visitadorWithIdOnly = await prisma.visitador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitadorCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitador.
     * @param {VisitadorDeleteArgs} args - Arguments to delete one Visitador.
     * @example
     * // Delete one Visitador
     * const Visitador = await prisma.visitador.delete({
     *   where: {
     *     // ... filter to delete one Visitador
     *   }
     * })
     * 
     */
    delete<T extends VisitadorDeleteArgs>(args: SelectSubset<T, VisitadorDeleteArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitador.
     * @param {VisitadorUpdateArgs} args - Arguments to update one Visitador.
     * @example
     * // Update one Visitador
     * const visitador = await prisma.visitador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitadorUpdateArgs>(args: SelectSubset<T, VisitadorUpdateArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitadors.
     * @param {VisitadorDeleteManyArgs} args - Arguments to filter Visitadors to delete.
     * @example
     * // Delete a few Visitadors
     * const { count } = await prisma.visitador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitadorDeleteManyArgs>(args?: SelectSubset<T, VisitadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitadors
     * const visitador = await prisma.visitador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitadorUpdateManyArgs>(args: SelectSubset<T, VisitadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitadors and returns the data updated in the database.
     * @param {VisitadorUpdateManyAndReturnArgs} args - Arguments to update many Visitadors.
     * @example
     * // Update many Visitadors
     * const visitador = await prisma.visitador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitadors and only return the `id`
     * const visitadorWithIdOnly = await prisma.visitador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitadorUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitador.
     * @param {VisitadorUpsertArgs} args - Arguments to update or create a Visitador.
     * @example
     * // Update or create a Visitador
     * const visitador = await prisma.visitador.upsert({
     *   create: {
     *     // ... data to create a Visitador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitador we want to update
     *   }
     * })
     */
    upsert<T extends VisitadorUpsertArgs>(args: SelectSubset<T, VisitadorUpsertArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitadorCountArgs} args - Arguments to filter Visitadors to count.
     * @example
     * // Count the number of Visitadors
     * const count = await prisma.visitador.count({
     *   where: {
     *     // ... the filter for the Visitadors we want to count
     *   }
     * })
    **/
    count<T extends VisitadorCountArgs>(
      args?: Subset<T, VisitadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitadorAggregateArgs>(args: Subset<T, VisitadorAggregateArgs>): Prisma.PrismaPromise<GetVisitadorAggregateType<T>>

    /**
     * Group by Visitador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitadorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitadorGroupByArgs['orderBy'] }
        : { orderBy?: VisitadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitador model
   */
  readonly fields: VisitadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entregas<T extends Visitador$entregasArgs<ExtArgs> = {}>(args?: Subset<T, Visitador$entregasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visitador model
   */
  interface VisitadorFieldRefs {
    readonly id: FieldRef<"Visitador", 'String'>
    readonly nombre: FieldRef<"Visitador", 'String'>
    readonly zona: FieldRef<"Visitador", 'String'>
    readonly muestras_asignadas: FieldRef<"Visitador", 'Int'>
    readonly created_at: FieldRef<"Visitador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visitador findUnique
   */
  export type VisitadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * Filter, which Visitador to fetch.
     */
    where: VisitadorWhereUniqueInput
  }

  /**
   * Visitador findUniqueOrThrow
   */
  export type VisitadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * Filter, which Visitador to fetch.
     */
    where: VisitadorWhereUniqueInput
  }

  /**
   * Visitador findFirst
   */
  export type VisitadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * Filter, which Visitador to fetch.
     */
    where?: VisitadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitadors to fetch.
     */
    orderBy?: VisitadorOrderByWithRelationInput | VisitadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitadors.
     */
    cursor?: VisitadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitadors.
     */
    distinct?: VisitadorScalarFieldEnum | VisitadorScalarFieldEnum[]
  }

  /**
   * Visitador findFirstOrThrow
   */
  export type VisitadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * Filter, which Visitador to fetch.
     */
    where?: VisitadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitadors to fetch.
     */
    orderBy?: VisitadorOrderByWithRelationInput | VisitadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitadors.
     */
    cursor?: VisitadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitadors.
     */
    distinct?: VisitadorScalarFieldEnum | VisitadorScalarFieldEnum[]
  }

  /**
   * Visitador findMany
   */
  export type VisitadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * Filter, which Visitadors to fetch.
     */
    where?: VisitadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitadors to fetch.
     */
    orderBy?: VisitadorOrderByWithRelationInput | VisitadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitadors.
     */
    cursor?: VisitadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitadors.
     */
    distinct?: VisitadorScalarFieldEnum | VisitadorScalarFieldEnum[]
  }

  /**
   * Visitador create
   */
  export type VisitadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitador.
     */
    data: XOR<VisitadorCreateInput, VisitadorUncheckedCreateInput>
  }

  /**
   * Visitador createMany
   */
  export type VisitadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitadors.
     */
    data: VisitadorCreateManyInput | VisitadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitador createManyAndReturn
   */
  export type VisitadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * The data used to create many Visitadors.
     */
    data: VisitadorCreateManyInput | VisitadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitador update
   */
  export type VisitadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitador.
     */
    data: XOR<VisitadorUpdateInput, VisitadorUncheckedUpdateInput>
    /**
     * Choose, which Visitador to update.
     */
    where: VisitadorWhereUniqueInput
  }

  /**
   * Visitador updateMany
   */
  export type VisitadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitadors.
     */
    data: XOR<VisitadorUpdateManyMutationInput, VisitadorUncheckedUpdateManyInput>
    /**
     * Filter which Visitadors to update
     */
    where?: VisitadorWhereInput
    /**
     * Limit how many Visitadors to update.
     */
    limit?: number
  }

  /**
   * Visitador updateManyAndReturn
   */
  export type VisitadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * The data used to update Visitadors.
     */
    data: XOR<VisitadorUpdateManyMutationInput, VisitadorUncheckedUpdateManyInput>
    /**
     * Filter which Visitadors to update
     */
    where?: VisitadorWhereInput
    /**
     * Limit how many Visitadors to update.
     */
    limit?: number
  }

  /**
   * Visitador upsert
   */
  export type VisitadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitador to update in case it exists.
     */
    where: VisitadorWhereUniqueInput
    /**
     * In case the Visitador found by the `where` argument doesn't exist, create a new Visitador with this data.
     */
    create: XOR<VisitadorCreateInput, VisitadorUncheckedCreateInput>
    /**
     * In case the Visitador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitadorUpdateInput, VisitadorUncheckedUpdateInput>
  }

  /**
   * Visitador delete
   */
  export type VisitadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
    /**
     * Filter which Visitador to delete.
     */
    where: VisitadorWhereUniqueInput
  }

  /**
   * Visitador deleteMany
   */
  export type VisitadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitadors to delete
     */
    where?: VisitadorWhereInput
    /**
     * Limit how many Visitadors to delete.
     */
    limit?: number
  }

  /**
   * Visitador.entregas
   */
  export type Visitador$entregasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    where?: EntregaWhereInput
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    cursor?: EntregaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntregaScalarFieldEnum | EntregaScalarFieldEnum[]
  }

  /**
   * Visitador without action
   */
  export type VisitadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitador
     */
    select?: VisitadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitador
     */
    omit?: VisitadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitadorInclude<ExtArgs> | null
  }


  /**
   * Model Entrega
   */

  export type AggregateEntrega = {
    _count: EntregaCountAggregateOutputType | null
    _avg: EntregaAvgAggregateOutputType | null
    _sum: EntregaSumAggregateOutputType | null
    _min: EntregaMinAggregateOutputType | null
    _max: EntregaMaxAggregateOutputType | null
  }

  export type EntregaAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type EntregaSumAggregateOutputType = {
    cantidad: number | null
  }

  export type EntregaMinAggregateOutputType = {
    id: string | null
    muestra_id: string | null
    visitador_id: string | null
    nombre_visitador: string | null
    nombre_muestra: string | null
    cantidad: number | null
    fecha: Date | null
    hora: Date | null
    estado: string | null
    created_at: Date | null
  }

  export type EntregaMaxAggregateOutputType = {
    id: string | null
    muestra_id: string | null
    visitador_id: string | null
    nombre_visitador: string | null
    nombre_muestra: string | null
    cantidad: number | null
    fecha: Date | null
    hora: Date | null
    estado: string | null
    created_at: Date | null
  }

  export type EntregaCountAggregateOutputType = {
    id: number
    muestra_id: number
    visitador_id: number
    nombre_visitador: number
    nombre_muestra: number
    cantidad: number
    fecha: number
    hora: number
    estado: number
    created_at: number
    _all: number
  }


  export type EntregaAvgAggregateInputType = {
    cantidad?: true
  }

  export type EntregaSumAggregateInputType = {
    cantidad?: true
  }

  export type EntregaMinAggregateInputType = {
    id?: true
    muestra_id?: true
    visitador_id?: true
    nombre_visitador?: true
    nombre_muestra?: true
    cantidad?: true
    fecha?: true
    hora?: true
    estado?: true
    created_at?: true
  }

  export type EntregaMaxAggregateInputType = {
    id?: true
    muestra_id?: true
    visitador_id?: true
    nombre_visitador?: true
    nombre_muestra?: true
    cantidad?: true
    fecha?: true
    hora?: true
    estado?: true
    created_at?: true
  }

  export type EntregaCountAggregateInputType = {
    id?: true
    muestra_id?: true
    visitador_id?: true
    nombre_visitador?: true
    nombre_muestra?: true
    cantidad?: true
    fecha?: true
    hora?: true
    estado?: true
    created_at?: true
    _all?: true
  }

  export type EntregaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrega to aggregate.
     */
    where?: EntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entregas to fetch.
     */
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entregas
    **/
    _count?: true | EntregaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntregaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntregaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntregaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntregaMaxAggregateInputType
  }

  export type GetEntregaAggregateType<T extends EntregaAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrega]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrega[P]>
      : GetScalarType<T[P], AggregateEntrega[P]>
  }




  export type EntregaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntregaWhereInput
    orderBy?: EntregaOrderByWithAggregationInput | EntregaOrderByWithAggregationInput[]
    by: EntregaScalarFieldEnum[] | EntregaScalarFieldEnum
    having?: EntregaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntregaCountAggregateInputType | true
    _avg?: EntregaAvgAggregateInputType
    _sum?: EntregaSumAggregateInputType
    _min?: EntregaMinAggregateInputType
    _max?: EntregaMaxAggregateInputType
  }

  export type EntregaGroupByOutputType = {
    id: string
    muestra_id: string
    visitador_id: string
    nombre_visitador: string | null
    nombre_muestra: string | null
    cantidad: number
    fecha: Date
    hora: Date
    estado: string | null
    created_at: Date
    _count: EntregaCountAggregateOutputType | null
    _avg: EntregaAvgAggregateOutputType | null
    _sum: EntregaSumAggregateOutputType | null
    _min: EntregaMinAggregateOutputType | null
    _max: EntregaMaxAggregateOutputType | null
  }

  type GetEntregaGroupByPayload<T extends EntregaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntregaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntregaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntregaGroupByOutputType[P]>
            : GetScalarType<T[P], EntregaGroupByOutputType[P]>
        }
      >
    >


  export type EntregaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    muestra_id?: boolean
    visitador_id?: boolean
    nombre_visitador?: boolean
    nombre_muestra?: boolean
    cantidad?: boolean
    fecha?: boolean
    hora?: boolean
    estado?: boolean
    created_at?: boolean
    muestra?: boolean | MuestraDefaultArgs<ExtArgs>
    visitador?: boolean | VisitadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrega"]>

  export type EntregaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    muestra_id?: boolean
    visitador_id?: boolean
    nombre_visitador?: boolean
    nombre_muestra?: boolean
    cantidad?: boolean
    fecha?: boolean
    hora?: boolean
    estado?: boolean
    created_at?: boolean
    muestra?: boolean | MuestraDefaultArgs<ExtArgs>
    visitador?: boolean | VisitadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrega"]>

  export type EntregaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    muestra_id?: boolean
    visitador_id?: boolean
    nombre_visitador?: boolean
    nombre_muestra?: boolean
    cantidad?: boolean
    fecha?: boolean
    hora?: boolean
    estado?: boolean
    created_at?: boolean
    muestra?: boolean | MuestraDefaultArgs<ExtArgs>
    visitador?: boolean | VisitadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrega"]>

  export type EntregaSelectScalar = {
    id?: boolean
    muestra_id?: boolean
    visitador_id?: boolean
    nombre_visitador?: boolean
    nombre_muestra?: boolean
    cantidad?: boolean
    fecha?: boolean
    hora?: boolean
    estado?: boolean
    created_at?: boolean
  }

  export type EntregaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "muestra_id" | "visitador_id" | "nombre_visitador" | "nombre_muestra" | "cantidad" | "fecha" | "hora" | "estado" | "created_at", ExtArgs["result"]["entrega"]>
  export type EntregaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | MuestraDefaultArgs<ExtArgs>
    visitador?: boolean | VisitadorDefaultArgs<ExtArgs>
  }
  export type EntregaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | MuestraDefaultArgs<ExtArgs>
    visitador?: boolean | VisitadorDefaultArgs<ExtArgs>
  }
  export type EntregaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | MuestraDefaultArgs<ExtArgs>
    visitador?: boolean | VisitadorDefaultArgs<ExtArgs>
  }

  export type $EntregaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrega"
    objects: {
      muestra: Prisma.$MuestraPayload<ExtArgs>
      visitador: Prisma.$VisitadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      muestra_id: string
      visitador_id: string
      nombre_visitador: string | null
      nombre_muestra: string | null
      cantidad: number
      fecha: Date
      hora: Date
      estado: string | null
      created_at: Date
    }, ExtArgs["result"]["entrega"]>
    composites: {}
  }

  type EntregaGetPayload<S extends boolean | null | undefined | EntregaDefaultArgs> = $Result.GetResult<Prisma.$EntregaPayload, S>

  type EntregaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntregaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntregaCountAggregateInputType | true
    }

  export interface EntregaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrega'], meta: { name: 'Entrega' } }
    /**
     * Find zero or one Entrega that matches the filter.
     * @param {EntregaFindUniqueArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntregaFindUniqueArgs>(args: SelectSubset<T, EntregaFindUniqueArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrega that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntregaFindUniqueOrThrowArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntregaFindUniqueOrThrowArgs>(args: SelectSubset<T, EntregaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrega that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindFirstArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntregaFindFirstArgs>(args?: SelectSubset<T, EntregaFindFirstArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrega that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindFirstOrThrowArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntregaFindFirstOrThrowArgs>(args?: SelectSubset<T, EntregaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entregas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entregas
     * const entregas = await prisma.entrega.findMany()
     * 
     * // Get first 10 Entregas
     * const entregas = await prisma.entrega.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entregaWithIdOnly = await prisma.entrega.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntregaFindManyArgs>(args?: SelectSubset<T, EntregaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrega.
     * @param {EntregaCreateArgs} args - Arguments to create a Entrega.
     * @example
     * // Create one Entrega
     * const Entrega = await prisma.entrega.create({
     *   data: {
     *     // ... data to create a Entrega
     *   }
     * })
     * 
     */
    create<T extends EntregaCreateArgs>(args: SelectSubset<T, EntregaCreateArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entregas.
     * @param {EntregaCreateManyArgs} args - Arguments to create many Entregas.
     * @example
     * // Create many Entregas
     * const entrega = await prisma.entrega.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntregaCreateManyArgs>(args?: SelectSubset<T, EntregaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entregas and returns the data saved in the database.
     * @param {EntregaCreateManyAndReturnArgs} args - Arguments to create many Entregas.
     * @example
     * // Create many Entregas
     * const entrega = await prisma.entrega.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entregas and only return the `id`
     * const entregaWithIdOnly = await prisma.entrega.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntregaCreateManyAndReturnArgs>(args?: SelectSubset<T, EntregaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entrega.
     * @param {EntregaDeleteArgs} args - Arguments to delete one Entrega.
     * @example
     * // Delete one Entrega
     * const Entrega = await prisma.entrega.delete({
     *   where: {
     *     // ... filter to delete one Entrega
     *   }
     * })
     * 
     */
    delete<T extends EntregaDeleteArgs>(args: SelectSubset<T, EntregaDeleteArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrega.
     * @param {EntregaUpdateArgs} args - Arguments to update one Entrega.
     * @example
     * // Update one Entrega
     * const entrega = await prisma.entrega.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntregaUpdateArgs>(args: SelectSubset<T, EntregaUpdateArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entregas.
     * @param {EntregaDeleteManyArgs} args - Arguments to filter Entregas to delete.
     * @example
     * // Delete a few Entregas
     * const { count } = await prisma.entrega.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntregaDeleteManyArgs>(args?: SelectSubset<T, EntregaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entregas
     * const entrega = await prisma.entrega.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntregaUpdateManyArgs>(args: SelectSubset<T, EntregaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entregas and returns the data updated in the database.
     * @param {EntregaUpdateManyAndReturnArgs} args - Arguments to update many Entregas.
     * @example
     * // Update many Entregas
     * const entrega = await prisma.entrega.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entregas and only return the `id`
     * const entregaWithIdOnly = await prisma.entrega.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntregaUpdateManyAndReturnArgs>(args: SelectSubset<T, EntregaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entrega.
     * @param {EntregaUpsertArgs} args - Arguments to update or create a Entrega.
     * @example
     * // Update or create a Entrega
     * const entrega = await prisma.entrega.upsert({
     *   create: {
     *     // ... data to create a Entrega
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrega we want to update
     *   }
     * })
     */
    upsert<T extends EntregaUpsertArgs>(args: SelectSubset<T, EntregaUpsertArgs<ExtArgs>>): Prisma__EntregaClient<$Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaCountArgs} args - Arguments to filter Entregas to count.
     * @example
     * // Count the number of Entregas
     * const count = await prisma.entrega.count({
     *   where: {
     *     // ... the filter for the Entregas we want to count
     *   }
     * })
    **/
    count<T extends EntregaCountArgs>(
      args?: Subset<T, EntregaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntregaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntregaAggregateArgs>(args: Subset<T, EntregaAggregateArgs>): Prisma.PrismaPromise<GetEntregaAggregateType<T>>

    /**
     * Group by Entrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntregaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntregaGroupByArgs['orderBy'] }
        : { orderBy?: EntregaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntregaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntregaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrega model
   */
  readonly fields: EntregaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrega.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntregaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muestra<T extends MuestraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MuestraDefaultArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visitador<T extends VisitadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitadorDefaultArgs<ExtArgs>>): Prisma__VisitadorClient<$Result.GetResult<Prisma.$VisitadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entrega model
   */
  interface EntregaFieldRefs {
    readonly id: FieldRef<"Entrega", 'String'>
    readonly muestra_id: FieldRef<"Entrega", 'String'>
    readonly visitador_id: FieldRef<"Entrega", 'String'>
    readonly nombre_visitador: FieldRef<"Entrega", 'String'>
    readonly nombre_muestra: FieldRef<"Entrega", 'String'>
    readonly cantidad: FieldRef<"Entrega", 'Int'>
    readonly fecha: FieldRef<"Entrega", 'DateTime'>
    readonly hora: FieldRef<"Entrega", 'DateTime'>
    readonly estado: FieldRef<"Entrega", 'String'>
    readonly created_at: FieldRef<"Entrega", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entrega findUnique
   */
  export type EntregaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entrega to fetch.
     */
    where: EntregaWhereUniqueInput
  }

  /**
   * Entrega findUniqueOrThrow
   */
  export type EntregaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entrega to fetch.
     */
    where: EntregaWhereUniqueInput
  }

  /**
   * Entrega findFirst
   */
  export type EntregaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entrega to fetch.
     */
    where?: EntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entregas to fetch.
     */
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entregas.
     */
    cursor?: EntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entregas.
     */
    distinct?: EntregaScalarFieldEnum | EntregaScalarFieldEnum[]
  }

  /**
   * Entrega findFirstOrThrow
   */
  export type EntregaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entrega to fetch.
     */
    where?: EntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entregas to fetch.
     */
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entregas.
     */
    cursor?: EntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entregas.
     */
    distinct?: EntregaScalarFieldEnum | EntregaScalarFieldEnum[]
  }

  /**
   * Entrega findMany
   */
  export type EntregaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter, which Entregas to fetch.
     */
    where?: EntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entregas to fetch.
     */
    orderBy?: EntregaOrderByWithRelationInput | EntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entregas.
     */
    cursor?: EntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entregas.
     */
    distinct?: EntregaScalarFieldEnum | EntregaScalarFieldEnum[]
  }

  /**
   * Entrega create
   */
  export type EntregaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrega.
     */
    data: XOR<EntregaCreateInput, EntregaUncheckedCreateInput>
  }

  /**
   * Entrega createMany
   */
  export type EntregaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entregas.
     */
    data: EntregaCreateManyInput | EntregaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrega createManyAndReturn
   */
  export type EntregaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * The data used to create many Entregas.
     */
    data: EntregaCreateManyInput | EntregaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entrega update
   */
  export type EntregaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrega.
     */
    data: XOR<EntregaUpdateInput, EntregaUncheckedUpdateInput>
    /**
     * Choose, which Entrega to update.
     */
    where: EntregaWhereUniqueInput
  }

  /**
   * Entrega updateMany
   */
  export type EntregaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entregas.
     */
    data: XOR<EntregaUpdateManyMutationInput, EntregaUncheckedUpdateManyInput>
    /**
     * Filter which Entregas to update
     */
    where?: EntregaWhereInput
    /**
     * Limit how many Entregas to update.
     */
    limit?: number
  }

  /**
   * Entrega updateManyAndReturn
   */
  export type EntregaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * The data used to update Entregas.
     */
    data: XOR<EntregaUpdateManyMutationInput, EntregaUncheckedUpdateManyInput>
    /**
     * Filter which Entregas to update
     */
    where?: EntregaWhereInput
    /**
     * Limit how many Entregas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entrega upsert
   */
  export type EntregaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrega to update in case it exists.
     */
    where: EntregaWhereUniqueInput
    /**
     * In case the Entrega found by the `where` argument doesn't exist, create a new Entrega with this data.
     */
    create: XOR<EntregaCreateInput, EntregaUncheckedCreateInput>
    /**
     * In case the Entrega was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntregaUpdateInput, EntregaUncheckedUpdateInput>
  }

  /**
   * Entrega delete
   */
  export type EntregaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
    /**
     * Filter which Entrega to delete.
     */
    where: EntregaWhereUniqueInput
  }

  /**
   * Entrega deleteMany
   */
  export type EntregaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entregas to delete
     */
    where?: EntregaWhereInput
    /**
     * Limit how many Entregas to delete.
     */
    limit?: number
  }

  /**
   * Entrega without action
   */
  export type EntregaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: EntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrega
     */
    omit?: EntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntregaInclude<ExtArgs> | null
  }


  /**
   * Model LogInventario
   */

  export type AggregateLogInventario = {
    _count: LogInventarioCountAggregateOutputType | null
    _avg: LogInventarioAvgAggregateOutputType | null
    _sum: LogInventarioSumAggregateOutputType | null
    _min: LogInventarioMinAggregateOutputType | null
    _max: LogInventarioMaxAggregateOutputType | null
  }

  export type LogInventarioAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type LogInventarioSumAggregateOutputType = {
    cantidad: number | null
  }

  export type LogInventarioMinAggregateOutputType = {
    id: string | null
    muestra_id: string | null
    tipo_movimiento: string | null
    cantidad: number | null
    descripcion: string | null
    usuario_id: string | null
    created_at: Date | null
  }

  export type LogInventarioMaxAggregateOutputType = {
    id: string | null
    muestra_id: string | null
    tipo_movimiento: string | null
    cantidad: number | null
    descripcion: string | null
    usuario_id: string | null
    created_at: Date | null
  }

  export type LogInventarioCountAggregateOutputType = {
    id: number
    muestra_id: number
    tipo_movimiento: number
    cantidad: number
    descripcion: number
    usuario_id: number
    created_at: number
    _all: number
  }


  export type LogInventarioAvgAggregateInputType = {
    cantidad?: true
  }

  export type LogInventarioSumAggregateInputType = {
    cantidad?: true
  }

  export type LogInventarioMinAggregateInputType = {
    id?: true
    muestra_id?: true
    tipo_movimiento?: true
    cantidad?: true
    descripcion?: true
    usuario_id?: true
    created_at?: true
  }

  export type LogInventarioMaxAggregateInputType = {
    id?: true
    muestra_id?: true
    tipo_movimiento?: true
    cantidad?: true
    descripcion?: true
    usuario_id?: true
    created_at?: true
  }

  export type LogInventarioCountAggregateInputType = {
    id?: true
    muestra_id?: true
    tipo_movimiento?: true
    cantidad?: true
    descripcion?: true
    usuario_id?: true
    created_at?: true
    _all?: true
  }

  export type LogInventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogInventario to aggregate.
     */
    where?: LogInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogInventarios to fetch.
     */
    orderBy?: LogInventarioOrderByWithRelationInput | LogInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogInventarios
    **/
    _count?: true | LogInventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogInventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogInventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogInventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogInventarioMaxAggregateInputType
  }

  export type GetLogInventarioAggregateType<T extends LogInventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateLogInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogInventario[P]>
      : GetScalarType<T[P], AggregateLogInventario[P]>
  }




  export type LogInventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogInventarioWhereInput
    orderBy?: LogInventarioOrderByWithAggregationInput | LogInventarioOrderByWithAggregationInput[]
    by: LogInventarioScalarFieldEnum[] | LogInventarioScalarFieldEnum
    having?: LogInventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogInventarioCountAggregateInputType | true
    _avg?: LogInventarioAvgAggregateInputType
    _sum?: LogInventarioSumAggregateInputType
    _min?: LogInventarioMinAggregateInputType
    _max?: LogInventarioMaxAggregateInputType
  }

  export type LogInventarioGroupByOutputType = {
    id: string
    muestra_id: string | null
    tipo_movimiento: string
    cantidad: number
    descripcion: string | null
    usuario_id: string | null
    created_at: Date
    _count: LogInventarioCountAggregateOutputType | null
    _avg: LogInventarioAvgAggregateOutputType | null
    _sum: LogInventarioSumAggregateOutputType | null
    _min: LogInventarioMinAggregateOutputType | null
    _max: LogInventarioMaxAggregateOutputType | null
  }

  type GetLogInventarioGroupByPayload<T extends LogInventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogInventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogInventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogInventarioGroupByOutputType[P]>
            : GetScalarType<T[P], LogInventarioGroupByOutputType[P]>
        }
      >
    >


  export type LogInventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    muestra_id?: boolean
    tipo_movimiento?: boolean
    cantidad?: boolean
    descripcion?: boolean
    usuario_id?: boolean
    created_at?: boolean
    muestra?: boolean | LogInventario$muestraArgs<ExtArgs>
  }, ExtArgs["result"]["logInventario"]>

  export type LogInventarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    muestra_id?: boolean
    tipo_movimiento?: boolean
    cantidad?: boolean
    descripcion?: boolean
    usuario_id?: boolean
    created_at?: boolean
    muestra?: boolean | LogInventario$muestraArgs<ExtArgs>
  }, ExtArgs["result"]["logInventario"]>

  export type LogInventarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    muestra_id?: boolean
    tipo_movimiento?: boolean
    cantidad?: boolean
    descripcion?: boolean
    usuario_id?: boolean
    created_at?: boolean
    muestra?: boolean | LogInventario$muestraArgs<ExtArgs>
  }, ExtArgs["result"]["logInventario"]>

  export type LogInventarioSelectScalar = {
    id?: boolean
    muestra_id?: boolean
    tipo_movimiento?: boolean
    cantidad?: boolean
    descripcion?: boolean
    usuario_id?: boolean
    created_at?: boolean
  }

  export type LogInventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "muestra_id" | "tipo_movimiento" | "cantidad" | "descripcion" | "usuario_id" | "created_at", ExtArgs["result"]["logInventario"]>
  export type LogInventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | LogInventario$muestraArgs<ExtArgs>
  }
  export type LogInventarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | LogInventario$muestraArgs<ExtArgs>
  }
  export type LogInventarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muestra?: boolean | LogInventario$muestraArgs<ExtArgs>
  }

  export type $LogInventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogInventario"
    objects: {
      muestra: Prisma.$MuestraPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      muestra_id: string | null
      tipo_movimiento: string
      cantidad: number
      descripcion: string | null
      usuario_id: string | null
      created_at: Date
    }, ExtArgs["result"]["logInventario"]>
    composites: {}
  }

  type LogInventarioGetPayload<S extends boolean | null | undefined | LogInventarioDefaultArgs> = $Result.GetResult<Prisma.$LogInventarioPayload, S>

  type LogInventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogInventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogInventarioCountAggregateInputType | true
    }

  export interface LogInventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogInventario'], meta: { name: 'LogInventario' } }
    /**
     * Find zero or one LogInventario that matches the filter.
     * @param {LogInventarioFindUniqueArgs} args - Arguments to find a LogInventario
     * @example
     * // Get one LogInventario
     * const logInventario = await prisma.logInventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogInventarioFindUniqueArgs>(args: SelectSubset<T, LogInventarioFindUniqueArgs<ExtArgs>>): Prisma__LogInventarioClient<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogInventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogInventarioFindUniqueOrThrowArgs} args - Arguments to find a LogInventario
     * @example
     * // Get one LogInventario
     * const logInventario = await prisma.logInventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogInventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, LogInventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogInventarioClient<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogInventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogInventarioFindFirstArgs} args - Arguments to find a LogInventario
     * @example
     * // Get one LogInventario
     * const logInventario = await prisma.logInventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogInventarioFindFirstArgs>(args?: SelectSubset<T, LogInventarioFindFirstArgs<ExtArgs>>): Prisma__LogInventarioClient<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogInventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogInventarioFindFirstOrThrowArgs} args - Arguments to find a LogInventario
     * @example
     * // Get one LogInventario
     * const logInventario = await prisma.logInventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogInventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, LogInventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogInventarioClient<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogInventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogInventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogInventarios
     * const logInventarios = await prisma.logInventario.findMany()
     * 
     * // Get first 10 LogInventarios
     * const logInventarios = await prisma.logInventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logInventarioWithIdOnly = await prisma.logInventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogInventarioFindManyArgs>(args?: SelectSubset<T, LogInventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogInventario.
     * @param {LogInventarioCreateArgs} args - Arguments to create a LogInventario.
     * @example
     * // Create one LogInventario
     * const LogInventario = await prisma.logInventario.create({
     *   data: {
     *     // ... data to create a LogInventario
     *   }
     * })
     * 
     */
    create<T extends LogInventarioCreateArgs>(args: SelectSubset<T, LogInventarioCreateArgs<ExtArgs>>): Prisma__LogInventarioClient<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogInventarios.
     * @param {LogInventarioCreateManyArgs} args - Arguments to create many LogInventarios.
     * @example
     * // Create many LogInventarios
     * const logInventario = await prisma.logInventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogInventarioCreateManyArgs>(args?: SelectSubset<T, LogInventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogInventarios and returns the data saved in the database.
     * @param {LogInventarioCreateManyAndReturnArgs} args - Arguments to create many LogInventarios.
     * @example
     * // Create many LogInventarios
     * const logInventario = await prisma.logInventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogInventarios and only return the `id`
     * const logInventarioWithIdOnly = await prisma.logInventario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogInventarioCreateManyAndReturnArgs>(args?: SelectSubset<T, LogInventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogInventario.
     * @param {LogInventarioDeleteArgs} args - Arguments to delete one LogInventario.
     * @example
     * // Delete one LogInventario
     * const LogInventario = await prisma.logInventario.delete({
     *   where: {
     *     // ... filter to delete one LogInventario
     *   }
     * })
     * 
     */
    delete<T extends LogInventarioDeleteArgs>(args: SelectSubset<T, LogInventarioDeleteArgs<ExtArgs>>): Prisma__LogInventarioClient<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogInventario.
     * @param {LogInventarioUpdateArgs} args - Arguments to update one LogInventario.
     * @example
     * // Update one LogInventario
     * const logInventario = await prisma.logInventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogInventarioUpdateArgs>(args: SelectSubset<T, LogInventarioUpdateArgs<ExtArgs>>): Prisma__LogInventarioClient<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogInventarios.
     * @param {LogInventarioDeleteManyArgs} args - Arguments to filter LogInventarios to delete.
     * @example
     * // Delete a few LogInventarios
     * const { count } = await prisma.logInventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogInventarioDeleteManyArgs>(args?: SelectSubset<T, LogInventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogInventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogInventarios
     * const logInventario = await prisma.logInventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogInventarioUpdateManyArgs>(args: SelectSubset<T, LogInventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogInventarios and returns the data updated in the database.
     * @param {LogInventarioUpdateManyAndReturnArgs} args - Arguments to update many LogInventarios.
     * @example
     * // Update many LogInventarios
     * const logInventario = await prisma.logInventario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogInventarios and only return the `id`
     * const logInventarioWithIdOnly = await prisma.logInventario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogInventarioUpdateManyAndReturnArgs>(args: SelectSubset<T, LogInventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogInventario.
     * @param {LogInventarioUpsertArgs} args - Arguments to update or create a LogInventario.
     * @example
     * // Update or create a LogInventario
     * const logInventario = await prisma.logInventario.upsert({
     *   create: {
     *     // ... data to create a LogInventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogInventario we want to update
     *   }
     * })
     */
    upsert<T extends LogInventarioUpsertArgs>(args: SelectSubset<T, LogInventarioUpsertArgs<ExtArgs>>): Prisma__LogInventarioClient<$Result.GetResult<Prisma.$LogInventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogInventarioCountArgs} args - Arguments to filter LogInventarios to count.
     * @example
     * // Count the number of LogInventarios
     * const count = await prisma.logInventario.count({
     *   where: {
     *     // ... the filter for the LogInventarios we want to count
     *   }
     * })
    **/
    count<T extends LogInventarioCountArgs>(
      args?: Subset<T, LogInventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogInventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogInventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogInventarioAggregateArgs>(args: Subset<T, LogInventarioAggregateArgs>): Prisma.PrismaPromise<GetLogInventarioAggregateType<T>>

    /**
     * Group by LogInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogInventarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogInventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogInventarioGroupByArgs['orderBy'] }
        : { orderBy?: LogInventarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogInventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogInventario model
   */
  readonly fields: LogInventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogInventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogInventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muestra<T extends LogInventario$muestraArgs<ExtArgs> = {}>(args?: Subset<T, LogInventario$muestraArgs<ExtArgs>>): Prisma__MuestraClient<$Result.GetResult<Prisma.$MuestraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogInventario model
   */
  interface LogInventarioFieldRefs {
    readonly id: FieldRef<"LogInventario", 'String'>
    readonly muestra_id: FieldRef<"LogInventario", 'String'>
    readonly tipo_movimiento: FieldRef<"LogInventario", 'String'>
    readonly cantidad: FieldRef<"LogInventario", 'Int'>
    readonly descripcion: FieldRef<"LogInventario", 'String'>
    readonly usuario_id: FieldRef<"LogInventario", 'String'>
    readonly created_at: FieldRef<"LogInventario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogInventario findUnique
   */
  export type LogInventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * Filter, which LogInventario to fetch.
     */
    where: LogInventarioWhereUniqueInput
  }

  /**
   * LogInventario findUniqueOrThrow
   */
  export type LogInventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * Filter, which LogInventario to fetch.
     */
    where: LogInventarioWhereUniqueInput
  }

  /**
   * LogInventario findFirst
   */
  export type LogInventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * Filter, which LogInventario to fetch.
     */
    where?: LogInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogInventarios to fetch.
     */
    orderBy?: LogInventarioOrderByWithRelationInput | LogInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogInventarios.
     */
    cursor?: LogInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogInventarios.
     */
    distinct?: LogInventarioScalarFieldEnum | LogInventarioScalarFieldEnum[]
  }

  /**
   * LogInventario findFirstOrThrow
   */
  export type LogInventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * Filter, which LogInventario to fetch.
     */
    where?: LogInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogInventarios to fetch.
     */
    orderBy?: LogInventarioOrderByWithRelationInput | LogInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogInventarios.
     */
    cursor?: LogInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogInventarios.
     */
    distinct?: LogInventarioScalarFieldEnum | LogInventarioScalarFieldEnum[]
  }

  /**
   * LogInventario findMany
   */
  export type LogInventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * Filter, which LogInventarios to fetch.
     */
    where?: LogInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogInventarios to fetch.
     */
    orderBy?: LogInventarioOrderByWithRelationInput | LogInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogInventarios.
     */
    cursor?: LogInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogInventarios.
     */
    distinct?: LogInventarioScalarFieldEnum | LogInventarioScalarFieldEnum[]
  }

  /**
   * LogInventario create
   */
  export type LogInventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a LogInventario.
     */
    data: XOR<LogInventarioCreateInput, LogInventarioUncheckedCreateInput>
  }

  /**
   * LogInventario createMany
   */
  export type LogInventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogInventarios.
     */
    data: LogInventarioCreateManyInput | LogInventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogInventario createManyAndReturn
   */
  export type LogInventarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * The data used to create many LogInventarios.
     */
    data: LogInventarioCreateManyInput | LogInventarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogInventario update
   */
  export type LogInventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a LogInventario.
     */
    data: XOR<LogInventarioUpdateInput, LogInventarioUncheckedUpdateInput>
    /**
     * Choose, which LogInventario to update.
     */
    where: LogInventarioWhereUniqueInput
  }

  /**
   * LogInventario updateMany
   */
  export type LogInventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogInventarios.
     */
    data: XOR<LogInventarioUpdateManyMutationInput, LogInventarioUncheckedUpdateManyInput>
    /**
     * Filter which LogInventarios to update
     */
    where?: LogInventarioWhereInput
    /**
     * Limit how many LogInventarios to update.
     */
    limit?: number
  }

  /**
   * LogInventario updateManyAndReturn
   */
  export type LogInventarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * The data used to update LogInventarios.
     */
    data: XOR<LogInventarioUpdateManyMutationInput, LogInventarioUncheckedUpdateManyInput>
    /**
     * Filter which LogInventarios to update
     */
    where?: LogInventarioWhereInput
    /**
     * Limit how many LogInventarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogInventario upsert
   */
  export type LogInventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the LogInventario to update in case it exists.
     */
    where: LogInventarioWhereUniqueInput
    /**
     * In case the LogInventario found by the `where` argument doesn't exist, create a new LogInventario with this data.
     */
    create: XOR<LogInventarioCreateInput, LogInventarioUncheckedCreateInput>
    /**
     * In case the LogInventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogInventarioUpdateInput, LogInventarioUncheckedUpdateInput>
  }

  /**
   * LogInventario delete
   */
  export type LogInventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
    /**
     * Filter which LogInventario to delete.
     */
    where: LogInventarioWhereUniqueInput
  }

  /**
   * LogInventario deleteMany
   */
  export type LogInventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogInventarios to delete
     */
    where?: LogInventarioWhereInput
    /**
     * Limit how many LogInventarios to delete.
     */
    limit?: number
  }

  /**
   * LogInventario.muestra
   */
  export type LogInventario$muestraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Muestra
     */
    select?: MuestraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Muestra
     */
    omit?: MuestraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuestraInclude<ExtArgs> | null
    where?: MuestraWhereInput
  }

  /**
   * LogInventario without action
   */
  export type LogInventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogInventario
     */
    select?: LogInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogInventario
     */
    omit?: LogInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInventarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const MuestraScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    existencias: 'existencias',
    umbral_minimo: 'umbral_minimo',
    created_at: 'created_at'
  };

  export type MuestraScalarFieldEnum = (typeof MuestraScalarFieldEnum)[keyof typeof MuestraScalarFieldEnum]


  export const VisitadorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    zona: 'zona',
    muestras_asignadas: 'muestras_asignadas',
    created_at: 'created_at'
  };

  export type VisitadorScalarFieldEnum = (typeof VisitadorScalarFieldEnum)[keyof typeof VisitadorScalarFieldEnum]


  export const EntregaScalarFieldEnum: {
    id: 'id',
    muestra_id: 'muestra_id',
    visitador_id: 'visitador_id',
    nombre_visitador: 'nombre_visitador',
    nombre_muestra: 'nombre_muestra',
    cantidad: 'cantidad',
    fecha: 'fecha',
    hora: 'hora',
    estado: 'estado',
    created_at: 'created_at'
  };

  export type EntregaScalarFieldEnum = (typeof EntregaScalarFieldEnum)[keyof typeof EntregaScalarFieldEnum]


  export const LogInventarioScalarFieldEnum: {
    id: 'id',
    muestra_id: 'muestra_id',
    tipo_movimiento: 'tipo_movimiento',
    cantidad: 'cantidad',
    descripcion: 'descripcion',
    usuario_id: 'usuario_id',
    created_at: 'created_at'
  };

  export type LogInventarioScalarFieldEnum = (typeof LogInventarioScalarFieldEnum)[keyof typeof LogInventarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    role?: StringWithAggregatesFilter<"Usuario"> | string
    created_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type MuestraWhereInput = {
    AND?: MuestraWhereInput | MuestraWhereInput[]
    OR?: MuestraWhereInput[]
    NOT?: MuestraWhereInput | MuestraWhereInput[]
    id?: StringFilter<"Muestra"> | string
    nombre?: StringFilter<"Muestra"> | string
    existencias?: IntFilter<"Muestra"> | number
    umbral_minimo?: IntFilter<"Muestra"> | number
    created_at?: DateTimeFilter<"Muestra"> | Date | string
    entregas?: EntregaListRelationFilter
    logs_inventario?: LogInventarioListRelationFilter
  }

  export type MuestraOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    existencias?: SortOrder
    umbral_minimo?: SortOrder
    created_at?: SortOrder
    entregas?: EntregaOrderByRelationAggregateInput
    logs_inventario?: LogInventarioOrderByRelationAggregateInput
  }

  export type MuestraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MuestraWhereInput | MuestraWhereInput[]
    OR?: MuestraWhereInput[]
    NOT?: MuestraWhereInput | MuestraWhereInput[]
    nombre?: StringFilter<"Muestra"> | string
    existencias?: IntFilter<"Muestra"> | number
    umbral_minimo?: IntFilter<"Muestra"> | number
    created_at?: DateTimeFilter<"Muestra"> | Date | string
    entregas?: EntregaListRelationFilter
    logs_inventario?: LogInventarioListRelationFilter
  }, "id">

  export type MuestraOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    existencias?: SortOrder
    umbral_minimo?: SortOrder
    created_at?: SortOrder
    _count?: MuestraCountOrderByAggregateInput
    _avg?: MuestraAvgOrderByAggregateInput
    _max?: MuestraMaxOrderByAggregateInput
    _min?: MuestraMinOrderByAggregateInput
    _sum?: MuestraSumOrderByAggregateInput
  }

  export type MuestraScalarWhereWithAggregatesInput = {
    AND?: MuestraScalarWhereWithAggregatesInput | MuestraScalarWhereWithAggregatesInput[]
    OR?: MuestraScalarWhereWithAggregatesInput[]
    NOT?: MuestraScalarWhereWithAggregatesInput | MuestraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Muestra"> | string
    nombre?: StringWithAggregatesFilter<"Muestra"> | string
    existencias?: IntWithAggregatesFilter<"Muestra"> | number
    umbral_minimo?: IntWithAggregatesFilter<"Muestra"> | number
    created_at?: DateTimeWithAggregatesFilter<"Muestra"> | Date | string
  }

  export type VisitadorWhereInput = {
    AND?: VisitadorWhereInput | VisitadorWhereInput[]
    OR?: VisitadorWhereInput[]
    NOT?: VisitadorWhereInput | VisitadorWhereInput[]
    id?: StringFilter<"Visitador"> | string
    nombre?: StringFilter<"Visitador"> | string
    zona?: StringFilter<"Visitador"> | string
    muestras_asignadas?: IntFilter<"Visitador"> | number
    created_at?: DateTimeFilter<"Visitador"> | Date | string
    entregas?: EntregaListRelationFilter
  }

  export type VisitadorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    muestras_asignadas?: SortOrder
    created_at?: SortOrder
    entregas?: EntregaOrderByRelationAggregateInput
  }

  export type VisitadorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisitadorWhereInput | VisitadorWhereInput[]
    OR?: VisitadorWhereInput[]
    NOT?: VisitadorWhereInput | VisitadorWhereInput[]
    nombre?: StringFilter<"Visitador"> | string
    zona?: StringFilter<"Visitador"> | string
    muestras_asignadas?: IntFilter<"Visitador"> | number
    created_at?: DateTimeFilter<"Visitador"> | Date | string
    entregas?: EntregaListRelationFilter
  }, "id">

  export type VisitadorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    muestras_asignadas?: SortOrder
    created_at?: SortOrder
    _count?: VisitadorCountOrderByAggregateInput
    _avg?: VisitadorAvgOrderByAggregateInput
    _max?: VisitadorMaxOrderByAggregateInput
    _min?: VisitadorMinOrderByAggregateInput
    _sum?: VisitadorSumOrderByAggregateInput
  }

  export type VisitadorScalarWhereWithAggregatesInput = {
    AND?: VisitadorScalarWhereWithAggregatesInput | VisitadorScalarWhereWithAggregatesInput[]
    OR?: VisitadorScalarWhereWithAggregatesInput[]
    NOT?: VisitadorScalarWhereWithAggregatesInput | VisitadorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Visitador"> | string
    nombre?: StringWithAggregatesFilter<"Visitador"> | string
    zona?: StringWithAggregatesFilter<"Visitador"> | string
    muestras_asignadas?: IntWithAggregatesFilter<"Visitador"> | number
    created_at?: DateTimeWithAggregatesFilter<"Visitador"> | Date | string
  }

  export type EntregaWhereInput = {
    AND?: EntregaWhereInput | EntregaWhereInput[]
    OR?: EntregaWhereInput[]
    NOT?: EntregaWhereInput | EntregaWhereInput[]
    id?: StringFilter<"Entrega"> | string
    muestra_id?: StringFilter<"Entrega"> | string
    visitador_id?: StringFilter<"Entrega"> | string
    nombre_visitador?: StringNullableFilter<"Entrega"> | string | null
    nombre_muestra?: StringNullableFilter<"Entrega"> | string | null
    cantidad?: IntFilter<"Entrega"> | number
    fecha?: DateTimeFilter<"Entrega"> | Date | string
    hora?: DateTimeFilter<"Entrega"> | Date | string
    estado?: StringNullableFilter<"Entrega"> | string | null
    created_at?: DateTimeFilter<"Entrega"> | Date | string
    muestra?: XOR<MuestraScalarRelationFilter, MuestraWhereInput>
    visitador?: XOR<VisitadorScalarRelationFilter, VisitadorWhereInput>
  }

  export type EntregaOrderByWithRelationInput = {
    id?: SortOrder
    muestra_id?: SortOrder
    visitador_id?: SortOrder
    nombre_visitador?: SortOrderInput | SortOrder
    nombre_muestra?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrderInput | SortOrder
    created_at?: SortOrder
    muestra?: MuestraOrderByWithRelationInput
    visitador?: VisitadorOrderByWithRelationInput
  }

  export type EntregaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntregaWhereInput | EntregaWhereInput[]
    OR?: EntregaWhereInput[]
    NOT?: EntregaWhereInput | EntregaWhereInput[]
    muestra_id?: StringFilter<"Entrega"> | string
    visitador_id?: StringFilter<"Entrega"> | string
    nombre_visitador?: StringNullableFilter<"Entrega"> | string | null
    nombre_muestra?: StringNullableFilter<"Entrega"> | string | null
    cantidad?: IntFilter<"Entrega"> | number
    fecha?: DateTimeFilter<"Entrega"> | Date | string
    hora?: DateTimeFilter<"Entrega"> | Date | string
    estado?: StringNullableFilter<"Entrega"> | string | null
    created_at?: DateTimeFilter<"Entrega"> | Date | string
    muestra?: XOR<MuestraScalarRelationFilter, MuestraWhereInput>
    visitador?: XOR<VisitadorScalarRelationFilter, VisitadorWhereInput>
  }, "id">

  export type EntregaOrderByWithAggregationInput = {
    id?: SortOrder
    muestra_id?: SortOrder
    visitador_id?: SortOrder
    nombre_visitador?: SortOrderInput | SortOrder
    nombre_muestra?: SortOrderInput | SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: EntregaCountOrderByAggregateInput
    _avg?: EntregaAvgOrderByAggregateInput
    _max?: EntregaMaxOrderByAggregateInput
    _min?: EntregaMinOrderByAggregateInput
    _sum?: EntregaSumOrderByAggregateInput
  }

  export type EntregaScalarWhereWithAggregatesInput = {
    AND?: EntregaScalarWhereWithAggregatesInput | EntregaScalarWhereWithAggregatesInput[]
    OR?: EntregaScalarWhereWithAggregatesInput[]
    NOT?: EntregaScalarWhereWithAggregatesInput | EntregaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entrega"> | string
    muestra_id?: StringWithAggregatesFilter<"Entrega"> | string
    visitador_id?: StringWithAggregatesFilter<"Entrega"> | string
    nombre_visitador?: StringNullableWithAggregatesFilter<"Entrega"> | string | null
    nombre_muestra?: StringNullableWithAggregatesFilter<"Entrega"> | string | null
    cantidad?: IntWithAggregatesFilter<"Entrega"> | number
    fecha?: DateTimeWithAggregatesFilter<"Entrega"> | Date | string
    hora?: DateTimeWithAggregatesFilter<"Entrega"> | Date | string
    estado?: StringNullableWithAggregatesFilter<"Entrega"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Entrega"> | Date | string
  }

  export type LogInventarioWhereInput = {
    AND?: LogInventarioWhereInput | LogInventarioWhereInput[]
    OR?: LogInventarioWhereInput[]
    NOT?: LogInventarioWhereInput | LogInventarioWhereInput[]
    id?: StringFilter<"LogInventario"> | string
    muestra_id?: StringNullableFilter<"LogInventario"> | string | null
    tipo_movimiento?: StringFilter<"LogInventario"> | string
    cantidad?: IntFilter<"LogInventario"> | number
    descripcion?: StringNullableFilter<"LogInventario"> | string | null
    usuario_id?: StringNullableFilter<"LogInventario"> | string | null
    created_at?: DateTimeFilter<"LogInventario"> | Date | string
    muestra?: XOR<MuestraNullableScalarRelationFilter, MuestraWhereInput> | null
  }

  export type LogInventarioOrderByWithRelationInput = {
    id?: SortOrder
    muestra_id?: SortOrderInput | SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    muestra?: MuestraOrderByWithRelationInput
  }

  export type LogInventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogInventarioWhereInput | LogInventarioWhereInput[]
    OR?: LogInventarioWhereInput[]
    NOT?: LogInventarioWhereInput | LogInventarioWhereInput[]
    muestra_id?: StringNullableFilter<"LogInventario"> | string | null
    tipo_movimiento?: StringFilter<"LogInventario"> | string
    cantidad?: IntFilter<"LogInventario"> | number
    descripcion?: StringNullableFilter<"LogInventario"> | string | null
    usuario_id?: StringNullableFilter<"LogInventario"> | string | null
    created_at?: DateTimeFilter<"LogInventario"> | Date | string
    muestra?: XOR<MuestraNullableScalarRelationFilter, MuestraWhereInput> | null
  }, "id">

  export type LogInventarioOrderByWithAggregationInput = {
    id?: SortOrder
    muestra_id?: SortOrderInput | SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: LogInventarioCountOrderByAggregateInput
    _avg?: LogInventarioAvgOrderByAggregateInput
    _max?: LogInventarioMaxOrderByAggregateInput
    _min?: LogInventarioMinOrderByAggregateInput
    _sum?: LogInventarioSumOrderByAggregateInput
  }

  export type LogInventarioScalarWhereWithAggregatesInput = {
    AND?: LogInventarioScalarWhereWithAggregatesInput | LogInventarioScalarWhereWithAggregatesInput[]
    OR?: LogInventarioScalarWhereWithAggregatesInput[]
    NOT?: LogInventarioScalarWhereWithAggregatesInput | LogInventarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogInventario"> | string
    muestra_id?: StringNullableWithAggregatesFilter<"LogInventario"> | string | null
    tipo_movimiento?: StringWithAggregatesFilter<"LogInventario"> | string
    cantidad?: IntWithAggregatesFilter<"LogInventario"> | number
    descripcion?: StringNullableWithAggregatesFilter<"LogInventario"> | string | null
    usuario_id?: StringNullableWithAggregatesFilter<"LogInventario"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"LogInventario"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    email: string
    password: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuestraCreateInput = {
    id?: string
    nombre: string
    existencias: number
    umbral_minimo: number
    created_at?: Date | string
    entregas?: EntregaCreateNestedManyWithoutMuestraInput
    logs_inventario?: LogInventarioCreateNestedManyWithoutMuestraInput
  }

  export type MuestraUncheckedCreateInput = {
    id?: string
    nombre: string
    existencias: number
    umbral_minimo: number
    created_at?: Date | string
    entregas?: EntregaUncheckedCreateNestedManyWithoutMuestraInput
    logs_inventario?: LogInventarioUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type MuestraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    existencias?: IntFieldUpdateOperationsInput | number
    umbral_minimo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entregas?: EntregaUpdateManyWithoutMuestraNestedInput
    logs_inventario?: LogInventarioUpdateManyWithoutMuestraNestedInput
  }

  export type MuestraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    existencias?: IntFieldUpdateOperationsInput | number
    umbral_minimo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entregas?: EntregaUncheckedUpdateManyWithoutMuestraNestedInput
    logs_inventario?: LogInventarioUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type MuestraCreateManyInput = {
    id?: string
    nombre: string
    existencias: number
    umbral_minimo: number
    created_at?: Date | string
  }

  export type MuestraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    existencias?: IntFieldUpdateOperationsInput | number
    umbral_minimo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuestraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    existencias?: IntFieldUpdateOperationsInput | number
    umbral_minimo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitadorCreateInput = {
    id?: string
    nombre: string
    zona: string
    muestras_asignadas: number
    created_at?: Date | string
    entregas?: EntregaCreateNestedManyWithoutVisitadorInput
  }

  export type VisitadorUncheckedCreateInput = {
    id?: string
    nombre: string
    zona: string
    muestras_asignadas: number
    created_at?: Date | string
    entregas?: EntregaUncheckedCreateNestedManyWithoutVisitadorInput
  }

  export type VisitadorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    muestras_asignadas?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entregas?: EntregaUpdateManyWithoutVisitadorNestedInput
  }

  export type VisitadorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    muestras_asignadas?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entregas?: EntregaUncheckedUpdateManyWithoutVisitadorNestedInput
  }

  export type VisitadorCreateManyInput = {
    id?: string
    nombre: string
    zona: string
    muestras_asignadas: number
    created_at?: Date | string
  }

  export type VisitadorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    muestras_asignadas?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitadorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    muestras_asignadas?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntregaCreateInput = {
    id?: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
    muestra: MuestraCreateNestedOneWithoutEntregasInput
    visitador: VisitadorCreateNestedOneWithoutEntregasInput
  }

  export type EntregaUncheckedCreateInput = {
    id?: string
    muestra_id: string
    visitador_id: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
  }

  export type EntregaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    muestra?: MuestraUpdateOneRequiredWithoutEntregasNestedInput
    visitador?: VisitadorUpdateOneRequiredWithoutEntregasNestedInput
  }

  export type EntregaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    muestra_id?: StringFieldUpdateOperationsInput | string
    visitador_id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntregaCreateManyInput = {
    id?: string
    muestra_id: string
    visitador_id: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
  }

  export type EntregaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntregaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    muestra_id?: StringFieldUpdateOperationsInput | string
    visitador_id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogInventarioCreateInput = {
    id?: string
    tipo_movimiento: string
    cantidad: number
    descripcion?: string | null
    usuario_id?: string | null
    created_at?: Date | string
    muestra?: MuestraCreateNestedOneWithoutLogs_inventarioInput
  }

  export type LogInventarioUncheckedCreateInput = {
    id?: string
    muestra_id?: string | null
    tipo_movimiento: string
    cantidad: number
    descripcion?: string | null
    usuario_id?: string | null
    created_at?: Date | string
  }

  export type LogInventarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    muestra?: MuestraUpdateOneWithoutLogs_inventarioNestedInput
  }

  export type LogInventarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    muestra_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogInventarioCreateManyInput = {
    id?: string
    muestra_id?: string | null
    tipo_movimiento: string
    cantidad: number
    descripcion?: string | null
    usuario_id?: string | null
    created_at?: Date | string
  }

  export type LogInventarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogInventarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    muestra_id?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EntregaListRelationFilter = {
    every?: EntregaWhereInput
    some?: EntregaWhereInput
    none?: EntregaWhereInput
  }

  export type LogInventarioListRelationFilter = {
    every?: LogInventarioWhereInput
    some?: LogInventarioWhereInput
    none?: LogInventarioWhereInput
  }

  export type EntregaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogInventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MuestraCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    existencias?: SortOrder
    umbral_minimo?: SortOrder
    created_at?: SortOrder
  }

  export type MuestraAvgOrderByAggregateInput = {
    existencias?: SortOrder
    umbral_minimo?: SortOrder
  }

  export type MuestraMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    existencias?: SortOrder
    umbral_minimo?: SortOrder
    created_at?: SortOrder
  }

  export type MuestraMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    existencias?: SortOrder
    umbral_minimo?: SortOrder
    created_at?: SortOrder
  }

  export type MuestraSumOrderByAggregateInput = {
    existencias?: SortOrder
    umbral_minimo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type VisitadorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    muestras_asignadas?: SortOrder
    created_at?: SortOrder
  }

  export type VisitadorAvgOrderByAggregateInput = {
    muestras_asignadas?: SortOrder
  }

  export type VisitadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    muestras_asignadas?: SortOrder
    created_at?: SortOrder
  }

  export type VisitadorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    zona?: SortOrder
    muestras_asignadas?: SortOrder
    created_at?: SortOrder
  }

  export type VisitadorSumOrderByAggregateInput = {
    muestras_asignadas?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MuestraScalarRelationFilter = {
    is?: MuestraWhereInput
    isNot?: MuestraWhereInput
  }

  export type VisitadorScalarRelationFilter = {
    is?: VisitadorWhereInput
    isNot?: VisitadorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EntregaCountOrderByAggregateInput = {
    id?: SortOrder
    muestra_id?: SortOrder
    visitador_id?: SortOrder
    nombre_visitador?: SortOrder
    nombre_muestra?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
  }

  export type EntregaAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type EntregaMaxOrderByAggregateInput = {
    id?: SortOrder
    muestra_id?: SortOrder
    visitador_id?: SortOrder
    nombre_visitador?: SortOrder
    nombre_muestra?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
  }

  export type EntregaMinOrderByAggregateInput = {
    id?: SortOrder
    muestra_id?: SortOrder
    visitador_id?: SortOrder
    nombre_visitador?: SortOrder
    nombre_muestra?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
  }

  export type EntregaSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MuestraNullableScalarRelationFilter = {
    is?: MuestraWhereInput | null
    isNot?: MuestraWhereInput | null
  }

  export type LogInventarioCountOrderByAggregateInput = {
    id?: SortOrder
    muestra_id?: SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    descripcion?: SortOrder
    usuario_id?: SortOrder
    created_at?: SortOrder
  }

  export type LogInventarioAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type LogInventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    muestra_id?: SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    descripcion?: SortOrder
    usuario_id?: SortOrder
    created_at?: SortOrder
  }

  export type LogInventarioMinOrderByAggregateInput = {
    id?: SortOrder
    muestra_id?: SortOrder
    tipo_movimiento?: SortOrder
    cantidad?: SortOrder
    descripcion?: SortOrder
    usuario_id?: SortOrder
    created_at?: SortOrder
  }

  export type LogInventarioSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EntregaCreateNestedManyWithoutMuestraInput = {
    create?: XOR<EntregaCreateWithoutMuestraInput, EntregaUncheckedCreateWithoutMuestraInput> | EntregaCreateWithoutMuestraInput[] | EntregaUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: EntregaCreateOrConnectWithoutMuestraInput | EntregaCreateOrConnectWithoutMuestraInput[]
    createMany?: EntregaCreateManyMuestraInputEnvelope
    connect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
  }

  export type LogInventarioCreateNestedManyWithoutMuestraInput = {
    create?: XOR<LogInventarioCreateWithoutMuestraInput, LogInventarioUncheckedCreateWithoutMuestraInput> | LogInventarioCreateWithoutMuestraInput[] | LogInventarioUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: LogInventarioCreateOrConnectWithoutMuestraInput | LogInventarioCreateOrConnectWithoutMuestraInput[]
    createMany?: LogInventarioCreateManyMuestraInputEnvelope
    connect?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
  }

  export type EntregaUncheckedCreateNestedManyWithoutMuestraInput = {
    create?: XOR<EntregaCreateWithoutMuestraInput, EntregaUncheckedCreateWithoutMuestraInput> | EntregaCreateWithoutMuestraInput[] | EntregaUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: EntregaCreateOrConnectWithoutMuestraInput | EntregaCreateOrConnectWithoutMuestraInput[]
    createMany?: EntregaCreateManyMuestraInputEnvelope
    connect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
  }

  export type LogInventarioUncheckedCreateNestedManyWithoutMuestraInput = {
    create?: XOR<LogInventarioCreateWithoutMuestraInput, LogInventarioUncheckedCreateWithoutMuestraInput> | LogInventarioCreateWithoutMuestraInput[] | LogInventarioUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: LogInventarioCreateOrConnectWithoutMuestraInput | LogInventarioCreateOrConnectWithoutMuestraInput[]
    createMany?: LogInventarioCreateManyMuestraInputEnvelope
    connect?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EntregaUpdateManyWithoutMuestraNestedInput = {
    create?: XOR<EntregaCreateWithoutMuestraInput, EntregaUncheckedCreateWithoutMuestraInput> | EntregaCreateWithoutMuestraInput[] | EntregaUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: EntregaCreateOrConnectWithoutMuestraInput | EntregaCreateOrConnectWithoutMuestraInput[]
    upsert?: EntregaUpsertWithWhereUniqueWithoutMuestraInput | EntregaUpsertWithWhereUniqueWithoutMuestraInput[]
    createMany?: EntregaCreateManyMuestraInputEnvelope
    set?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    disconnect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    delete?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    connect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    update?: EntregaUpdateWithWhereUniqueWithoutMuestraInput | EntregaUpdateWithWhereUniqueWithoutMuestraInput[]
    updateMany?: EntregaUpdateManyWithWhereWithoutMuestraInput | EntregaUpdateManyWithWhereWithoutMuestraInput[]
    deleteMany?: EntregaScalarWhereInput | EntregaScalarWhereInput[]
  }

  export type LogInventarioUpdateManyWithoutMuestraNestedInput = {
    create?: XOR<LogInventarioCreateWithoutMuestraInput, LogInventarioUncheckedCreateWithoutMuestraInput> | LogInventarioCreateWithoutMuestraInput[] | LogInventarioUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: LogInventarioCreateOrConnectWithoutMuestraInput | LogInventarioCreateOrConnectWithoutMuestraInput[]
    upsert?: LogInventarioUpsertWithWhereUniqueWithoutMuestraInput | LogInventarioUpsertWithWhereUniqueWithoutMuestraInput[]
    createMany?: LogInventarioCreateManyMuestraInputEnvelope
    set?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
    disconnect?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
    delete?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
    connect?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
    update?: LogInventarioUpdateWithWhereUniqueWithoutMuestraInput | LogInventarioUpdateWithWhereUniqueWithoutMuestraInput[]
    updateMany?: LogInventarioUpdateManyWithWhereWithoutMuestraInput | LogInventarioUpdateManyWithWhereWithoutMuestraInput[]
    deleteMany?: LogInventarioScalarWhereInput | LogInventarioScalarWhereInput[]
  }

  export type EntregaUncheckedUpdateManyWithoutMuestraNestedInput = {
    create?: XOR<EntregaCreateWithoutMuestraInput, EntregaUncheckedCreateWithoutMuestraInput> | EntregaCreateWithoutMuestraInput[] | EntregaUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: EntregaCreateOrConnectWithoutMuestraInput | EntregaCreateOrConnectWithoutMuestraInput[]
    upsert?: EntregaUpsertWithWhereUniqueWithoutMuestraInput | EntregaUpsertWithWhereUniqueWithoutMuestraInput[]
    createMany?: EntregaCreateManyMuestraInputEnvelope
    set?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    disconnect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    delete?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    connect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    update?: EntregaUpdateWithWhereUniqueWithoutMuestraInput | EntregaUpdateWithWhereUniqueWithoutMuestraInput[]
    updateMany?: EntregaUpdateManyWithWhereWithoutMuestraInput | EntregaUpdateManyWithWhereWithoutMuestraInput[]
    deleteMany?: EntregaScalarWhereInput | EntregaScalarWhereInput[]
  }

  export type LogInventarioUncheckedUpdateManyWithoutMuestraNestedInput = {
    create?: XOR<LogInventarioCreateWithoutMuestraInput, LogInventarioUncheckedCreateWithoutMuestraInput> | LogInventarioCreateWithoutMuestraInput[] | LogInventarioUncheckedCreateWithoutMuestraInput[]
    connectOrCreate?: LogInventarioCreateOrConnectWithoutMuestraInput | LogInventarioCreateOrConnectWithoutMuestraInput[]
    upsert?: LogInventarioUpsertWithWhereUniqueWithoutMuestraInput | LogInventarioUpsertWithWhereUniqueWithoutMuestraInput[]
    createMany?: LogInventarioCreateManyMuestraInputEnvelope
    set?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
    disconnect?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
    delete?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
    connect?: LogInventarioWhereUniqueInput | LogInventarioWhereUniqueInput[]
    update?: LogInventarioUpdateWithWhereUniqueWithoutMuestraInput | LogInventarioUpdateWithWhereUniqueWithoutMuestraInput[]
    updateMany?: LogInventarioUpdateManyWithWhereWithoutMuestraInput | LogInventarioUpdateManyWithWhereWithoutMuestraInput[]
    deleteMany?: LogInventarioScalarWhereInput | LogInventarioScalarWhereInput[]
  }

  export type EntregaCreateNestedManyWithoutVisitadorInput = {
    create?: XOR<EntregaCreateWithoutVisitadorInput, EntregaUncheckedCreateWithoutVisitadorInput> | EntregaCreateWithoutVisitadorInput[] | EntregaUncheckedCreateWithoutVisitadorInput[]
    connectOrCreate?: EntregaCreateOrConnectWithoutVisitadorInput | EntregaCreateOrConnectWithoutVisitadorInput[]
    createMany?: EntregaCreateManyVisitadorInputEnvelope
    connect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
  }

  export type EntregaUncheckedCreateNestedManyWithoutVisitadorInput = {
    create?: XOR<EntregaCreateWithoutVisitadorInput, EntregaUncheckedCreateWithoutVisitadorInput> | EntregaCreateWithoutVisitadorInput[] | EntregaUncheckedCreateWithoutVisitadorInput[]
    connectOrCreate?: EntregaCreateOrConnectWithoutVisitadorInput | EntregaCreateOrConnectWithoutVisitadorInput[]
    createMany?: EntregaCreateManyVisitadorInputEnvelope
    connect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
  }

  export type EntregaUpdateManyWithoutVisitadorNestedInput = {
    create?: XOR<EntregaCreateWithoutVisitadorInput, EntregaUncheckedCreateWithoutVisitadorInput> | EntregaCreateWithoutVisitadorInput[] | EntregaUncheckedCreateWithoutVisitadorInput[]
    connectOrCreate?: EntregaCreateOrConnectWithoutVisitadorInput | EntregaCreateOrConnectWithoutVisitadorInput[]
    upsert?: EntregaUpsertWithWhereUniqueWithoutVisitadorInput | EntregaUpsertWithWhereUniqueWithoutVisitadorInput[]
    createMany?: EntregaCreateManyVisitadorInputEnvelope
    set?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    disconnect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    delete?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    connect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    update?: EntregaUpdateWithWhereUniqueWithoutVisitadorInput | EntregaUpdateWithWhereUniqueWithoutVisitadorInput[]
    updateMany?: EntregaUpdateManyWithWhereWithoutVisitadorInput | EntregaUpdateManyWithWhereWithoutVisitadorInput[]
    deleteMany?: EntregaScalarWhereInput | EntregaScalarWhereInput[]
  }

  export type EntregaUncheckedUpdateManyWithoutVisitadorNestedInput = {
    create?: XOR<EntregaCreateWithoutVisitadorInput, EntregaUncheckedCreateWithoutVisitadorInput> | EntregaCreateWithoutVisitadorInput[] | EntregaUncheckedCreateWithoutVisitadorInput[]
    connectOrCreate?: EntregaCreateOrConnectWithoutVisitadorInput | EntregaCreateOrConnectWithoutVisitadorInput[]
    upsert?: EntregaUpsertWithWhereUniqueWithoutVisitadorInput | EntregaUpsertWithWhereUniqueWithoutVisitadorInput[]
    createMany?: EntregaCreateManyVisitadorInputEnvelope
    set?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    disconnect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    delete?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    connect?: EntregaWhereUniqueInput | EntregaWhereUniqueInput[]
    update?: EntregaUpdateWithWhereUniqueWithoutVisitadorInput | EntregaUpdateWithWhereUniqueWithoutVisitadorInput[]
    updateMany?: EntregaUpdateManyWithWhereWithoutVisitadorInput | EntregaUpdateManyWithWhereWithoutVisitadorInput[]
    deleteMany?: EntregaScalarWhereInput | EntregaScalarWhereInput[]
  }

  export type MuestraCreateNestedOneWithoutEntregasInput = {
    create?: XOR<MuestraCreateWithoutEntregasInput, MuestraUncheckedCreateWithoutEntregasInput>
    connectOrCreate?: MuestraCreateOrConnectWithoutEntregasInput
    connect?: MuestraWhereUniqueInput
  }

  export type VisitadorCreateNestedOneWithoutEntregasInput = {
    create?: XOR<VisitadorCreateWithoutEntregasInput, VisitadorUncheckedCreateWithoutEntregasInput>
    connectOrCreate?: VisitadorCreateOrConnectWithoutEntregasInput
    connect?: VisitadorWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MuestraUpdateOneRequiredWithoutEntregasNestedInput = {
    create?: XOR<MuestraCreateWithoutEntregasInput, MuestraUncheckedCreateWithoutEntregasInput>
    connectOrCreate?: MuestraCreateOrConnectWithoutEntregasInput
    upsert?: MuestraUpsertWithoutEntregasInput
    connect?: MuestraWhereUniqueInput
    update?: XOR<XOR<MuestraUpdateToOneWithWhereWithoutEntregasInput, MuestraUpdateWithoutEntregasInput>, MuestraUncheckedUpdateWithoutEntregasInput>
  }

  export type VisitadorUpdateOneRequiredWithoutEntregasNestedInput = {
    create?: XOR<VisitadorCreateWithoutEntregasInput, VisitadorUncheckedCreateWithoutEntregasInput>
    connectOrCreate?: VisitadorCreateOrConnectWithoutEntregasInput
    upsert?: VisitadorUpsertWithoutEntregasInput
    connect?: VisitadorWhereUniqueInput
    update?: XOR<XOR<VisitadorUpdateToOneWithWhereWithoutEntregasInput, VisitadorUpdateWithoutEntregasInput>, VisitadorUncheckedUpdateWithoutEntregasInput>
  }

  export type MuestraCreateNestedOneWithoutLogs_inventarioInput = {
    create?: XOR<MuestraCreateWithoutLogs_inventarioInput, MuestraUncheckedCreateWithoutLogs_inventarioInput>
    connectOrCreate?: MuestraCreateOrConnectWithoutLogs_inventarioInput
    connect?: MuestraWhereUniqueInput
  }

  export type MuestraUpdateOneWithoutLogs_inventarioNestedInput = {
    create?: XOR<MuestraCreateWithoutLogs_inventarioInput, MuestraUncheckedCreateWithoutLogs_inventarioInput>
    connectOrCreate?: MuestraCreateOrConnectWithoutLogs_inventarioInput
    upsert?: MuestraUpsertWithoutLogs_inventarioInput
    disconnect?: MuestraWhereInput | boolean
    delete?: MuestraWhereInput | boolean
    connect?: MuestraWhereUniqueInput
    update?: XOR<XOR<MuestraUpdateToOneWithWhereWithoutLogs_inventarioInput, MuestraUpdateWithoutLogs_inventarioInput>, MuestraUncheckedUpdateWithoutLogs_inventarioInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EntregaCreateWithoutMuestraInput = {
    id?: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
    visitador: VisitadorCreateNestedOneWithoutEntregasInput
  }

  export type EntregaUncheckedCreateWithoutMuestraInput = {
    id?: string
    visitador_id: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
  }

  export type EntregaCreateOrConnectWithoutMuestraInput = {
    where: EntregaWhereUniqueInput
    create: XOR<EntregaCreateWithoutMuestraInput, EntregaUncheckedCreateWithoutMuestraInput>
  }

  export type EntregaCreateManyMuestraInputEnvelope = {
    data: EntregaCreateManyMuestraInput | EntregaCreateManyMuestraInput[]
    skipDuplicates?: boolean
  }

  export type LogInventarioCreateWithoutMuestraInput = {
    id?: string
    tipo_movimiento: string
    cantidad: number
    descripcion?: string | null
    usuario_id?: string | null
    created_at?: Date | string
  }

  export type LogInventarioUncheckedCreateWithoutMuestraInput = {
    id?: string
    tipo_movimiento: string
    cantidad: number
    descripcion?: string | null
    usuario_id?: string | null
    created_at?: Date | string
  }

  export type LogInventarioCreateOrConnectWithoutMuestraInput = {
    where: LogInventarioWhereUniqueInput
    create: XOR<LogInventarioCreateWithoutMuestraInput, LogInventarioUncheckedCreateWithoutMuestraInput>
  }

  export type LogInventarioCreateManyMuestraInputEnvelope = {
    data: LogInventarioCreateManyMuestraInput | LogInventarioCreateManyMuestraInput[]
    skipDuplicates?: boolean
  }

  export type EntregaUpsertWithWhereUniqueWithoutMuestraInput = {
    where: EntregaWhereUniqueInput
    update: XOR<EntregaUpdateWithoutMuestraInput, EntregaUncheckedUpdateWithoutMuestraInput>
    create: XOR<EntregaCreateWithoutMuestraInput, EntregaUncheckedCreateWithoutMuestraInput>
  }

  export type EntregaUpdateWithWhereUniqueWithoutMuestraInput = {
    where: EntregaWhereUniqueInput
    data: XOR<EntregaUpdateWithoutMuestraInput, EntregaUncheckedUpdateWithoutMuestraInput>
  }

  export type EntregaUpdateManyWithWhereWithoutMuestraInput = {
    where: EntregaScalarWhereInput
    data: XOR<EntregaUpdateManyMutationInput, EntregaUncheckedUpdateManyWithoutMuestraInput>
  }

  export type EntregaScalarWhereInput = {
    AND?: EntregaScalarWhereInput | EntregaScalarWhereInput[]
    OR?: EntregaScalarWhereInput[]
    NOT?: EntregaScalarWhereInput | EntregaScalarWhereInput[]
    id?: StringFilter<"Entrega"> | string
    muestra_id?: StringFilter<"Entrega"> | string
    visitador_id?: StringFilter<"Entrega"> | string
    nombre_visitador?: StringNullableFilter<"Entrega"> | string | null
    nombre_muestra?: StringNullableFilter<"Entrega"> | string | null
    cantidad?: IntFilter<"Entrega"> | number
    fecha?: DateTimeFilter<"Entrega"> | Date | string
    hora?: DateTimeFilter<"Entrega"> | Date | string
    estado?: StringNullableFilter<"Entrega"> | string | null
    created_at?: DateTimeFilter<"Entrega"> | Date | string
  }

  export type LogInventarioUpsertWithWhereUniqueWithoutMuestraInput = {
    where: LogInventarioWhereUniqueInput
    update: XOR<LogInventarioUpdateWithoutMuestraInput, LogInventarioUncheckedUpdateWithoutMuestraInput>
    create: XOR<LogInventarioCreateWithoutMuestraInput, LogInventarioUncheckedCreateWithoutMuestraInput>
  }

  export type LogInventarioUpdateWithWhereUniqueWithoutMuestraInput = {
    where: LogInventarioWhereUniqueInput
    data: XOR<LogInventarioUpdateWithoutMuestraInput, LogInventarioUncheckedUpdateWithoutMuestraInput>
  }

  export type LogInventarioUpdateManyWithWhereWithoutMuestraInput = {
    where: LogInventarioScalarWhereInput
    data: XOR<LogInventarioUpdateManyMutationInput, LogInventarioUncheckedUpdateManyWithoutMuestraInput>
  }

  export type LogInventarioScalarWhereInput = {
    AND?: LogInventarioScalarWhereInput | LogInventarioScalarWhereInput[]
    OR?: LogInventarioScalarWhereInput[]
    NOT?: LogInventarioScalarWhereInput | LogInventarioScalarWhereInput[]
    id?: StringFilter<"LogInventario"> | string
    muestra_id?: StringNullableFilter<"LogInventario"> | string | null
    tipo_movimiento?: StringFilter<"LogInventario"> | string
    cantidad?: IntFilter<"LogInventario"> | number
    descripcion?: StringNullableFilter<"LogInventario"> | string | null
    usuario_id?: StringNullableFilter<"LogInventario"> | string | null
    created_at?: DateTimeFilter<"LogInventario"> | Date | string
  }

  export type EntregaCreateWithoutVisitadorInput = {
    id?: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
    muestra: MuestraCreateNestedOneWithoutEntregasInput
  }

  export type EntregaUncheckedCreateWithoutVisitadorInput = {
    id?: string
    muestra_id: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
  }

  export type EntregaCreateOrConnectWithoutVisitadorInput = {
    where: EntregaWhereUniqueInput
    create: XOR<EntregaCreateWithoutVisitadorInput, EntregaUncheckedCreateWithoutVisitadorInput>
  }

  export type EntregaCreateManyVisitadorInputEnvelope = {
    data: EntregaCreateManyVisitadorInput | EntregaCreateManyVisitadorInput[]
    skipDuplicates?: boolean
  }

  export type EntregaUpsertWithWhereUniqueWithoutVisitadorInput = {
    where: EntregaWhereUniqueInput
    update: XOR<EntregaUpdateWithoutVisitadorInput, EntregaUncheckedUpdateWithoutVisitadorInput>
    create: XOR<EntregaCreateWithoutVisitadorInput, EntregaUncheckedCreateWithoutVisitadorInput>
  }

  export type EntregaUpdateWithWhereUniqueWithoutVisitadorInput = {
    where: EntregaWhereUniqueInput
    data: XOR<EntregaUpdateWithoutVisitadorInput, EntregaUncheckedUpdateWithoutVisitadorInput>
  }

  export type EntregaUpdateManyWithWhereWithoutVisitadorInput = {
    where: EntregaScalarWhereInput
    data: XOR<EntregaUpdateManyMutationInput, EntregaUncheckedUpdateManyWithoutVisitadorInput>
  }

  export type MuestraCreateWithoutEntregasInput = {
    id?: string
    nombre: string
    existencias: number
    umbral_minimo: number
    created_at?: Date | string
    logs_inventario?: LogInventarioCreateNestedManyWithoutMuestraInput
  }

  export type MuestraUncheckedCreateWithoutEntregasInput = {
    id?: string
    nombre: string
    existencias: number
    umbral_minimo: number
    created_at?: Date | string
    logs_inventario?: LogInventarioUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type MuestraCreateOrConnectWithoutEntregasInput = {
    where: MuestraWhereUniqueInput
    create: XOR<MuestraCreateWithoutEntregasInput, MuestraUncheckedCreateWithoutEntregasInput>
  }

  export type VisitadorCreateWithoutEntregasInput = {
    id?: string
    nombre: string
    zona: string
    muestras_asignadas: number
    created_at?: Date | string
  }

  export type VisitadorUncheckedCreateWithoutEntregasInput = {
    id?: string
    nombre: string
    zona: string
    muestras_asignadas: number
    created_at?: Date | string
  }

  export type VisitadorCreateOrConnectWithoutEntregasInput = {
    where: VisitadorWhereUniqueInput
    create: XOR<VisitadorCreateWithoutEntregasInput, VisitadorUncheckedCreateWithoutEntregasInput>
  }

  export type MuestraUpsertWithoutEntregasInput = {
    update: XOR<MuestraUpdateWithoutEntregasInput, MuestraUncheckedUpdateWithoutEntregasInput>
    create: XOR<MuestraCreateWithoutEntregasInput, MuestraUncheckedCreateWithoutEntregasInput>
    where?: MuestraWhereInput
  }

  export type MuestraUpdateToOneWithWhereWithoutEntregasInput = {
    where?: MuestraWhereInput
    data: XOR<MuestraUpdateWithoutEntregasInput, MuestraUncheckedUpdateWithoutEntregasInput>
  }

  export type MuestraUpdateWithoutEntregasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    existencias?: IntFieldUpdateOperationsInput | number
    umbral_minimo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logs_inventario?: LogInventarioUpdateManyWithoutMuestraNestedInput
  }

  export type MuestraUncheckedUpdateWithoutEntregasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    existencias?: IntFieldUpdateOperationsInput | number
    umbral_minimo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logs_inventario?: LogInventarioUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type VisitadorUpsertWithoutEntregasInput = {
    update: XOR<VisitadorUpdateWithoutEntregasInput, VisitadorUncheckedUpdateWithoutEntregasInput>
    create: XOR<VisitadorCreateWithoutEntregasInput, VisitadorUncheckedCreateWithoutEntregasInput>
    where?: VisitadorWhereInput
  }

  export type VisitadorUpdateToOneWithWhereWithoutEntregasInput = {
    where?: VisitadorWhereInput
    data: XOR<VisitadorUpdateWithoutEntregasInput, VisitadorUncheckedUpdateWithoutEntregasInput>
  }

  export type VisitadorUpdateWithoutEntregasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    muestras_asignadas?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitadorUncheckedUpdateWithoutEntregasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    muestras_asignadas?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MuestraCreateWithoutLogs_inventarioInput = {
    id?: string
    nombre: string
    existencias: number
    umbral_minimo: number
    created_at?: Date | string
    entregas?: EntregaCreateNestedManyWithoutMuestraInput
  }

  export type MuestraUncheckedCreateWithoutLogs_inventarioInput = {
    id?: string
    nombre: string
    existencias: number
    umbral_minimo: number
    created_at?: Date | string
    entregas?: EntregaUncheckedCreateNestedManyWithoutMuestraInput
  }

  export type MuestraCreateOrConnectWithoutLogs_inventarioInput = {
    where: MuestraWhereUniqueInput
    create: XOR<MuestraCreateWithoutLogs_inventarioInput, MuestraUncheckedCreateWithoutLogs_inventarioInput>
  }

  export type MuestraUpsertWithoutLogs_inventarioInput = {
    update: XOR<MuestraUpdateWithoutLogs_inventarioInput, MuestraUncheckedUpdateWithoutLogs_inventarioInput>
    create: XOR<MuestraCreateWithoutLogs_inventarioInput, MuestraUncheckedCreateWithoutLogs_inventarioInput>
    where?: MuestraWhereInput
  }

  export type MuestraUpdateToOneWithWhereWithoutLogs_inventarioInput = {
    where?: MuestraWhereInput
    data: XOR<MuestraUpdateWithoutLogs_inventarioInput, MuestraUncheckedUpdateWithoutLogs_inventarioInput>
  }

  export type MuestraUpdateWithoutLogs_inventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    existencias?: IntFieldUpdateOperationsInput | number
    umbral_minimo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entregas?: EntregaUpdateManyWithoutMuestraNestedInput
  }

  export type MuestraUncheckedUpdateWithoutLogs_inventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    existencias?: IntFieldUpdateOperationsInput | number
    umbral_minimo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    entregas?: EntregaUncheckedUpdateManyWithoutMuestraNestedInput
  }

  export type EntregaCreateManyMuestraInput = {
    id?: string
    visitador_id: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
  }

  export type LogInventarioCreateManyMuestraInput = {
    id?: string
    tipo_movimiento: string
    cantidad: number
    descripcion?: string | null
    usuario_id?: string | null
    created_at?: Date | string
  }

  export type EntregaUpdateWithoutMuestraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visitador?: VisitadorUpdateOneRequiredWithoutEntregasNestedInput
  }

  export type EntregaUncheckedUpdateWithoutMuestraInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitador_id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntregaUncheckedUpdateManyWithoutMuestraInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitador_id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogInventarioUpdateWithoutMuestraInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogInventarioUncheckedUpdateWithoutMuestraInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogInventarioUncheckedUpdateManyWithoutMuestraInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimiento?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntregaCreateManyVisitadorInput = {
    id?: string
    muestra_id: string
    nombre_visitador?: string | null
    nombre_muestra?: string | null
    cantidad: number
    fecha: Date | string
    hora: Date | string
    estado?: string | null
    created_at?: Date | string
  }

  export type EntregaUpdateWithoutVisitadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    muestra?: MuestraUpdateOneRequiredWithoutEntregasNestedInput
  }

  export type EntregaUncheckedUpdateWithoutVisitadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    muestra_id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntregaUncheckedUpdateManyWithoutVisitadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    muestra_id?: StringFieldUpdateOperationsInput | string
    nombre_visitador?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_muestra?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}