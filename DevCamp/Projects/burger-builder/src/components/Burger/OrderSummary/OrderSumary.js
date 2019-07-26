import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
//using auxiliary instead of fragment
const OrderSumary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}> {igKey} </span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <h3>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </h3>
  );
};

export default OrderSumary;
