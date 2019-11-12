import {
  INCREMENT,
  DECREMENT,
  SUBTRACT_INCREMENT,
  ADD_INCREMENT
} from '../js/constants/CounterActionTypes';

const initialState = {
  counter: 0,
  results: []
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

    case 'STORE_RESULT':
      return {
        ...state,
        //arrays are passed by reference
        //concat is an immutable way of updating an array --> returns a new array.
        results: state.results.concat({ id: new Date(), value: state.counter })
      };

    case 'DELETE_RESULT':
      // //can create a copy of the array if removing obj
      // const newArray = [...state.results]; //objs are still pointing to the same
      // newArray.splice(id, 1);

      //Using Filter doesn't touch the old one, returns new one
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      //above will filter out any without the same id as the previous one.
      return { ...state, results: updatedArray };

    default:
      console.log('No Action Type passed!!!');
      return state;
  }
};

export default reducer;

// Javascript passing value vs reference:https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

///Redux principle explanation on mutability:https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
