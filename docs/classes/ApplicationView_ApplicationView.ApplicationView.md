[@nbsolutions/application - v0.0.0-alpha.1](../README.md) / [Exports](../modules.md) / [ApplicationView/ApplicationView](../modules/ApplicationView_ApplicationView.md) / ApplicationView

# Class: ApplicationView<TApplicationConfig, TApplicationProps\>

[ApplicationView/ApplicationView](../modules/ApplicationView_ApplicationView.md).ApplicationView

## Type parameters

| Name | Type |
| :------ | :------ |
| `TApplicationConfig` | extends `IApplicationConfig``IApplicationConfig` |
| `TApplicationProps` | extends [`IApplicationProps`](../interfaces/ApplicationView_ApplicationView.IApplicationProps.md)<`TApplicationConfig`\>[`IApplicationProps`](../interfaces/ApplicationView_ApplicationView.IApplicationProps.md)<`TApplicationConfig`\> |

## Hierarchy

- `ViewComponent`<`TApplicationProps`, [`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)\>

  ↳ **`ApplicationView`**

## Table of contents

### Constructors

- [constructor](ApplicationView_ApplicationView.ApplicationView.md#constructor)

### Properties

- [context](ApplicationView_ApplicationView.ApplicationView.md#context)
- [props](ApplicationView_ApplicationView.ApplicationView.md#props)
- [refs](ApplicationView_ApplicationView.ApplicationView.md#refs)
- [state](ApplicationView_ApplicationView.ApplicationView.md#state)
- [contextType](ApplicationView_ApplicationView.ApplicationView.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](ApplicationView_ApplicationView.ApplicationView.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](ApplicationView_ApplicationView.ApplicationView.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](ApplicationView_ApplicationView.ApplicationView.md#unsafe_componentwillupdate)
- [\_getInitialState](ApplicationView_ApplicationView.ApplicationView.md#_getinitialstate)
- [componentDidCatch](ApplicationView_ApplicationView.ApplicationView.md#componentdidcatch)
- [componentDidMount](ApplicationView_ApplicationView.ApplicationView.md#componentdidmount)
- [componentDidUpdate](ApplicationView_ApplicationView.ApplicationView.md#componentdidupdate)
- [componentWillMount](ApplicationView_ApplicationView.ApplicationView.md#componentwillmount)
- [componentWillReceiveProps](ApplicationView_ApplicationView.ApplicationView.md#componentwillreceiveprops)
- [componentWillUnmount](ApplicationView_ApplicationView.ApplicationView.md#componentwillunmount)
- [componentWillUpdate](ApplicationView_ApplicationView.ApplicationView.md#componentwillupdate)
- [forceUpdate](ApplicationView_ApplicationView.ApplicationView.md#forceupdate)
- [getClassName](ApplicationView_ApplicationView.ApplicationView.md#getclassname)
- [getConfig](ApplicationView_ApplicationView.ApplicationView.md#getconfig)
- [getName](ApplicationView_ApplicationView.ApplicationView.md#getname)
- [getSnapshotBeforeUpdate](ApplicationView_ApplicationView.ApplicationView.md#getsnapshotbeforeupdate)
- [getVersion](ApplicationView_ApplicationView.ApplicationView.md#getversion)
- [render](ApplicationView_ApplicationView.ApplicationView.md#render)
- [setState](ApplicationView_ApplicationView.ApplicationView.md#setstate)
- [shouldComponentUpdate](ApplicationView_ApplicationView.ApplicationView.md#shouldcomponentupdate)

## Constructors

### constructor

• **new ApplicationView**<`TApplicationConfig`, `TApplicationProps`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TApplicationConfig` | extends `IApplicationConfig``IApplicationConfig` |
| `TApplicationProps` | extends [`IApplicationProps`](../interfaces/ApplicationView_ApplicationView.IApplicationProps.md)<`TApplicationConfig`, `TApplicationProps`\>[`IApplicationProps`](../interfaces/ApplicationView_ApplicationView.IApplicationProps.md)<`TApplicationConfig`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `TApplicationProps` |

#### Overrides

ViewComponent&lt;TApplicationProps, IApplicationState\&gt;.constructor

#### Defined in

[src/ApplicationView/ApplicationView.tsx:23](https://github.com/nbsolutions-ca/application/blob/01ea396/src/ApplicationView/ApplicationView.tsx#L23)

## Properties

### context

• **context**: `any`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

#### Inherited from

ViewComponent.context

#### Defined in

node_modules/@types/react/index.d.ts:473

___

### props

• `Readonly` **props**: `Readonly`<`TApplicationProps`\> & `Readonly`<`Object`\>

#### Inherited from

ViewComponent.props

#### Defined in

node_modules/@types/react/index.d.ts:498

___

### refs

• **refs**: `Object`

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

ViewComponent.refs

#### Defined in

node_modules/@types/react/index.d.ts:504

___

### state

• **state**: `Readonly`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)\>

#### Inherited from

ViewComponent.state

#### Defined in

node_modules/@types/react/index.d.ts:499

___

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

#### Inherited from

ViewComponent.contextType

#### Defined in

node_modules/@types/react/index.d.ts:455

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

ViewComponent.UNSAFE\_componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:711

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TApplicationProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

ViewComponent.UNSAFE\_componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:743

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TApplicationProps`\> |
| `nextState` | `Readonly`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

ViewComponent.UNSAFE\_componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:771

___

### \_getInitialState

▸ `Protected` **_getInitialState**(`props`): [`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md) |

