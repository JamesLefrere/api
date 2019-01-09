

# Hierarchy

↳  [Tuple](_codec_tuple_.tuple.md)

**↳ EgressQueueRoot**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;[Codec](../interfaces/_types_.codec.md)
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EgressQueueRoot**(Types: *`TupleConstructors`*, value: *`any`*): [EgressQueueRoot](_attestedcandidate_.egressqueueroot.md)

*Inherited from [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [codec/Tuple.ts:22](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TupleConstructors` |
| value | `any` |

**Returns:** [EgressQueueRoot](_attestedcandidate_.egressqueueroot.md)

___

# Accessors

<a id="types"></a>

##  Types

getTypes(): `Array`<`string`>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [codec/Tuple.ts:68](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L68)*

*__description__*: The types definition of the tuple

**Returns:** `Array`<`string`>

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Defined in [codec/Tuple.ts:59](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L59)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="filter"></a>

##  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[filter](_codec_tuple_.tuple.md#filter)*

*Overrides Array.filter*

*Defined in [codec/Tuple.ts:126](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L126)*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="map"></a>

##  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[map](_codec_tuple_.tuple.md#map)*

*Overrides Array.map*

*Defined in [codec/Tuple.ts:135](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L135)*

*__description__*: Maps the array with the callback

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The mapping function |
| `Optional` thisArg | `any` |  The \`this\` onject to apply the result to |

**Returns:** `Array`<`U`>

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toArray](_codec_tuple_.tuple.md#toarray)*

*Defined in [codec/Tuple.ts:77](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L77)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toHex](_codec_tuple_.tuple.md#tohex)*

*Defined in [codec/Tuple.ts:84](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L84)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toJSON](_codec_tuple_.tuple.md#tojson)*

*Defined in [codec/Tuple.ts:91](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L91)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/Tuple.ts:100](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L100)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Defined in [codec/Tuple.ts:109](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L109)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Types: *`TupleConstructors`*): [Constructor](../modules/_types_.md#constructor)<[Tuple](_codec_tuple_.tuple.md)>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#with)*

*Defined in [codec/Tuple.ts:48](https://github.com/polkadot-js/api/blob/f655634/packages/types/src/codec/Tuple.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TupleConstructors` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Tuple](_codec_tuple_.tuple.md)>

___
