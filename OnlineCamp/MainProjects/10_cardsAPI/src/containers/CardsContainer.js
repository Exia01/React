import React, { Component } from "react";
import axios from "axios";

export class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.fetchCard = this.roll.fetchCard(this);
  }

  fetchCard() {
    console.log("From Cards Container Running API Call");
  }

  componentDidMount() {
    this.fetchCard();
  }
  componentWillUnmount() {}

  render() {
    return (
      <div className="card-container">
        <h1 className="card-container-title">Card Dealer</h1>
        <p className="card-container-description"></p>
        <button className="card-container-button"></button>
      </div>
    );
  }
}

export default CardsContainer;
