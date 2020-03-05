import React, { Component } from 'react';
import axios from 'axios';

import { v4 as uuid } from 'uuid';
import Joke from '../components/Joke';
import './JokeList.css';

// Global Variable
const API_URL = 'https://icanhazdadjoke.com/';
const API_CONFIG = { headers: { Accept: 'application/json' } };

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      //set empty array if empty json.parse, parses through the string of array and sets array.
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      loading: false
    };

    // Local variable tied to the "this" instance [ "Joke Here", "Joke There", "Joke Over there" ]
    this.seenJokes = new Set(this.state.jokes.map(j => j.text)); //existing jokes, text only
    console.log(this.seenJokes);
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    //if no jokes then fetch
    if (this.state.jokes.length === 0) this.getJokes();
  }
  async getJokes() {
    try {
      let jokes = [];
      //while the array of state is empty
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get(API_URL, API_CONFIG);
        let newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)) { //if it doesn't have that joke then add it
          let jokeObj = { id: uuid(), text: newJoke, votes: 0 };
          jokes.push(jokeObj);
        } else {
          console.log('FOUND A DUPLICATE!');
          console.log(newJoke);
        }
      }
      this.setState(
        st => ({
          loading: false,
          //jokes is one layer deep, no nested objs so we can spread
          jokes: [...st.jokes, ...jokes] //spreading current
        }),
        () =>//wait till state is updated
          // Can only store strings in localStorage, key is jokes for string of arrays of jokes
          window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes)) //turns json into strings
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }
  handleVote(id, delta) {
    // Using callback for setState
    this.setState(
      st => ({
        jokes: st.jokes.map((
          j //creating a new array with map
        ) =>
          // if the joke matches the if it is, spreading and updating
          j.id === id ? { ...j, votes: j.votes + delta } : j //return untouched joke
        )
      }), //explicit, run after the jokes arr is updated
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );

    // Another way of doing this:
    /*
    const otherJokes = words.filter(j => j.id !== id);
    const UpdatedJoke = this.state.jokes.find(j => {
      return j.id == id ;
    });
    // this.setState({ logic}, set Storage here);
   */
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes); //callback get jokes after updating state
  }
  render() {
    if (this.state.loading) {
      return (
        <div className='JokeList-spinner'>
          <i className='far fa-8x fa-laugh fa-spin' />
          <h1 className='JokeList-title'>Loading...</h1>
        </div>
      );
    }
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    //we will then map afterwards
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Dad</span> Jokes
          </h1>
          <img
            src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
            alt='MainEmojiIcon'
          />
          <button className='JokeList-getmore' onClick={this.handleClick}>
            Fetch Jokes
          </button>
        </div>

        <div className='JokeList-jokes'>
          {jokes.map(j => (
            <Joke
              key={j.id}
              votes={j.votes}
              text={j.text}
              id={j.id}
              upVote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default JokeList;
// https://www.reddit.com/r/learnjavascript/comments/f1kagj/cors_when_using_one_api_but_not_another/
// https://stackoverflow.com/questions/45389073/javascript-search-for-an-object-key-in-a-set
// uudi: https://www.npmjs.com/package/uuid
// https://stackoverflow.com/questions/45389073/javascript-search-for-an-object-key-in-a-set
// Json Parser : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
//Using Callback with SetState: https://upmostly.com/tutorials/how-to-use-the-setstate-callback-in-react#:~:text=setState%20Callback%20in%20a%20Functional,is%20an%20array%20of%20dependencies.
