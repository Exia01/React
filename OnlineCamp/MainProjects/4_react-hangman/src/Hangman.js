import React, { Component } from 'react';
// import Button from './Button';
import uuid from 'uuid';
import { gameStatusCheckMessage } from './helper';
import './Hangman.css';
import img0 from './0.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    letters: 'abcdefghijklmnopqrstuvwxyz'
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: 'apple',
      wonGame: null,
      lostGame: null,
      currentGuessedWord: ''
    };
    this.handleGuess = this.handleGuess.bind(this);
  }

  componentDidMount() {}

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {}

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    let clonedSet = new Set(this.state.guessed).add(ltr)
    let currentGuessedWord = this.state.answer
      .split('') // Looping through answer and checking for guessed leters
      .map(ltr => {
        return clonedSet.has(ltr) ? ltr : '_';
      }).join("");
    let NumberWrong =
      this.state.nWrong + (this.state.answer.includes(ltr) ? 0 : 1);

    console.log(currentGuessedWord);
    console.log(this.state.currentGuessWord === this.state.answer);


    if (currentGuessedWord === this.state.answer) {
      this.setState({ wonGame: true, currentGuessedWord});
    } else {
      if (this.state.nWrong <= this.props.maxWrong) {
        this.setState(st => ({
          guessed: st.guessed.add(ltr),
          nWrong: NumberWrong, //adding 1 or 0 depending on answer
          wonGame: false,
          lostGame: NumberWrong >= this.props.maxWrong, //exec logic here
          currentGuessedWord
        }));
      }
    }
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return this.props.letters.split('').map(ltr => {
      return (
        <button
          value={ltr}
          onClick={this.handleGuess}
          disabled={
            this.state.guessed.has(ltr) ||
            this.state.wonGame ||
            this.state.lostGame
          }
          key={uuid.v4()}
        >
          {ltr}
        </button>
      );
    });
  }

  /** render: render game */
  render() {
    let messageTag;
    if (this.state.nWrong > 0) {
      messageTag = gameStatusCheckMessage(this.state, this.props);
    }
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img
          src={this.props.images[this.state.nWrong]}
          alt={`${this.state.nWrong} wrong answers out of ${this.props.maxWrong}`}
        />
        {messageTag}
        <p className='Hangman-word'>{this.state.currentGuessedWord}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>
      </div>
    );
  }
}

export default Hangman;

// Set definition js:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
