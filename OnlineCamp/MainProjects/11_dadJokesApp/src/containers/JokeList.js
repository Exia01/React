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
    initialJokesCount: 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      jokeFetchErrMsg: "",
      isLoaded: true
    };
    this.fetchTenOriginalJokes = this.fetchTenOriginalJokes.bind(this);
    this.onAddJokeScoreClickHandler = this.onAddJokeScoreClickHandler.bind(
      this
    );
    this.onRemoveJokeScoreClickHandler = this.onRemoveJokeScoreClickHandler.bind(
      this
    );
  }

  async componentDidMount() {
    //load jokes
    this.fetchTenOriginalJokes();
  }
  async componentWillUnmount() {
    axios.Cancel();
  }
  async fetchTenOriginalJokes() {
    const config = {
      headers: { Accept: "application/json" }
      //   'Content-Type': 'application/json'
      //   data: {}
    };
    let newJokes = [];
    try {
      //set state
      for (let index = 0; index < this.props.initialJokesCount; index++) {
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
  onAddJokeScoreClickHandler(id, operator) {
    let jokes = this.state.jokes;
    const newObjArr = updateJokeScore(jokes, id, operator);
    this.setState({jokes:newObjArr})
  }
  onRemoveJokeScoreClickHandler(id, operator) {
    let jokes = this.state.jokes;
    const newObjArr = updateJokeScore(jokes, id, operator);
    console.log(newObjArr)
  }

  render() {
    let jokeList = <Loading />;
    if (this.state.isLoaded) {
      if (this.state.jokes.length > 0) {
        jokeList = this.state.jokes.map(jokeOBj => {
          return (
            <Joke
              joke={jokeOBj}
              key={uuidv4()}
              clicked={this.onAddJokeScoreClickHandler}
            />
          );
        });
      }
    }

    return (
      <div className="joke-list">
        {jokeList}
      </div>
    );
  }
}

export default JokeList;

// https://www.reddit.com/r/learnjavascript/comments/f1kagj/cors_when_using_one_api_but_not_another/
// https://stackoverflow.com/questions/45389073/javascript-search-for-an-object-key-in-a-set
// uudi: https://www.npmjs.com/package/uuid
// https://stackoverflow.com/questions/45389073/javascript-search-for-an-object-key-in-a-set
