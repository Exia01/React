import React, { Component } from 'react';

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, color: 'purple' };
    this.makeTimer();//Rule of thumb to do this when mounted
  }
  makeTimer() {
    //updating every second
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum); //passed in numb
      this.setState({ num: rand });
    }, 1000);
  }
  render() {
    return <h1>{this.state.num}</h1>;
  }
}

export default Rando;
