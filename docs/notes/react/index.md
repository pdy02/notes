# React
React介绍

[React hook总结](/notes/react/)

## 创建项目

- Vite模板创建

::: code-group

```shell [NPM]
npm create vite@latest
```
```shell [PNPM]
pnpm create vite
```
```shell [YARN]
yarn create vite
```
:::

- 使用React框架（nextjs之类的）

```shell
npm create-next-app@latest
```



## 快速上手
react使用jsx或者tsx来写组件代码。

组件有两种：
1. 类组件
2. 函数组件（推荐）

现在使用的最多的也最推荐的是**函数组件**

```jsx
export default function App(){
	return (
		<div></div>
	)
}
```
上面的代码就是一个react函数组件模板。他是需要导出的。函数的返回值就是 `UI模板`， 也就是`render`渲染的UI
> 它只能返回一个根节点，如果需要返回多个节点元素，可以使用`<></>`来包裹。

在`render`里，如果想写js逻辑，可以使用`{}`大括号包裹。
- 比如给标签绑定属性和事件。（className和onClick之类的）
- 直接渲染数据（对象不可以直接写在{}里， 因为正常对象是不可迭代）

```jsx
import {useState} from 'React'
export default function App(){
	const [cls, setCls] = useState('container')
	return (
		<div className={cls}>
			{
				new Array(10).fill('haha').map(item => <span>{item}</span>)
			}
		</div>
	)
}
```
> `class`在react/js里是关键字，所以jsx/tsx换成了`className`来代替标签的`class`属性



## 资源扩展

- [React英文官网](https://react.dev/learn)

- [React中文文档-官方](https://zh-hans.react.dev/)


### React的浏览器扩展

它可以检查React组件`component`，编辑`props`和`state`。方便开发者调试。

- [chrome插件](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Edge插件](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

