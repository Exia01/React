import React from 'react';

import classes from '../../cssModules/Pokecard.module.css';

const PokeCard = props => {
  console.log(props)
  let { name, type, base_experience, id, image } = props.pokemon;

  return (
    <article className={classes.PokeCard}>
      <h2>{name}</h2>
      <img src={image} alt='Pokemon sprite' />
      <p>type:{type}</p>
      <p>EXP:{base_experience}</p>
    </article>
  );
};

export default PokeCard;
