import React from 'react';

import classes from '../../cssModules/Pokecard.module.css';

const PokeCard = props => {
  let { name, type, base_experience, id, image } = props.pokemon;

  return (
    <article className={classes.PokeCard} id={id}>
      <h2>{name}</h2>
      <img src={image} alt='Pokemon sprite' />
      <p>type:{type}<br/>
      EXP:{base_experience}</p>
    </article>
  );
};

export default PokeCard;
