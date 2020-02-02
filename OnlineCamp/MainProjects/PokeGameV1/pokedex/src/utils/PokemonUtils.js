export const generateRandomPokemonCardCount = (count, pokemonList) => {
  // Takes in count and Object. Returns new Object and added props

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let pokemonsArr = [];
  while (count > 0) {
    //explicit just in case or could use a for loop
    const startIndex = Math.floor(Math.random() * pokemonList.length);
    const endIndex = startIndex + 1;
    pokemonsArr.push(...pokemonList.slice(startIndex, endIndex));
    count--;
  }

  const TotalExpNumbers = pokemonsArr.map(poke => {
    return poke.base_experience; //obtain arr of exp
  });

  const totalCardBaseExp = TotalExpNumbers.reduce(reducer); //add exp

  const pokeCardObj = {pokemonsArr, totalCardBaseExp} // extract exp and pokemon arr prop

  return pokeCardObj;
};

export const genPokesObjWithImgLinks = pokemonList => {
  // //takes in list and add id with either 0 || 00 to num
  let newPokemonsObj = pokemonList.map(pokemon => {
    let tempPokeObj = {...pokemon};
    let id = pokemon.id;
    if (pokemon.id < 10) {
      id = `00${pokemon.id}`;
    }
    if (pokemon.id < 100 && pokemon.id > 9) {
      id = `0${pokemon.id}`;
    }
    //Could also implement settings below:
    // if less than add three number and slice 3 from end
    let padToThree = (num) => (pokemon.id <= 999 ? `00${num}`.slice(-3) : num)

    //could setup as API String 
    tempPokeObj.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    return tempPokeObj;
  });
  return newPokemonsObj;
};
//No Default Export

export const getTotalCardHandExp = pokemonList => {};
