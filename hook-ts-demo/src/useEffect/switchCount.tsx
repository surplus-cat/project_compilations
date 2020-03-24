import React, { useState, useEffect } from 'react'


let switchCount: number = 0;


const User = () => {
  const [name, setName] = useState<string>('');

  // 每当状态改变时，都要重新执行 useEffect 的逻辑：
  useEffect(() => {
    switchCount+= 1
  })

  // 组件卸载时处理一些内存问题，比如清除定时器、清除事件监听：
  useEffect(() => {
    const handler = () => {
      document.title = Math.random().toString();
    }

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    }

  }, [])

  return (
    <div>
      <p>Current Name: { name }</p>
      <p>switchCount: { switchCount } </p>
      <button onClick={() => setName('Jack')}>Jack</button>
      <button onClick={() => setName('Marry')}>Marry</button>
    </div>
  )
}

export default User;

// 即使每次状态都改变，也只执行第一次 useEffect 的逻辑：

/*
useEffect(() => {
  switchCount += 1
}, [])
*/

// 根据某个状态是否变化来决定要不要重新执行：

/*
const [value, setValue] = useState<string>('I never change');

useEffect(() => {
  switchCount += 1
}, [value])

因为 value 我们不会去任何地方改变它的值，所以在末尾加了 [value] 后， useEffect 内的逻辑也只会执行第一次，
相当于在 class 组件中执行了 componentDidMount ，后续的 shouldComponentUpdate 返回全部是 false 。

*/

