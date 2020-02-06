import React, { Component } from 'react';
import Die from '../component/Die';

class RollDice extends Component {
  state = {
    dices: {
      1: 'fas fa-dice-one',
      2: 'fas fa-dice-two',
      3: 'fas fa-dice-three',
      4: 'fas fa-dice-four',
      5: 'fas fa-dice-five',
      6: 'fas fa-dice-six'
    },
    diceCount: 2,
    rollingDice: false
  };

  componentDidMount() {}

  onClickDiceHandler = e => {
    this.setState({ rollingDice: true });
    setTimeout(() => {
      this.setState({ rollingDice: false });
    }, 1000);
  };

  randomizeRollNum = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
  };

  render() {
    let diceTags = [];
    let rollingCssClass;
    for (let i = 0; i < this.state.diceCount; i++) {
      let fanDiceNum = this.state.dices[this.randomizeRollNum()];
      diceTags.push(
        <Die
          onClickDiceHandler={this.onClickDiceHandler}
          key={i}
          rollingDice={this.state.rollingDice}
          faNum={fanDiceNum}
        />
      );
    }

    return (
      <div className='dice-container'>
        {diceTags}
        <button
          onClick={this.onClickDiceHandler}
          disabled={this.state.rollingDice}
        >
          {this.state.rollingDice ? 'Rolling.....' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
