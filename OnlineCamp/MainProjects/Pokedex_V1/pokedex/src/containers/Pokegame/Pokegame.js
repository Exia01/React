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

  generateRandomPokemonCount = (count,pokemonList) => {
      console.log(pokemonList)
      let newPokemonArr = []
      while (count > 0) { //explicit just in case
          const startIndex = Math.floor(Math.random() * pokemonList.length)
          const endIndex = startIndex+1
          console.log(startIndex)
          console.log(endIndex)
          newPokemonArr.concat(pokemonList.slice(newPokemonArr, startIndex+1))
          count--
        }
        console.log(newPokemonArr)
        return newPokemonArr

  };

  componentDidMount() {
      let newPokeList = this.generateRandomPokemonCount(4,this.props.initialPokemons)
    //   console.log(newPokeList)
  }

  componentWillUnmount() {}

  render() {
    return <div className={PokeGameClasses.PokegameContainer}></div>;
  }
}

export default Pokegame;
