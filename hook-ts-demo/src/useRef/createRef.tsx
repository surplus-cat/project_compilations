import React, { useRef } from 'react';

const TextInput = () => {
  // 操作 Dom 节点，类似 createRef()
  const inputEl = useRef<HTMLInputElement>(null);

  const onFocusClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }
  
  return (
    <div>
      <input type="text" ref={inputEl} />
      <button onClick={() => onFocusClick()}>Focus the input</button>
    </div>
  )
}

export default TextInput;