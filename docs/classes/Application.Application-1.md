[@nbsolutions/application - v0.0.0-alpha.1](../README.md) / [Exports](../modules.md) / [Application](../modules/Application.md) / Application

# Class: Application<TApplicationConfig\>

[Application](../modules/Application.md).Application

## Type parameters

| Name | Type |
| :------ | :------ |
| `TApplicationConfig` | extends `IApplicationConfig``IApplicationConfig` |

## Hierarchy

- `NBSObject`

  ↳ **`Application`**

## Implements

- `IApplication`<`TApplicationConfig`\>

## Table of contents

### Constructors

- [constructor](Application.Application-1.md#constructor)

### Methods

- [\_excludeNBSObjectAutoBindingsFor](Application.Application-1.md#_excludenbsobjectautobindingsfor)
- [\_skipNBSObjectAutoBind](Application.Application-1.md#_skipnbsobjectautobind)
- [getClassName](Application.Application-1.md#getclassname)
- [getConfig](Application.Application-1.md#getconfig)
- [getName](Application.Application-1.md#getname)
- [getVersion](Application.Application-1.md#getversion)
- [getClassName](Application.Application-1.md#getclassname)
- [isVoid](Application.Application-1.md#isvoid)

## Constructors

### constructor

• **new Application**<`TApplicationConfig`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TApplicationConfig` | extends `IApplicationConfig``IApplicationConfig` |

#### Inherited from

NBSObject.constructor

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:25

## Methods

### \_excludeNBSObjectAutoBindingsFor

▸ `Protected` **_excludeNBSObjectAutoBindingsFor**(): `string`[]

#### Returns

`string`[]

#### Inherited from

NBSObject.\_excludeNBSObjectAutoBindingsFor

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:36

___

### \_skipNBSObjectAutoBind

▸ `Protected` **_skipNBSObjectAutoBind**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NBSObject.\_skipNBSObjectAutoBind

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:34

___

### getClassName

▸ **getClassName**(): `string`

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:26

___

### getConfig

▸ **getConfig**(): `TApplicationConfig`

#### Returns

`TApplicationConfig`

#### Implementation of

IApplication.getConfig

#### Defined in

[src/Application.ts:18](https://github.com/nbsolutions-ca/application/blob/01ea396/src/Application.ts#L18)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

IApplication.getName

#### Defined in

[src/Application.ts:14](https://github.com/nbsolutions-ca/application/blob/01ea396/src/Application.ts#L14)

___

### getVersion

▸ **getVersion**(): `IVersion`

#### Returns

`IVersion`

#### Implementation of

IApplication.getVersion

#### Defined in

[src/Application.ts:22](https://github.com/nbsolutions-ca/application/blob/01ea396/src/Application.ts#L22)

___

### getClassName

▸ `Static` **getClassName**(`o`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:37

___

### isVoid

▸ `Static` **isVoid**<`T`\>(`o`): `boolean`

Returns true if the given value is `null` or `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Any value |

#### Returns

`boolean`

#### Inherited from

NBSObject.isVoid

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:33
