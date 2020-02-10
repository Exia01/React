import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  // // default vals for component / using instead of state props can come from parent in app
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    // generates empty array with numBalls length
    // binding click handler since no arrow func is being used
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    //setting state, with callback
    this.setState(curState => ({
      nums: curState.nums.map(
        // returning obj with new random number
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }
  handleClick() {
    //func specific, calls other func
    this.generate();
  }
  render() {
    console.log(this.props);
    return (
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {/* could move the mapping to a variable and render block */}
          {this.state.nums.map(n => (
            <Ball num={n} key={Math.random() * 1000} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;

// We could re-write this:

// this.setState(curState => ({
//       nums: curState.nums.map(
//         n => Math.floor(Math.random() * this.props.maxNum) + 1
//       )
//     }));
// to instead look like this:

// this.setState(curState => {
//       return {
//         nums: curState.nums.map(
//           n => Math.floor(Math.random() * this.props.maxNum) + 1
//         )
//       };
//     });
