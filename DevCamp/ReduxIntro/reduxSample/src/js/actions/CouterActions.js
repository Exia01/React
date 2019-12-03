import {
  INCREMENT,
  ADD_INCREMENT,
  DECREMENT,
  SUBTRACT_INCREMENT
} from '../constants/CounterActionTypes';

export const incrementCount = num => {
  return { type: INCREMENT, payload:{num} };
};

export const decrementCount = num => {
  return { type: DECREMENT, payload: { num } };
};

export const incrementCountByNum= num => {
  return { type: ADD_INCREMENT, payload:{num} };
};

export const decrementCountByNum = num => {
  return { type: SUBTRACT_INCREMENT, payload:{num} };
};
