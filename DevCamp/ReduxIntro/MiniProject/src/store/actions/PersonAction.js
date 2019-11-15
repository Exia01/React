import { ADD_PERSON, REMOVE_PERSON } from '../constants/PersonActionType';

export const ADD_HANDLER = (person = null) => {
  return { type: ADD_PERSON, payload: { person } };
};
export const REMOVE_HANDLER = (id = null) => {
  return { type: REMOVE_PERSON, payload: { id } };
};
