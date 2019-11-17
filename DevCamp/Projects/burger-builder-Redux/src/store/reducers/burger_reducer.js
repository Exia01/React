import * as burgerActionTypes from '../constants//BurgerActionType';

const initialState = {
  ingredients: null,
  totalPrice: 1,
  purchaseable: false
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case burgerActionTypes.ADD_INGREDIENTS:
      return {};
    case burgerActionTypes.REMOVE_INGREDIENT:
      return {};
    default:
      console.log('No Action Type passed!!!');
      return state;
  }
};

export default burgerReducer;

// ActionTypes and Contants:https://stackoverflow.com/questions/34965856/what-is-the-point-of-the-constants-in-redux
