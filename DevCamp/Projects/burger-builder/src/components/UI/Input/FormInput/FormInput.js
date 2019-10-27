import React from 'react';
import classes from './FormInput.module.css';

const formInput = props => {
  let { label } = props;
 
  let inputTagElement = null;
  switch (props.elementType) {
    case 'input':
      //passing the props config from the input --> input type / placeholder
      inputTagElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputTagElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    default:
      inputTagElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={label}>
        {label}
      </label>
      {inputTagElement}
    </div>
  );
};

export default formInput;
