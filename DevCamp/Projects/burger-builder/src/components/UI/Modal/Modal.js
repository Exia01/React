import React from 'react';
import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <Auxiliary>
  <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      className={classes.Modal}
      // if true, show by the translate or slide out of screen
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        //opaque or not visible
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Auxiliary>
);

export default modal;
