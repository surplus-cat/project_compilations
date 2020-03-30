import React, { useContext } from 'react';


const ColorContext =  React.createContext<string>("");
// 根组件注册，所有子组件都可拿到注册的值：
const App = () => {
  return (
    <ColorContext.Provider value={"#1890ff"}>
      <Father />
    </ColorContext.Provider>
  )
}

const Father = () => {
  return (
      <Child />
  )
}

const Child = () => {
  const color = useContext(ColorContext);
  return (
    <>
      <div style={{ backgroundColor: color }}>BackgroundColor is { color }</div>
      
    </>
  )
}

export default App;
