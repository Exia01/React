import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
// import * as actions from '../../store/actions';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    //since loaded with the route component
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.push(`${this.props.match.url}/contact-data`); //could use replace too
  };
  componentDidMount() {
    console.log('Checkout Component Loaded');
    console.log(this.props);
  }

  render() {
    const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null; //if purchased redirect
    let checkoutSummaryComponent =
      this.props.ings != null ? (
        <React.Fragment>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={`${this.props.match.path}/contact-data`}
            component={ContactData}
          />
        </React.Fragment>
      ) : (
        <Redirect to='/' />
      );

    return <div>{checkoutSummaryComponent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.brg.ingredients,
    purchased: state.order.purchased
  };
};

//not really needed, left just in case
const mapDispatchToProps = dispatch => {
  return {};
};

//iterate through dictionary:https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript/34913701

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

//For Route, using render instead of component
