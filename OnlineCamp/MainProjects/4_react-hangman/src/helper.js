import React from 'react';
const gameStatusCheckMessage = (state, props) => {
    const { nWrong, wonGame } = state;
    console.log(nWrong >= props.maxWrong && !state.wonGame)

  switch (nWrong, wonGame, props) {
    case nWrong < props.maxWrong && !wonGame: 
      return (
        <p className='Hangman-attempt-message'>
          {nWrong} wrong answers out of {props.maxWrong}
        </p>
      );

    case nWrong >= props.maxWrong && !wonGame: 
      return <p className='Hangman-game-lost-message'>Ran out of tries!</p>;

    case state.wonGame: //won the game
      return <p className='Hangman-game-won-message'> You Win!!</p>;

    default:
      return (
        <p className='Hangman-attempt-message'>
          {nWrong} wrong answers out of {props.maxWrong}
        </p>
      );
  }
};

export { gameStatusCheckMessage };
