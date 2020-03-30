

###### 传入 useMemo 的函数会在渲染期间执行。 在此不得不提 React.memo ，它的作用是实现整个组件的 Pure 功能：**

`const Show:React.FC<Data> = React.memo(({ time, children }) => {...}`

所以简单用一句话来概括 useMemo 和 React.memo 的区别就是：前者在某些情况下不希望组件对所有 props 做浅比较，只想实现局部 Pure 功能，即只想对特定的 props 做比较，并决定是否局部更新。


_为啥使用useCallback?_
useMemo 和 useCallback 接收的参数都是一样，都是在其依赖项发生变化后才执行，都是返回缓存的值，区别在于 useMemo 返回的是函数运行的结果， useCallback 返回的是函数。

`useCallback(fn, deps) 相当于 useMemo(() => fn, deps)`
