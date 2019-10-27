import React from 'react';
import uuid from 'uuid';
import classes from './Order.module.css';
const Order = props => {
  let style = {
    textTransform: 'capitalize',
    display: 'inline-block',
    margin: '0 8px',
    border: '1px solid #ccc',
    borderRadius:'5%',
    padding: '5px'
  };

  const { price, ingredients } = props;
  let ingredientsArr = [];
  for (let [igName, qty] of Object.entries(ingredients)) {
    //[key,value]
    ingredientsArr.push({ igName, qty }); //pushing the value "lettuce:1"
  }
  let ingredientsOutput = ingredientsArr.map(ig => {
    return (
      <span key={uuid.v4()} style={style}>
        {ig.igName} ({ig.qty})
      </span>
    );
  });
  
  console.log(ingredientsOutput)
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: $<strong>{price.toFixed(2)}</strong> (USD)
      </p>
    </div>
  );
};

export default Order;
// Alternative to not passing the parseIntFloat on order:  Number.parseFloat(price).toFixed(2)
// Async Try/Catch: https://scotch.io/tutorials/asynchronous-javascript-using-async-await