#### Returns

[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)

#### Overrides

ViewComponent.\_getInitialState

#### Defined in

[src/ApplicationView/ApplicationView.tsx:27](https://github.com/nbsolutions-ca/application/blob/01ea396/src/ApplicationView/ApplicationView.tsx#L27)

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

ViewComponent.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:640

___

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

ViewComponent.componentDidMount

#### Defined in

[src/ApplicationView/ApplicationView.tsx:31](https://github.com/nbsolutions-ca/application/blob/01ea396/src/ApplicationView/ApplicationView.tsx#L31)

___

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`TApplicationProps`\> |
| `prevState` | `Readonly`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)\> |
| `snapshot?` | `any` |

#### Returns

`void`

#### Inherited from

ViewComponent.componentDidUpdate

#### Defined in

node_modules/@types/react/index.d.ts:682

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

ViewComponent.componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:697

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TApplicationProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

ViewComponent.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:726

___

### componentWillUnmount

▸ **componentWillUnmount**(): `void`

#### Returns

`void`

#### Overrides

ViewComponent.componentWillUnmount

#### Defined in

[src/ApplicationView/ApplicationView.tsx:36](https://github.com/nbsolutions-ca/application/blob/01ea396/src/ApplicationView/ApplicationView.tsx#L36)

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TApplicationProps`\> |
| `nextState` | `Readonly`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

ViewComponent.componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:756

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

ViewComponent.forceUpdate

#### Defined in

node_modules/@types/react/index.d.ts:490

___

### getClassName

▸ **getClassName**(): `string`

#### Returns

`string`

#### Inherited from

ViewComponent.getClassName

#### Defined in

node_modules/@nbsolutions/view-component/types/ViewComponent.d.ts:9

___

### getConfig

▸ **getConfig**(): `TApplicationConfig`

#### Returns

`TApplicationConfig`

#### Defined in

[src/ApplicationView/ApplicationView.tsx:45](https://github.com/nbsolutions-ca/application/blob/01ea396/src/ApplicationView/ApplicationView.tsx#L45)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[src/ApplicationView/ApplicationView.tsx:41](https://github.com/nbsolutions-ca/application/blob/01ea396/src/ApplicationView/ApplicationView.tsx#L41)

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`TApplicationProps`\> |
| `prevState` | `Readonly`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)\> |

#### Returns

`any`

#### Inherited from

ViewComponent.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:676

___

### getVersion

▸ **getVersion**(): `IVersion`

#### Returns

`IVersion`

#### Defined in

[src/ApplicationView/ApplicationView.tsx:49](https://github.com/nbsolutions-ca/application/blob/01ea396/src/ApplicationView/ApplicationView.tsx#L49)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

ViewComponent.render

#### Defined in

[src/ApplicationView/ApplicationView.tsx:53](https://github.com/nbsolutions-ca/application/blob/01ea396/src/ApplicationView/ApplicationView.tsx#L53)

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md) \| (`prevState`: `Readonly`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)\>, `props`: `Readonly`<`TApplicationProps`\>) => [`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md) \| `Pick`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md), `K`\> \| `Pick`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md), `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

ViewComponent.setState

#### Defined in

node_modules/@types/react/index.d.ts:485

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`TApplicationProps`\> |
| `nextState` | `Readonly`<[`IApplicationState`](../interfaces/ApplicationView_ApplicationView.IApplicationState.md)\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

ViewComponent.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:630
