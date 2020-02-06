import React from 'react';

const Die = props => {
  let rollingDiceNum 
  if (props.faNum) {
    console.log("test")
    rollingDiceNum = `fas fa-dice${props.faNum}`;
  }else{
    rollingDiceNum = 'fas fa-dice-one';
    console.log("test")
  }
  props.rollingDice ? (rollingDiceNum += ' shaking') : (rollingDiceNum += ' ');

  return (
    <article>
      <i className={rollingDiceNum}></i>
    </article>
  );
};

export default Die;
