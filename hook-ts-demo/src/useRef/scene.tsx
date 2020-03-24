import React, { useState, useEffect, useRef } from 'react'


const Counter = () => {

  const [count, setCount] = useState<number>(0);

  // 显示最新的当前 count
  const countRef = useRef<number>(count);

  useEffect(() => {
    countRef.current = count;
  })

  const handlerCount = () => {
    setTimeout(() => {
      alert('current count: ' + countRef.current);
    }, 2000)
  }

  return (
    <div>
      <p>current count: {count}</p>
      <button onClick={() => setCount(count+1)}>加</button>
      <button onClick={() => handlerCount()}>弹框显示</button>
    </div>
  )
}

export default Counter;