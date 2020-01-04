import * as orderActionConstant from '../constants/orderActionType';
import axios from '../../axios-orders';

export const fetchOrderSuccess = orders => {
  return {
    type: orderActionConstant.FETCH_ORDERS_SUCCESS,
    payload: { orders }
  };
};

export const fetchOrderFail = error => {
  return { type: orderActionConstant.FETCH_ORDERS_FAIL, error }; //could pass error as payload?
};

export const fetchOrderStart = () => {
  return {
    type: orderActionConstant.FETCH_ORDERS_START
  };
};

export const purchaseInit = () => {
  return {
    type: orderActionConstant.PURCHASE_INIT
  };
};

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
export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    //since obtaining the data from server, we can set the format changes here
    axios
      .post(`/online-orders/orders.json?auth=${token}`, orderData) //using .json to target the endpoint
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

export const fetchOrders = token => {
  return dispatch => {
    //could do getState here
    dispatch(fetchOrderStart());
    axios
      .get(`/online-orders/orders.json?auth=${token}`) //using .json to target the endpoint
      .then(response => {
        let { data } = response;
        let tempFetchedOrdersDataArr = [];
        for (let key of Object.keys(data)) {
          tempFetchedOrdersDataArr.push({ ...data[key], id: key }); //destructuring and adding new property
        }
        dispatch(fetchOrderSuccess(tempFetchedOrdersDataArr));
      })
      .catch(err => {
        // console.log('Error!!!: ', err);
        dispatch(fetchOrderFail(err));
        // appropriately handle the error
      });
  };
};
