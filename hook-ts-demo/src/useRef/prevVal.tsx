import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(count);

  // 变更 .current 属性不会引发组件重新渲染，根据这个特性可以获取状态的前一个值
  useEffect(() => {
    prevCountRef.current = count;
  })

  return (
    <div>
      <p>pre count: { prevCountRef.current }</p>
      <p>current count: { count }</p>
      <button onClick={() => setCount(count + 1)}>加</button>
    </div>
  )
}

export default Counter;