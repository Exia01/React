import React, { Component } from 'react';
import axios from 'axios';

import PokeGameClasses from '../../cssModules/Pokegame.module.css';

export class Pokegame extends Component {
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

  generateRandomPokemonCardCount = (count,pokemonList) => {
      let newPokemonArr = []
      while (count > 0) { //explicit just in case or could use a for loop
          const startIndex = Math.floor(Math.random() * pokemonList.length)
          const endIndex = startIndex+1
          newPokemonArr.push(...pokemonList.slice(startIndex, endIndex))
          count--
        }
        return newPokemonArr

  };

  componentDidMount() {
      let newPokeList = this.generateRandomPokemonCardCount(4,this.props.initialPokemons)
      console.log(newPokeList)
  }

  componentWillUnmount() {}

  render() {
    return <div className={PokeGameClasses.PokegameContainer}></div>;
  }
}

export default Pokegame;


// Mutation resource: https://doesitmutate.xyz/