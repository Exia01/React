import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary'; // could also use React fragment
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  //takes in the jsx
  return class extends Component {
    // using component did mount produces errors  due to the rendering after the main elements using attributes for axios
    state = { error: null };
    reqInterceptor = axios.interceptors.request.use(req => {
      this.setState({ error: null });
      return req;
    });
    resInterceptor = axios.interceptors.response.use(
      res => res,
      error => this.setState({ error })
    );
    // state = {
    //   error: null
    // };
    // //anonymous class
    // componentDidMount() {
    //   axios.interceptors.request.use(req => {
    //     this.setState({ error: null }); // when making the request clear the state of any errors
    //     //when sending request, return the request so that it can continue
    //     return req
    //   });
    //   //get response and error, will handle error
    //   axios.interceptors.response.use(
    //     response => response,
    //     err => {
    //       // handling response short syntax
    //       this.setState({ error: err });
    //     }
    //   );
    // }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    // To avoid multiple interceptors running on classes we may not need, remove when un mounting
    componentWillUnmount() {
      console.log(
        '[withErrorHandler] willUnmount',
        this.reqInterceptor,
        this.resInterceptor
      );

      //could use in the return function in use effect. THis will prevent memory leaks
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    render() {
      // modal has a click action to clear but the message will stay if not handled, method clears error
      // initially the state wil throw error because of null, using ternary to handle
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErrorHandler;
