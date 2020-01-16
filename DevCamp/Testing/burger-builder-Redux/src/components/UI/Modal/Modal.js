import React, { Component } from 'react'
import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


// not running pure component to avoid unnecessary checks with the rest of the props
export class Modal extends Component {
  //since order summary is wrapped with with modal this will decide to update component or not 
  shouldComponentUpdate(nextProps, nextState, nextContext){
    // console.log(this.props.children)
    // console.log(`Testing if Modal Should update: ${nextProps.show}, ${this.props.show} ${this.props.children !== nextContext.children}`)
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    //check to see if we pass the order summary or the loading spinner
  }
  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext){
    // console.log('[Modal] componentWillUpdate ');
    
  }
  render() {
    return (
      <Auxiliary>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
          className={classes.Modal}
          // if true, show by the translate or slide out of screen
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            //opaque or not visible
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    
    )
  }
}

export default Modal
