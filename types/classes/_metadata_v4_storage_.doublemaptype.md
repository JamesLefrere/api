> # Class: DoubleMapType <**S, T, V, E**>

## Type parameters

▪ **S**: *`TypesDef`*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **DoubleMapType**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v4_storage_.doublemaptype.md#constructor)

### Accessors

* [Type](_metadata_v4_storage_.doublemaptype.md#type)
* [encodedLength](_metadata_v4_storage_.doublemaptype.md#encodedlength)
* [hash](_metadata_v4_storage_.doublemaptype.md#hash)
* [hasher](_metadata_v4_storage_.doublemaptype.md#hasher)
* [isEmpty](_metadata_v4_storage_.doublemaptype.md#isempty)
* [key1](_metadata_v4_storage_.doublemaptype.md#key1)
* [key2](_metadata_v4_storage_.doublemaptype.md#key2)
* [key2Hasher](_metadata_v4_storage_.doublemaptype.md#key2hasher)
* [value](_metadata_v4_storage_.doublemaptype.md#value)

### Methods

* [eq](_metadata_v4_storage_.doublemaptype.md#eq)
* [get](_metadata_v4_storage_.doublemaptype.md#get)
* [getAtIndex](_metadata_v4_storage_.doublemaptype.md#getatindex)
* [toArray](_metadata_v4_storage_.doublemaptype.md#toarray)
* [toHex](_metadata_v4_storage_.doublemaptype.md#tohex)
* [toJSON](_metadata_v4_storage_.doublemaptype.md#tojson)
* [toRawType](_metadata_v4_storage_.doublemaptype.md#torawtype)
* [toString](_metadata_v4_storage_.doublemaptype.md#tostring)
* [toU8a](_metadata_v4_storage_.doublemaptype.md#tou8a)
* [with](_metadata_v4_storage_.doublemaptype.md#static-with)

## Constructors

###  constructor

\+ **new DoubleMapType**(`value?`: any): *[DoubleMapType](_metadata_v4_storage_.doublemaptype.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v4/Storage.ts:64](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/Metadata/v4/Storage.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[DoubleMapType](_metadata_v4_storage_.doublemaptype.md)*

## Accessors

###  Type

• **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L157)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:170](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L170)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L181)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  hasher

• **get hasher**(): *[StorageHasher](_primitive_storagehasher_.storagehasher.md)*

*Defined in [Metadata/v4/Storage.ts:78](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/Metadata/v4/Storage.ts#L78)*

**`description`** The hashing algorithm used to hash keys, as [StorageHasher](_primitive_storagehasher_.storagehasher.md)

**Returns:** *[StorageHasher](_primitive_storagehasher_.storagehasher.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L142)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  key1

• **get key1**(): *[Type](_primitive_type_.type.md)*

*Defined in [Metadata/v4/Storage.ts:85](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/Metadata/v4/Storage.ts#L85)*

**`description`** The mapped key as [Type](_metadata_v4_storage_.doublemaptype.md#type)

**Returns:** *[Type](_primitive_type_.type.md)*

___

###  key2

• **get key2**(): *[Type](_primitive_type_.type.md)*

*Defined in [Metadata/v4/Storage.ts:92](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/Metadata/v4/Storage.ts#L92)*

**`description`** The mapped key as [Type](_metadata_v4_storage_.doublemaptype.md#type)

**Returns:** *[Type](_primitive_type_.type.md)*

___

###  key2Hasher

• **get key2Hasher**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v4/Storage.ts:99](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/Metadata/v4/Storage.ts#L99)*

**`description`** The hashing algorithm used to hash key2, as [Text](_primitive_text_.text.md)

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  value

• **get value**(): *[Type](_primitive_type_.type.md)*

*Defined in [Metadata/v4/Storage.ts:106](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/Metadata/v4/Storage.ts#L106)*

**`description`** The mapped key as [Type](_metadata_v4_storage_.doublemaptype.md#type)

**Returns:** *[Type](_primitive_type_.type.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L188)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L196)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L203)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L210)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L217)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L224)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:240](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L240)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L253)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:261](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L261)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:119](https://github.com/polkadot-js/api/blob/4115b8a/packages/types/src/codec/Struct.ts#L119)*

**Type parameters:**

▪ **S**: *`TypesDef`*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*