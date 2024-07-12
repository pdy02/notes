# useState

管理**状态**的hook

使用方式：

```react
function App(){
    // const [state, setState] = useState(initialState)
    const [count, setCount] = useState(0)
    setCount(count+1)
}
```

- `initialState`传入useState的参数**初始值**
- `state`是状态变量
- `setState`是设置状态的函数

set函数名称可以随意起名，但是默认规范还是以`set`开头, 后接变量名. 小驼峰写法.

> 注意不要直接修改`state`变量, 一切修改必须要通过`set`函数来修改.

## useState初始值

`initialState`可以是一个值, 也可以是一个函数.

```react
const [todos, setTodos] = useState(init);
```

当传入一个函数( 比如是`init`函数 ), 那这个`inti`函数在**初次渲染**时的返回值作为初始值.

### 避免重复创建初始状态

```react
const [todos, setTodos] = useState(init());
```

> 建议不要传入函数调用, 虽然这样函数返回值也可以当做初始值. 尽管 `init()` 的结果**仅用于初始渲染**，但你仍然在**每次渲染时调用此函数**。如果它创建大数组或执行昂贵的计算，这可能会**浪费资源**。

## set函数

set函数一般修改就是直接传参,参数就是作为`state`新的值.

但是react的更新状态渲染视图和一些其他因素. 如果要修改的状态和上一次更新的状态值相关, 或者和其他因素相关联的时候. 可以传给set函数一个函数.它会以该函数的返回值作为新的状态`state`

```react
function App(){
    // const [state, setState] = useState(initialState)
    const [count, setCount] = useState(0)
    // ❌ setCount(count+1)
    // count计数逻辑上是 上一个count+1. 上面的做法忽略了`上一次`的逻辑
    setCount((prevState) => {
        return prevState + 1
    })
}
```

当使用函数时, 会得到一个形参, 第一个就是`prevState`, 这个参数就是上一次的`状态值`



## 当你使用`useState`管理**数组**和**对象**时.

react会认为它们是只读的. 所以我们不应该去视图修改`state`属性.

想要改变`state`, 应该直接覆盖它.

```react
function App(){
    const [form, setForm] = useState({
        name:'dy',
        age:18
    })
    // ❌ form.age = 20; // 不能修改
    
    // ✅ 直接覆盖
    setForm({
        ...form
        age:20
    })
}
```

