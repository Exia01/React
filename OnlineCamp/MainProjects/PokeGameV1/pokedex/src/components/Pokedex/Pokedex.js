import React from "react";
import uuid from "uuid";

import classes from "../../cssModules/Pokedex.module.css";
import PokeCard from "../Pokecard/PokeCard";

const Pokedex = props => {
    let WinOrLoseMessage;
    let messageClass;
    let pokeCards = props.pokeListObj.pokemonsArr.map(pokemon => {
        return <PokeCard pokemon={pokemon} key={uuid.v4()} />;
    });

    //repetitive code, could combine under check 
    props.winner !== undefined
        ? (messageClass = classes.WinMessage)
        : (messageClass = classes.LostMessage);

    props.winner !== undefined
        ? (WinOrLoseMessage = "Winning Hand")
        : (WinOrLoseMessage = "Losing Hand")
    
    console.log(props)

    return (
        <div className={classes.Pokedex}>
            <h1 className={messageClass}>{WinOrLoseMessage}</h1>
            <p>Total Experience: {props.pokeListObj.totalCardBaseExp} </p>
            <section className={classes.cardsSection}>{pokeCards}</section>
        </div>
    );
};

export default Pokedex;
