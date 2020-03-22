import React from "react";

export default class TwentyEight extends React.Component {
  state = {
    info: [
      { name: "曹操", age: 24, weapon: '倚天剑' },
      { name: "关羽", age: 25, weapon: '大刀' },
      { name: "张飞", age: 25, weapon: '蛇矛' }
    ]
  };
  render() {
    const { info } = this.state;
    return (
      <div>
        {info.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div>{item.name}</div>
              <div>{item.age}</div>
              <p>{item.weapon}</p>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
