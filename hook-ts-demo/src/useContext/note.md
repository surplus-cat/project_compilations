###### 为啥使用useContext?

简单来说 Context 的作用就是对它所包含的组件树提供全局共享数据的一种技术。

###### 怎么使用useContext？

`export const ColorContext = React.createContext({ color: '#1890ff' })
const { color } = useContext(ColorContext)
// 或
export const ColorContext = React.createContext(null)
<ColorContext.Provider value='#1890ff'>
  <App />
</ColorContext.Provider>
// App 或以下的所有子组件都可拿到 value
const color = useContext(ColorContext) // '#1890ff'`

