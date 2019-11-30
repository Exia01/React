import * as burgerActionTypes from '../constants//BurgerActionType';
//Global constant (shouldn't it be let since it might be changed?)
const INGREDIENT_PRICES = {
  salad: 0.35,
  cheese: 0.5,
  meat: 1.45,
  bacon: 1.0
}; //could even fetch prices from db

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 1,
  purchaseable: false //could implement it here
};

const burgerReducer = (state = initialState, action) => {
  let stateObj = {};

  switch (action.type) {
    case burgerActionTypes.ADD_INGREDIENT:
      stateObj = {
        ...state, //copying top layer
        ingredients: {
          ...state.ingredients, //deep copy for properties
          //using dynamic property key
          [action.payload.ingredientName]:
            state.ingredients[action.payload.ingredientName] + 1
        },
        //first copying the state and now overriding total
        totalPrice:
          state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName]
      };
      return stateObj;
    case burgerActionTypes.REMOVE_INGREDIENT:
      stateObj = {
        ...state, //copying top layer
        ingredients: {
          ...state.ingredients, //deep copy for properties
          //using dynamic property key
          [action.payload.ingredientName]:
            state.ingredients[action.payload.ingredientName] - 1
        },
        totalPrice:
          state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName]
      };
      return stateObj;
    default:
      console.log('No Action Type passed!');
      return state;
  }
};

export default burgerReducer;

//Dynamic Object Keys: https://stackoverflow.com/questions/2274242/how-to-use-a-variable-for-a-key-in-a-javascript-object-literal

// Dynamic Object keys pt:https://www.sitepoint.com/es6-enhanced-object-literals/

// ActionTypes and Contants:https://stackoverflow.com/questions/34965856/what-is-the-point-of-the-constants-in-redux
