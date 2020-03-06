import React, { Component } from 'react';

export class VendingMachine extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      chipBags: 0
    };
  }
  render() {
    return <div className="vending-machine">
        <div className="vending-machine-message">
            <h1>Hello! I am a vending Machine. What would you like to eat?</h1>
        </div>
    </div>;
  }
}

export default VendingMachine;
