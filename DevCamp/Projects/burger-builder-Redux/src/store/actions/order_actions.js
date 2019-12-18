import * as orderActionConstant from '../constants/orderActionType';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: orderActionConstant.PURCHASE_BURGER_ORDER_SUCCESS,
    payload: { orderId: id, orderData }
  };
};

export const purchaseBurgerFail = error => {
  return { type: orderActionConstant.PURCHASE_BURGER_ORDER_FAIL, error };
};

export const purchaseBurgerStart = () => {
  return {
    type: orderActionConstant.PURCHASE_BURGER_START
  };
};

// async action creators
export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/online-orders/orders.json', orderData) //using .json to target the endpoint
      .then(response => {
        alert('Success! ');
        console.log('From orderAction:', response, orderData);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(err => {
        console.log('From orderAction:', err);
        dispatch(purchaseBurgerFail(err));
      });
  };
};
