import React, { Component } from 'react';

class ExperimentalSquare extends Component {
  static defaultProps = {
    messages: [
      'A fool thinks himself to be wise, but a wise man knows himself to be a fool.',
      'Educating the mind without educating the heart is no education at all.',
      'Not everything that is faced can be changed, but nothing can be changed until it is faced.'
    ]
  };

  //there are a couple ways of binding: inline, constructor, arrowFunc inline(still creates another prop and not as explicit),
  dispenseWisdom = () => { // this is a public class syntax 
    console.log('THIS IS...', this);
    let { messages } = this.props; //extracting from obj
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  };

  render() {
    return (
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        {/*inline is not a good idea creates a new prop in this*/}
        <span role='img' aria-label='emoji'>
          😃
        </span>
      </div>
    );
  }
}

export default ExperimentalSquare;
