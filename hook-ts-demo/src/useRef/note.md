## 为啥使用useRef?
## 它不仅仅是用来管理 DOM ref 的，它还相当于 this , 可以存放任何变量，很好的解决闭包带来的不方便性。


## 当我们更新状态的时候, React 会重新渲染组件, 每一次渲染都会拿到独立的 count 状态,  并重新渲染一个 handleCount 函数.  每一个 handleCount 里面都有它自己的 count 。