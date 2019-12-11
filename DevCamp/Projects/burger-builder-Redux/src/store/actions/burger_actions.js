import axios from '../../axios-orders';

import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED
} from '../constants/BurgerActionType';

export const addIngredientHandler = (ignName = null) => {
  return { type: ADD_INGREDIENT, payload: { ingredientName: ignName } };
};

export const removeIngredientHandler = (ignName = null) => {
  return { type: REMOVE_INGREDIENT, payload: { ingredientName: ignName } };
};

//Secondary funcs, called by async thunk func
export const setIngredients = ingredients => {
  return { type: SET_INGREDIENTS, payload: { ingredients } };
};
export const fetchIngredientsFailedHandler = () => {
  return { type: FETCH_INGREDIENTS_FAILED };
};

export const initFetchIngredientsHandler = () => {
  //this syntax is enables by thunk
  return dispatch => {
    axios
      .get(
        'https://burgerbuilder-react-88618.firebaseio.com/orders/ingredients.json'
      )
      .then(response => {
        const ingredients = response.data;
        dispatch(setIngredients(ingredients));
      })
      .catch(err => {
        //the hoc will catch the error and render the modal component??? -> i'm so lost by this point
        dispatch(fetchIngredientsFailedHandler())
      });
  };
};
// Organization:https://stackoverflow.com/questions/34965856/what-is-the-point-of-the-constants-in-redux
