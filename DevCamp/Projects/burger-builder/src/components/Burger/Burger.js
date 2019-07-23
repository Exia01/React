import React from 'react'
import uuid from "uuid";
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //key method to extract keys and turn into array, the mapping with ingredient key
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    //     console.log('Current ingredient key', igKey)
    //     console.log(props.ingredients[igKey])
        //chaining method, and creating array of ingredients based of key and values [salad, salad]
        return [...Array(props.ingredients[igKey])].map((x, i) => { //could do _ for any
            console.log("inside the second loop", i, igKey)
            return <BurgerIngredient key={uuid.v4()} type={igKey} />
        })//reduce, previous value and current value. Flattning the array 
    }).reduce((arr, el)=> { 
        return arr.concat(el)
    },[]) //passing in an array value and return to add to it
    console.log(transformedIngredients)
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger
// Using UUID: https://stackoverflow.com/questions/52852018/use-npm-uuid-in-reactjs