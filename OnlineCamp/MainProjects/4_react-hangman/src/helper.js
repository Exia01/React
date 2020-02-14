import React from 'react';
const gameStatusCheckMessage = (state, props) => {
  const { nWrong, wonGame, lostGame } = state;

  if (nWrong < props.maxWrong && !wonGame && !lostGame) {
    return (
      <p className='Hangman-attempt-message'>
        {nWrong} wrong answers out of {props.maxWrong}
      </p>
    );
  } else if (lostGame) {
    return <p className='Hangman-game-lost-message'>Ran out of tries!</p>;
  } else if (wonGame) {
    return <p className='Hangman-game-won-message'> You Win!!</p>;
  } else {
    //default
    return (
      <p className='Hangman-attempt-message'>
        {nWrong} wrong answers out of {props.maxWrong}
      </p>
    );
  }
};

export { gameStatusCheckMessage };
