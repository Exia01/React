import * as burgerActionTypes from '../constants/BurgerActionType';
import { updateObject } from '../../shared/utility';
//Global constant (shouldn't it be let since it might be changed?)
const INGREDIENT_PRICES = {
  salad: 0.35,
  cheese: 0.5,
  meat: 1.45,
  bacon: 1.0
}; //could even fetch prices from db

const initialState = {
  ingredients: null,
  totalPrice: 1,
  error: false,
  loading: false,
  purchaseable: false, //could implement it here
  buildingBurger: false
};

//Can do this for every action
const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.payload.ingredientName]:
      state.ingredients[action.payload.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice:
      state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName],
    buildingBurger: true
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action, stateObj) => {
  stateObj = {
    ...state, //copying top layer
    ingredients: {
      ...state.ingredients, //deep copy for properties
      //using dynamic property key
      [action.payload.ingredientName]:
        state.ingredients[action.payload.ingredientName] - 1
    },
    totalPrice:
      state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName],
    buildingBurger: true
  };
  return stateObj;
};

const setIngredients = (state, action) => {
  // obtaining position and ing from DB
  let ings = {};
  for (let [ingPosition, ingredientsPropr] of Object.entries(
    action.payload.ingredients
  )) {
    ings[ingredientsPropr.ing] = ingredientsPropr.qty;
  }
  return updateObject(state, {
    ingredients: ings,
    totalPrice: 1,
    error: false,
    buildingBurger: false // starting from scratch
  });
};

const burgerReducer = (state = initialState, action) => {
  let stateObj = {};

  switch (action.type) {
    case burgerActionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    case burgerActionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action, stateObj);

    case burgerActionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);

    case burgerActionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });

    default:
      console.log('No Action Type passed!');
      return state;
  }
};

export default burgerReducer;

//Dynamic Object Keys: https://stackoverflow.com/questions/2274242/how-to-use-a-variable-for-a-key-in-a-javascript-object-literal

// Dynamic Object keys pt:https://www.sitepoint.com/es6-enhanced-object-literals/

// ActionTypes and Contants:https://stackoverflow.com/questions/34965856/what-is-the-point-of-the-constants-in-redux

/*set ingredients old code:
    return {
      ...state,
      ingredients: ings, //could map individually, one by one ,
      totalPrice: 1, //could obtain from server
      error: false
    };
*/
