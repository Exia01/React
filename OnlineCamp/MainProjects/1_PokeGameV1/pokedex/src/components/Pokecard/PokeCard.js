import React from 'react';

import classes from '../../cssModules/Pokecard.module.css';

const PokeCard = props => {
  let {name, type, base_experience, id, image} = props.pokemon;

  return (
    <article className={classes.PokeCard} id={id}>
      <div className={classes.imgColorSection}>
        <img src={image} alt='Pokemon sprite' />
      </div>
      <h4>{name}</h4>
      <p>type:{type}</p>
      <p>EXP:{base_experience}</p>

    </article>
  );
};

export default PokeCard;
