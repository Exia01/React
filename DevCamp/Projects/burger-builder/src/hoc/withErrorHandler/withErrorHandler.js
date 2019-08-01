import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary'; // could also use React fragment
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  //takes in the jsx
  return class extends Component {
    state = {
      error: null
    };
    //anonymous class
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null }); // when making the request clear the state of any errors
        //when sending request, return the request so that it can continue
        return req
      });
      //get response and error, will handle error
      axios.interceptors.response.use(
        response => response,
        err => {
          // handling response short syntax
          this.setState({ error: err });
        }
      );
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      // modal has a click action to clear but the message will stay if not handled, method clears error
      // initially the state wil throw error because of null, using ternary to handle
      return (
        <Auxiliary>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
