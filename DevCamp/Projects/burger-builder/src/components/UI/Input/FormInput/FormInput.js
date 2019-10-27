import React from 'react';
import classes from './FormInput.module.css';
import jssPluginPropsSort from 'jss-plugin-props-sort';

const formInput = props => {
  let { label } = props; //currently not being passed. Could implement feature
  // console.log(props);

  let inputTagElement = null;
  switch (props.elementType) {
    case 'input':
      //passing the props config from the input --> input type / placeholder
      inputTagElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChanged}
        />
      );
      break;
    case 'textarea':
      inputTagElement = (
        <textarea
          className={classes.InputElement}
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
          >
            {opTag.displayValue}
          </option>
        );
      });
      inputTagElement = (
        <select
          className={classes.InputElement}
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
          className={classes.InputElement}
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
