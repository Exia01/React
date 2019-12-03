import React, { Component } from 'react';

//Used as a function to return an HOC connects the component
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

//importing constant actions
import {
  INCREMENT,
  DECREMENT,
  ADD_INCREMENT,
  SUBTRACT_INCREMENT
} from '../../js/constants/CounterActionTypes';

//importing StoreResult Action Creator could include above..?
import { storeResult as storeResultActionCreator} from '../../js/constants/CounterActionTypes';
import {decrementCount } from '../../js/actions/CouterActions'

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
        <CounterControl
          label='Add 5'
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label='Subtract 5'
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {/*inline rendering, could do constant/let too*/}
          {this.props.storeResults.map(strResult => {
            //store result
            return (
              <li
                key={strResult.id}
                onClick={() => this.props.onDeleteResult(strResult.id)}
              >
                {strResult.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

//stores instructions on how to the state store in redux should be mapped to the props on this container

const mapsStateToProps = state => {
  console.log('Mapping Props to State:', state);
  //stores a function which expects a state and returns a map
  return {
    ctr: state.ctr.counter, //reaching out to the state in redux and setting the property to ctr key
    storeResults: state.res.results
  };
};

//Enables dispatching to redux
const mapDispatchToProps = (dispatch, func) => {
  //stores a function which will receive dispatch
  //could reduce down to one function??
  return {
    onIncrementCounter: num => dispatch({ type: INCREMENT, payload: { num } }),
    onAddCounter: num => dispatch({ type: ADD_INCREMENT, payload: { num } }),
    onDecrementCounter: num => dispatch(decrementCount(num)), //utilizing action creator 
    onSubtractCounter: num =>
      dispatch({ type: SUBTRACT_INCREMENT, payload: { num } }),
    //functions to results // not all dispatches have to be executed on the reducers.
    onStoreResult: result => dispatch(storeResultActionCreator(result)),
    onDeleteResult: id => dispatch({ type: 'DELETE_RESULT', resultElId: id }) //passing just id --> resultElementID
  };
};

export default connect(
  mapsStateToProps, //could also pass null
  mapDispatchToProps
)(Counter); //function that return an hoc, connects can call as a function-->can also pass configuration for this container first executes connect.

//anonymous functions: https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions
// shorthandExplanation:https://codeburst.io/javascript-understand-arrow-function-syntax-ab4081bba85b
// //Another Explanation:https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8303068#questions
