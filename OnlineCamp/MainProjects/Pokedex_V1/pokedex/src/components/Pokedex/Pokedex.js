import React from 'react'
import uuid from 'uuid'

import classes from '../../cssModules/Pokedex.module.css'
import PokeCard from '../Pokecard/PokeCard'

const Pokedex = (props) => {
    console.log(props)
    let pokeCards = props.pokeListObj.map(pokemon => {
        return <PokeCard pokemon={pokemon} key={uuid.v4()}/>
    })
    return (
        <div className={classes.Pokedex}>
            <h1>Pokedex!</h1>
            <section className={classes.cardsSection}>
            {pokeCards}
            </section>

        </div>
    )
}

export default Pokedex