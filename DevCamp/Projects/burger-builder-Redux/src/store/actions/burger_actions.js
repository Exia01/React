import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from '../constants/BurgerActionType';

export const ADD_ING_HANDLER = (ignName = null) => {
  return { type: ADD_INGREDIENT, payload: { ingredientName: ignName } };
};
export const REMOVE_ING_HANDLER = (ignName = null) => {
  return { type: REMOVE_INGREDIENT, payload: { ingredientName: ignName  } };
};
