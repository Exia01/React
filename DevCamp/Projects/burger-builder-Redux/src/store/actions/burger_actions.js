import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from '../constants/BurgerActionType';

export const addIngredientHandler = (ignName = null) => {
  return {type: ADD_INGREDIENT, payload: {ingredientName: ignName}};
};
export const removeIngredientHandler = (ignName = null) => {
  return {type: REMOVE_INGREDIENT, payload: {ingredientName: ignName}};
};



// Organization:https://stackoverflow.com/questions/34965856/what-is-the-point-of-the-constants-in-redux