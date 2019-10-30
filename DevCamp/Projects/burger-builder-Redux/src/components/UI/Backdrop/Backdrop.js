import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = props =>
  props.show ? <div className={classes.Backdrop} onClick={props.clicked} /> : null; // if passing null, nothing will get rendered
export default backdrop;
