import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders'; //using axios instance

import Order from '../../components/Order/Order';
//error handler component
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { fetchOrders } from '../../store/actions'; //importing index by default

class Orders extends Component {
  //property to address update to unmount component
  _isMounted = false;
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    this._isMounted = true;
    // if (this._isMounted) {
    this.props.onFetchOrders(this.props.token, this.props.userId); //could also use get state in the orderAction
    // }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }


  render() {
    let ordersTags = <Spinner />;
    if (!this.props.loading) {
      //if not loading
      //this.props.orders.length>0
      ordersTags = this.props.orders.map(order => {
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

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.idToken, 
    userId: state.auth.userId, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios)); //need to pass axios for it to work as well
