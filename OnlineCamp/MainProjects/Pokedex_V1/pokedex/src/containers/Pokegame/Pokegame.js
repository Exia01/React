import React, { Component } from 'react';
import axios from 'axios';

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
    newPokeList1: null,
    newPokeList2: null
  };

  generateRandomPokemonCardCount = (count, pokemonList) => {
    let newPokemonArr = [];
    while (count > 0) {
      //explicit just in case or could use a for loop
      const startIndex = Math.floor(Math.random() * pokemonList.length);
      const endIndex = startIndex + 1;
      newPokemonArr.push(...pokemonList.slice(startIndex, endIndex));
      count--;
    }
    return newPokemonArr;
  };

  componentDidMount() {
    this._isMounted = true; //  if (this._isMounted) { set state

    if (this._isMounted) {
      let newPokemonsObj = this.props.initialPokemons.map(pokemon=>{
        let tempPokeObj = {...pokemon}
        let id = pokemon.id
        if(pokemon.id<10){
          id = `00${pokemon.id}`
        }
        if(pokemon.id<100 && pokemon.id > 9){
          id = `0${pokemon.id}`
        }
        tempPokeObj.image=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
        return tempPokeObj
      })
      let newPokeList1;
      let newPokeList2;
      newPokeList1 = this.generateRandomPokemonCardCount(
        4,
        newPokemonsObj
      );
      newPokeList2 = this.generateRandomPokemonCardCount(
        4,
        this.props.initialPokemons
      );
      this.setState({ newPokeList1, newPokeList2 });

    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let pokedexTag1;
    let pokedexTag2;

    if (this.state.newPokeList1 && this.state.newPokeList2) {
      pokedexTag1 = <Pokedex pokeListObj={this.state.newPokeList1} />;
      pokedexTag2 = <Pokedex pokeListObj={this.state.newPokeList2} />;
    }

    return (
      <div className={PokeGameClasses.PokegameContainer}>
        {pokedexTag1} {/*pokedexTag2*/}
      </div>
    );
  }
}

export default Pokegame;

// Mutation resource: https://doesitmutate.xyz/

// cancelling Axios call:https://github.com/axios/axios#cancellation

// Static Definition for React:https://medium.com/front-end-weekly/understanding-static-in-javascript-10782149993

//Difference between props and state:https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react
