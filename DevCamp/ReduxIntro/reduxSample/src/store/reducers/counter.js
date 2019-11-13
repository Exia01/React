import {
  INCREMENT,
  DECREMENT,
  SUBTRACT_INCREMENT,
  ADD_INCREMENT
} from '../../js/constants/CounterActionTypes';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log('Action in Reducer: ', action);
  //setting up reducer with initial state. Will be used wth index.js
  const newState = Object.assign({}, state); // copying initialState first layer deep. need to use json.parse if multiple layers
  switch (action.type) {
    case INCREMENT:
      newState.counter = state.counter + action.payload.num;
      return newState;
    case ADD_INCREMENT:
      newState.counter = state.counter + action.payload.num;
      return newState;
    case DECREMENT:
      return { ...state, counter: state.counter - action.payload.num }; //another way of copying and updating an obj by passing the arg we want to override
    case SUBTRACT_INCREMENT:
      return { ...state, counter: state.counter - action.payload.num };

    default:
      console.log('No Action Type passed!!!');
      return state;
  }
};

export default reducer;

// Javascript passing value vs reference:https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

///Redux principle explanation on mutability:https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
