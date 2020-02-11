import React, { Component } from 'react';
import Coin from '../components/Coin';
import { flipCoin } from '../helper'; //abstracted outside of component

export class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'heads',
        imgSrc: `https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg`
      },
      {
        side: 'tails',
        imgSrc: `https://www.usmint.gov/wordpress/wp-content/uploads/2019/11/2020-america-the-beautiful-quarters-coin-tallgrass-prairie-kansas-proof-reverse-150x150.jpg`
      }
    ],
    title: `Let's flip a coin!`,
    heads: `https://www.usmint.gov/wordpress/wp-content/uploads/2019/11/2020-america-the-beautiful-quarters-coin-tallgrass-prairie-kansas-proof-reverse-150x150.jpg`,
    tails:
      'https://www.usmint.gov/wordpress/wp-content/uploads/2019/11/2020-america-the-beautiful-quarters-coin-tallgrass-prairie-kansas-proof-reverse-150x150.jpg'
  };
  constructor(props) {
    super(props);
    this.state = {
      flips: 0,
      nHeads: 0,
      nTails: 0,
      currentSide: null,
      currentCoin: null
    };
    // generates empty array with numBalls length
    // binding click handler since no arrow func is being used
    this.onCoinFlipClickHandler = this.onCoinFlipClickHandler.bind(this);
  }
  flipCoin() {
    const newCoin = flipCoin(this.props.coins);

    this.setState(state => {
      //taking old state
      let newStateObj = {
        ...state,
        flips: state.flips + 1,
        currentCoin: newCoin
      }; //could follow this pattern finish with if statements

      return {
        currentCoin: newCoin,
        nFlips: state.flips + 1,
        nHeads: state.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: state.nTails + (newCoin.side === 'tails' ? 1 : 0)
      };
    });

    /* or could implement logic below:
    let newStateObj = { ...this.state };
    let currentFlip = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
    newStateObj.flips = this.state.flips + 1;
    if (currentFlip === 'heads') {
      newStateObj.nHeads = this.state.nHeads + 1;
      newStateObj.currentSide = this.props.heads;
    } else {
      newStateObj.nTails = this.state.nTails + 1;
      newStateObj.currentSide = this.props.tails;
    }
    console.log(newStateObj);
    this.setState(newStateObj);*/
  }

  onCoinFlipClickHandler() {
    this.flipCoin();
  }

  render() {
    return (
      <div className='coin-flip-container'>
        {this.state.currentCoin && (
          <Coin currentCoin={this.state.currentCoin} />
        )}
        <button onClick={this.onCoinFlipClickHandler}> Flip Coin</button>
        <div className='current-score'>
          <p>
            Out of {this.state.flips} flips, there have been {this.state.nHeads}{' '}
            heads and {this.state.nTails} tails.
          </p>
        </div>
      </div>
    );
  }
}

export default CoinContainer;
