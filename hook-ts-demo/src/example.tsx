import React from 'react';

type UserInfo = {
  name: string,
  age: number
}

export const User = ({ name, age }: UserInfo) => {
  return (
    <div className="User">
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

const user = <User name={"Yang"} age={16}/>


/*
使用函数式组件时需要将组件申明为React.FC类型，也就是 Functional Component 的意思，
另外props需要申明各个参数的类型，然后通过泛型传递给React.FC。
export const User:React.FC<UserInfo> = ({ name, age }) => {
  return (
    <div className="User">
      <p>{ name }</p>
      <p>{ age }</p>
    </div> 
  )
}

React.FC 的方式来创建我的有类型约束的函数式组件，它还支持 children 的传入，即使在我们的类型中并没有定义它

export const User:React:FC<UserInfo> = ({ name, age, children }) => {
  return (
    <div className="User">
      <p>{name}</p>
      <p>{age}</p>
      <div>
        { children }
      </div>
    </div>
  )
}

const user = <User name="lucy" age={13}>快乐时代</User>


并不需要把所有参数都显示地解构
export const User:React:FC<UserInfo> = (props) => {
  return (
    <div className="User">
      <p>{props.name}</p>
      <p>{props.age}</p>
      <div>
        { /* 仍可以拿到 children * /}
        { props.children }
      </div>
    </div>
  )
}

*/