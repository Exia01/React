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

// async action creators

export const purchaseBUrgerStart = orderData => {
  return dispatch => {
    axios
      .post('/online-orders/orders.json', orderData) //using .json to target the endpoint
      .then(response => {
        alert('Success! ');
        console.log('From orderAction:', response);
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch(err => {
        console.log('From orderAction:', err);
        dispatch(purchaseBurgerFail(err));
      });
  };
};
