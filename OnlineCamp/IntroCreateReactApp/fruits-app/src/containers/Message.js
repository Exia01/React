import React, { Component } from 'react';

export class Message extends Component {
  state = {};
  render() {
    let tag;
    let message = {
      out: 'Sorry we are out of',
      msg1: 'Here you go, dome delicious'
    };
    console.log(this.props)
    let food
    let check 
    if (this.props.food ) {
      tag = <h1>{message.msg1} {food}</h1>;
    }
    else{
        tag = <h1>{message.out} {food}</h1>;
    }
    return <div>{tag}</div>;
  }
}

export default Message;
