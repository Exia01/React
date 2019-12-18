import {
  PURCHASE_BURGER_ORDER_SUCCESS,
  PURCHASE_BURGER_ORDER_FAIL,
  PURCHASE_BURGER_START
} from '../constants/orderActionType';

const initialState = {
  orders: [],
  loading: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case PURCHASE_BURGER_ORDER_SUCCESS:
      const newOrderObj = {
        ...action.payload.orderData,
        id: action.payload.orderId
      };
      return {
        ...state,
        loading: false,
        //concat returns new array ==> immutably
        orders: state.orders.concat(newOrderObj)
      };

    case PURCHASE_BURGER_ORDER_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      console.log('No Valid Action Type passed!');
      return state;
  }
};

export default orderReducer;
