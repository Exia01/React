import React from 'react';
import classes from './Button.module.css';

const Button = props => (
  //no curly braces required since we are only performing a return

  <button
  disabled={props.disabled}
    //for the className we are passing and array with two properties and then joining
    // first setting button as a standard class and then passing second as props
    // className={[classes.Button, classes[props.btnType]].join(' ')} //danger or success
    className={`${classes.Button} ${classes[props.btnType]}`}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
