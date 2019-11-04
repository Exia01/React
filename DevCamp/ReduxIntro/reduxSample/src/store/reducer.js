import {INCREMENT, DECREMENT,SubtractIncrement, AddIncrement} from "../js/constants/action-types";


const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  console.log(action)
  //setting up reducer with initial state. Will be used wth index.js
  if(action.type === INCREMENT){
    return {
      counter:state.counter + action.payload.num
    }
  }
  if(action.type === AddIncrement){
    return {
      counter:state.counter  + action.payload.num
    }
  }
  if(action.type === DECREMENT){
    return {
      counter:state.counter - action.payload.num
    }
  }
  if(action.type === SubtractIncrement){
    return {
      counter:state.counter - action.payload.num
    }
  }
  return state;
};

export default reducer;


/*  Because the counter property is a primitive. Not an object or an array. You can't extract properties out of a primitive.*/

// Javascript passing value vs reference:https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

///Redux principle explanation