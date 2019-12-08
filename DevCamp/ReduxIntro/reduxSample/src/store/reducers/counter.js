import {
  INCREMENT,
  DECREMENT,
  SUBTRACT_INCREMENT,
  ADD_INCREMENT
} from '../../js/constants/index';

import {updateObj} from '../utilities'
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log('Action in Reducer: ', action);
  let counterObj
  //setting up reducer with initial state. Will be used wth index.js
  const newState = Object.assign({}, state); // copying initialState first layer deep. need to use json.parse if multiple layers
  switch (action.type) {
    case INCREMENT:
      newState.counter = state.counter + action.payload.num;
      return newState;
    case ADD_INCREMENT:
      counterObj = {counter: state.counter + action.payload.num}
      return updateObj(state, counterObj)
    case DECREMENT:
      counterObj = {counter: state.counter - action.payload.num}
      return updateObj(state, counterObj)
    case SUBTRACT_INCREMENT:
      counterObj = {counter: state.counter - action.payload.num}
      return updateObj(state, counterObj)//passing in the state with the obj to update


    default:
      console.log('No Action Type passed!!!');
      return state;
  }
};

export default reducer;

// Javascript passing value vs reference:https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

///Redux principle explanation on mutability:https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
