import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
//using auxiliary instead of fragment
// could transform to class based and implement prop types
// could switch to class base component
const OrderSumary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    // <li> Salad : 1 </li>
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}> {igKey} </span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>{' '}
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType={'Danger'} clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType={'Success'} clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Auxiliary>
  );
};

export default OrderSumary;
