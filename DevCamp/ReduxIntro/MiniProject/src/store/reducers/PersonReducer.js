import uuid from 'uuid';
import { ADD_PERSON, REMOVE_PERSON } from '../constants/PersonActionType';

const initialState = {
  persons: []
};

export const personReducer = (state = initialState, action) => {
  console.log('Action in Person Reducer: ', action);
  let id = uuid.v4();
  switch (action.type) {
    default:
      console.log('No Action Type passed!!!');
      return state;
  }
};

export default personReducer


// Exporting components:https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910