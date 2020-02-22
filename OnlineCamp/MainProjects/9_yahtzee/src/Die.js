import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    this.props.handleClick(this.props.idx); //prevents creating a new function every time it is rendered
  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.onClickHandler}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
