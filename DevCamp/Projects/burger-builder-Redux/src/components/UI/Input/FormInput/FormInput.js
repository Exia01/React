import React from 'react';
import classes from './FormInput.module.css';


const formInput = props => {
  let { label } = props; //currently not being passed. Could implement feature
  // console.log(props);

  //always attaching the initial classes
  const inputClasses = [classes.InputElement];//joining on input

  //check is independent of the input --> checking for isValid --> true or false
  if(props.inValid && props.shouldValidate && props.touched){ 
    //if is invalid, should be validated and it has been "touched" --> clicked
    inputClasses.push(classes.Invalid)
  }

  let inputTagElement = null;
  switch (props.elementType) {
    case 'input':
      //passing the props config from the input --> input type / placeholder
      inputTagElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChanged}
        />
      );
      break;
    case 'textarea':
      inputTagElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChanged}
        />
      );
      break;
    case 'select':
      const { options } = props.elementConfig;
      let optionsTagElements = options.map(opTag => {
        return (
          <option
            key={Math.floor(Math.random() * (9999 - 1 + 1))}
            value={opTag.value}
          >
            {opTag.displayValue}
          </option>
        );
      });
      inputTagElement = (
        <select
          className={inputClasses.join(" ")}
          onChange={props.valueChanged}
          value={props.value}
        >
          {optionsTagElements}
        </select>
      );
      break;
    default:
      inputTagElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChanged}
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
