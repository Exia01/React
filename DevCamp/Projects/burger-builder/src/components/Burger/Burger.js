import React from 'react';
import uuid from 'uuid';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  // console.log(Object.keys(props.ingredients).sort());
  //key method to extract keys and turn into array, the mapping with ingredient key
  let transformedIngredients = Object.keys(props.ingredients) //ingredient is an obj
    .map(igKey => {
      // console.log('Current ingredient key', igKey);
      //     console.log(props.ingredients[igKey])
      //chaining method, and creating array of ingredients based of key and values [salad, salad]
      return [...Array(props.ingredients[igKey])].map((x,i) => {
        //could do _ for any
        // console.log('inside the second loop', x, i, igKey);
        return <BurgerIngredient key={uuid.v4()} type={igKey} />;
      }); //reduce, previous value and current value. Flattening the array
    })
    .reduce((arr, el) => {
      // console.log(`reducing obj: arr is${arr}, element is ${el}`)
      return arr.concat(el);
    }, []); //passing in an array value and return to add to it
  // console.log(transformedIngredients);
  // console.log(transformedIngredients)
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

// using maps with two args:https://stackoverflow.com/questions/12344087/using-javascript-map-with-a-function-that-has-two-arguments
// Using UUID: https://stackoverflow.com/questions/52852018/use-npm-uuid-in-reactjs
//=========================
//Better way to implement the burger rendering
// const { ingredients } = this.props;
// let ingredientsArray = [];
// Object.keys(ingredients).forEach(ingKey => {
//   for(let i = 0; i < ingredients[ingKey]; i++)
//     ingredientsArray.push(<Ingredient key={ingKey + i} type={ingKey}/>)
// });

//=========================================================
