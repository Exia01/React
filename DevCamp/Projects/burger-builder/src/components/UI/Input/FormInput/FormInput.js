import React from 'react';
import classes from './FormInput.module.css'

const formInput = props => {
  let label = { props };
  console.log("Form input component loaded")
  let inputTagElement = null;
  switch (props.inputType) {
    case 'input':
      inputTagElement = <input className={classes.InputElement} {...props} />;
      break;
    case 'textarea':
      inputTagElement = <textarea className={classes.InputElement} {...props} />;
      break;
    default:
      inputTagElement = <input className={classes.InputElement} {...props} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor='{label}'></label>
      {inputTagElement}
    </div>
  );
};

export default formInput;
