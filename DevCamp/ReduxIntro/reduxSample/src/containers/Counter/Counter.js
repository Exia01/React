import React, { Component } from 'react';

//Used as a function to return an HOC connects the component
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

//importing constant actions
import {
  INCREMENT,
  DECREMENT,
  AddIncrement,
  SubtractIncrement
} from '../../js/constants/action-types';

class Counter extends Component {
  //could do away with this and link directly
  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.props.onIncrementCounter(value);
        break;
      case 'dec':
        this.props.onDecrementCounter(value);
        break;
      case 'add':
        this.props.onAddCounter(value);
        break;
      case 'sub':
        this.props.onSubtractCounter(value);
        break;
      default:
        //increasing it by one as a default
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label='Increment'
          clicked={() => this.props.onIncrementCounter(1)}
        />
        <CounterControl
          label='Decrement'
          clicked={() => this.props.onDecrementCounter(1)}
        />
        <CounterControl label='Add 5' clicked={() => this.props.onAddCounter(5)} />
        <CounterControl
          label='Subtract 5'
          clicked={() => this.props.onSubtractCounter(5)}
        />
      </div>
    );
  }
}

//stores instructions on how to the state store in redux should be mapped to the props on this container

const mapsStateToProps = state => {
  console.log(state);
  //stores a function which expects a state and returns a map
  return {
    ctr: state.counter //reaching out to the state in redux and setting the property to ctr key
  };
};

//Enables dispatching to redux
const mapDispatchToProps = (dispatch, func) => {
  //stores a function which will receive dispatch
  //could reduce down to one function??
  return {
    onIncrementCounter: num => dispatch({ type: INCREMENT, payload: { num } }),
    onAddCounter: num => dispatch({ type: AddIncrement, payload: { num } }),
    onDecrementCounter: num => dispatch({ type: DECREMENT, payload: { num } }),
    onSubtractCounter: num =>
      dispatch({ type: SubtractIncrement, payload: { num } })
  };
};

export default connect(
  mapsStateToProps, //could also pass null
  mapDispatchToProps
)(Counter); //function that return an hoc, connects can call as a function-->can also pass configuration for this container first executes connect.

//anonymous functions: https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions
// shorthandExplanation:https://codeburst.io/javascript-understand-arrow-function-syntax-ab4081bba85b
