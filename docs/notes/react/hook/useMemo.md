# useMemo

它在组件重新渲染时候能缓存计算结果.

> 类似Vue的计算属性`copmuted`



使用方式:

```react
const cachedValue = useMemo(calculateValue, dependencies)
```



**Using**

```react
function App(){
    const [count, setCount] = useState(0)
    const res = useMemo(() => {
    	return count+1
	},[count])
}
```

- `res`就是`useMemo`函数缓存函数的返回值`count + 1`

- `dependencies`也就是依赖项, 表示依赖于什么**状态**, 当这些状态发生**更新**时, `calculateValue`计算值会重新计算.

> **缓存:** 当`dependencies`依赖项没有改变是, 它会直接返回缓存的值, 不会重新计算. 只有当依赖项更改时, 才会触发重新计算.

