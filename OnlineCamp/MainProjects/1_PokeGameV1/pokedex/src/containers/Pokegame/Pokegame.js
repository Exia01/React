import React, { Component } from 'react';
import axios from 'axios';
import {
  generateRandomPokemonCardCount,
  genPokesObjWithImgLinks
} from '../../utils/PokemonUtils';

import Pokedex from '../../components/Pokedex/Pokedex';

import PokeGameClasses from '../../cssModules/Pokegame.module.css';

class Pokegame extends Component {
  _isMounted = false;
  static defaultProps = {
    initialPokemons: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  };
  state = {
    pokesObj1: null,
    pokesObj1: null
  };

  componentDidMount() {
    this._isMounted = true; //  if (this._isMounted) { set state
    if (this._isMounted) {
      let newPokemonsObj = genPokesObjWithImgLinks(this.props.initialPokemons);

      let pokesObj1 = generateRandomPokemonCardCount(4, newPokemonsObj);
      let pokesObj2 = generateRandomPokemonCardCount(4, newPokemonsObj);
      this.setState({ pokesObj1, pokesObj2 });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let hand1;
    let hand2;
    let gameProp1;
    let gameProp2;

    if (this.state.pokesObj1 && this.state.pokesObj2) {
      this.state.pokesObj1.totalCardBaseExp >
      this.state.pokesObj2.totalCardBaseExp
        ? (gameProp1 = true)
        : (gameProp2 = true);

      hand1 = <Pokedex pokeListObj={this.state.pokesObj1} winner={gameProp1} />;
      hand2 = <Pokedex pokeListObj={this.state.pokesObj2} winner={gameProp2} />;
    }

    return (
      <div className={PokeGameClasses.PokegameContainer}>
        {/*could pass props indidually*/}
        {hand1} {hand2}
      </div>
    );
  }
}

export default Pokegame;

// Mutation resource: https://doesitmutate.xyz/

// cancelling Axios call:https://github.com/axios/axios#cancellation

// Static Definition for React:https://medium.com/front-end-weekly/understanding-static-in-javascript-10782149993

//Difference between props and state:https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react
