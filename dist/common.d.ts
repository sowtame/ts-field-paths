export declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export declare type ArrayKey = number;
export declare type IsTuple<T extends Array<any>> = number extends T['length'] ? false : true;
export declare type TupleKeys<T extends Array<any>> = Exclude<keyof T, keyof any[]>;
export declare type FieldValues = Record<string, any>;
declare type ArrPathImpl<K extends string | number, V> = V extends Array<any> ? NestPathImpl<K, V> : `${K}` | `${K}.${Path<V>}`;
declare type CommonPathImpl<K extends string | number, V> = V extends Primitive ? `${K}` : ArrPathImpl<K, V>;
declare type NestPathImpl<K extends string | number, V extends Array<any>> = IsTuple<V> extends true ? `${K}` | `${K}[${Path<V>}]` : `${K}` | `${K}${Path<V>}`;
declare type CommonArrPathImpl<K extends number, V> = V extends Primitive ? `[${K}]` : V extends Array<any> ? `[${K}]` | `[${K}]${Path<V>}` : `[${K}]` | `[${K}].${Path<V>}`;
export declare type Path<T> = T extends Array<infer V> ? IsTuple<T> extends true ? {
    [K in TupleKeys<T>]-?: ArrPathImpl<K & string, T[K]>;
}[TupleKeys<T>] : CommonArrPathImpl<ArrayKey, V> : {
    [K in keyof T]-?: CommonPathImpl<K & string, T[K]>;
}[keyof T];
export declare type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;
export {};
