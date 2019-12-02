import {
  INCREMENT,
  ADD_INCREMENT,
  DECREMENT,
  SUBTRACT_INCREMENT
} from '../constants/CounterActionTypes';

export const incrementCount = payload => {
  return { type: INCREMENT, payload };
};

export const decrementCount = num => {
  return { type: DECREMENT, payload: { num } };
};

export const incrementCountBy5 = payload => {
  return { type: INCREMENT, payload };
};

export const decrementCountBy5 = payload => {
  return { type: SUBTRACT_INCREMENT, payload };
};
