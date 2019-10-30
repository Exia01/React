import React, { Component } from 'react';
import axios from '../../axios-orders'; //using axios instance

import Order from '../../components/Order/Order';
//error handler component
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  //property to address update to unmount component
  _isMounted = false;
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    this._isMounted = true;
    this.fetchOrderDataHandler();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchOrderDataHandler = async () => {
    try {
      const res = await axios.get('/online-orders/orders.json');
      let { data } = res;
      let tempFetchedOrdersDataArr = [];
      for (let key of Object.keys(data)) {
        tempFetchedOrdersDataArr.push({ ...data[key], id: key }); //destructuring and adding new property
      }
      console.log(tempFetchedOrdersDataArr);
      if (this._isMounted) {
        this.setState({ loading: false, orders: tempFetchedOrdersDataArr });
      }
    } catch (err) {
      console.log('Error!!!: ', err);
      this.setState({ loading: false });
      // appropriately handle the error
    }
  };

  render() {
    let ordersTags = null;
    if (this.state.orders) {
      ordersTags = this.state.orders.map(order => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price} //could add + to parse float
          />
        );
      });
    }
    return <div>{ordersTags}</div>;
  }
}

export default withErrorHandler(Orders, axios); //need to pass axios for it to work as well
