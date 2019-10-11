import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = props => {
  let burgerStyle = {
    width: '100%',
    margin: 'auto'
  };
  console.log('CheckoutSummary Props' , props)
  return (
    //Passing btnType to render buttons and props for burger
    <div className={classes.CheckoutSummary}>
      <h1>We know you'll love it!</h1>
      <div style={burgerStyle}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancelled} btnType='Danger'>
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} btnType='Success'>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
