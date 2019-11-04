import {
  INCREMENT,
  AddIncrement,
  DECREMENT,
  SubtractIncrement,
  AddIncrement
} from '../constants/action-types';

export const incrementCount = payload => {
  return { type: INCREMENT, payload };
};

export const decrementCount = payload => {
  return { type: DECREMENT, payload };
};

export const incrementCountBy5 = payload => {
  return { type: AddIncrement, payload };
};

export const decrementCountBy5 = payload => {
  return { type: SubtractIncrement, payload };
};
