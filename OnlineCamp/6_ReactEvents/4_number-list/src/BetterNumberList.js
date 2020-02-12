import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.remove = this.remove.bind(this); //could also bind with arrow func
  }

  remove(num) { //passing event
    console.log("REMOVING!");
    console.log(num);
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    // Key must be unique!
    let nums = this.state.nums.map(n => (
      <BetterNumberItem key={n} value={n} remove={this.remove} />
      /* passing event obj handler instead of binding with arrow func */
    ));
    return (
      <div>
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
