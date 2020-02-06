import React from 'react';

const Die = props => {
  console.log(props)
  let rollingDiceNum = 'fas fa-dice-one';
  let diceNumb;
  if (props.faNum) {
    rollingDiceNum = `fas fa-dice${props}`;
  }
  props.rollingDice ? (rollingDiceNum += ' shaking') : (diceNumb += ' ');

  return (
    <article>
      <i className={rollingDiceNum}></i>
    </article>
  );
};

export default Die;
