import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Joke from "../components/Joke";
import Loading from "../components/Loading";

import { updateJokeScore } from "../utils";

// Global Constant
const API_URL = " https://icanhazdadjoke.com/";

export class JokeList extends Component {
  static defaultProps = {
    numOfJokes: 1
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      jokeFetchErrMsg: "",
      isLoaded: true
    };
    this.fetchJoke = this.fetchJoke.bind(this);
    this.onJokeScoreClickHandler = this.onJokeScoreClickHandler.bind(this);
    this.onGetSingleJokeHandler = this.onGetSingleJokeHandler.bind(this);
  }

  async componentDidMount() {
    //load jokes
    this.fetchJoke(this.props.numOfJokes);
  }
  async componentWillUnmount() {
    axios.Cancel();
  }
  async fetchJoke(num) {
    const config = {
      headers: { Accept: "application/json" }
      //   'Content-Type': 'application/json'
      //   data: {}
    };
    let newJokes = [];
    try {
      //set state
      while (newJokes.length < this.props.numOfJokes) {
        let res = await axios.get(API_URL, config);
        let { id, joke } = res.data;
        const score = 0;
        // console.log(res);
        newJokes.push({ id, joke, score });
      }

      this.setState({
        ...this.state,
        jokes: Array.prototype.concat(this.state.jokes, newJokes)
      });
    } catch (err) {
      //set state
      console.log(err);
    }
  }
  onJokeScoreClickHandler(id, operator) {
    let jokes = this.state.jokes;
    const newObjArr = updateJokeScore(jokes, id, operator);
    this.setState({ jokes: newObjArr });
  }
  onGetSingleJokeHandler() {}

  render() {
    let jokeList = <Loading />;
    if (this.state.isLoaded) {
      if (this.state.jokes.length > 0) {
        jokeList = this.state.jokes.map(jokeOBj => {
          return (
            <Joke
              joke={jokeOBj}
              key={uuidv4()}
              clicked={this.onJokeScoreClickHandler}
            />
          );
        });
      }
    }

    return (
      <React.Fragment>
        <div className="joke-list">{jokeList}</div>
        <button className="joke-list-button">New Joke</button>
      </React.Fragment>
    );
  }
}

export default JokeList;

// https://www.reddit.com/r/learnjavascript/comments/f1kagj/cors_when_using_one_api_but_not_another/
// https://stackoverflow.com/questions/45389073/javascript-search-for-an-object-key-in-a-set
// uudi: https://www.npmjs.com/package/uuid
// https://stackoverflow.com/questions/45389073/javascript-search-for-an-object-key-in-a-set
