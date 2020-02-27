import React, { Component } from "react";
import uuid from "uuid/v4";
import axios from "axios";
import Card from "../components/Card";

// Global Constant
const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

export class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      test: {
        suit: "DIAMONDS",
        value: "5",
        code: "5D",
        images: {
          svg: "https://deckofcardsapi.com/static/img/5D.svg",
          png: "https://deckofcardsapi.com/static/img/5D.png"
        },
        image: "https://deckofcardsapi.com/static/img/5D.png"
      }
    };
    this.fetchCard = this.fetchCard.bind(this);
    this.fetchGameID = this.fetchGameID.bind(this);
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
  }
  componentDidMount() {
    this.fetchGameID();
  }
  componentWillUnmount() {
    localStorage.clear();
    axios.Cancel()
  }

  fetchCard() {
    const deck_id = localStorage.getItem("deck_id");
    return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
  }
  async fetchGameID() {
    console.log("Running API Call Setup Call");
    try {
      let res = await axios.get(API_URL);
      let { data } = res; //would separate here if it came in different obj
      localStorage.setItem("deck_id", data.deck_id);
    } catch (error) {
      console.log(error);
    }
    // let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
    // // let { data } = res.data;
    // // this.setState({ users: data });
    // console.log(res);
  }

  onButtonClickHandler() {
    this.fetchCard()
      .then(data => {
        const newCard = data.data.cards;
        this.setState(state => {
          const cards = this.state.cards.concat(newCard);
          return {
            cards
          };
        });
      })
      .catch(e => {
        console.log(e);
      });

    // console.log(data.cards)
    // this.setState(state => {
    //   const list = state.list.concat(state.cards);
    //   return {
    //     list,
    //   };
    // });
  }

  render() {
    let cardTags;
    this.state.cards.length > 0
      ? (cardTags = this.state.cards.map(indCard => {
          return <Card cardProps={indCard} key={uuid()} />;
        }))
      : (cardTags = <p>No cards played</p>);

    return (
      <div className="card-container">
        <h1 className="card-container-title">Card Dealer</h1>
        {cardTags}
        <p className="card-container-description"></p>
        <button
          className="card-container-button"
          onClick={this.onButtonClickHandler}
        >
          Fetch a Card
        </button>
      </div>
    );
  }
}

export default CardDeck;

// Working with arrays:https://www.robinwieruch.de/react-state-array-add-update-remove
