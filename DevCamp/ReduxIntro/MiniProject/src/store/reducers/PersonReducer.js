import uuid from 'uuid';
// import { ADD_PERSON, REMOVE_PERSON } from '../constants/PersonActionType'; // //could also import like this
import * as actionTypes from '../constants/PersonActionType'
const initialState = {
  persons: []
};

export const personReducer = (state = initialState, action) => {
  console.log('Action in Person Reducer: ', action);

  switch (action.type) {
    case  actionTypes.ADD_PERSON:
      const newPerson = {
        id: uuid.v4(), // not really unique but good enough here!
        name: 'Yoshi',
        age: Math.floor(Math.random() * 40)
      };
      return {
        ...state,
        //arrays are passed by reference
        //concat is an immutable way of updating an array --> returns a new array.
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.REMOVE_PERSON:
      const updatedArray = state.persons.filter(
        person => person.id !== action.payload.id
      );
      console.log(updatedArray)
      return { ...state, persons: updatedArray };

    default:
      console.log('No Action Type passed!!!');
      return state;
  }
};

export default personReducer;

// Exporting components:https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
// Could build array of Names:https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
