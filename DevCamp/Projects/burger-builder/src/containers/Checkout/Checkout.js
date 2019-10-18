import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };
  // no need to use componentDidMount since this is separate and accessed by url
  componentDidMount() {
    this.fetchIngredientsData();
  }
  fetchIngredientsData = paramSearchTerm => {
    // console.log('Fetching Ingredients Data in Checkout');
    // console.log(this.props)
    let ingredientsIteratorObj = new URLSearchParams(
      this.props.location.search
    );

    let tempStateObj = {};
    let tempPrice = 0;
    for (const [key, value] of ingredientsIteratorObj.entries()) {
      if (key === 'price') {
        tempPrice = value;
      } else {
        tempStateObj[key] = value || 0;
      }
    }

    this.setState({ ingredients: tempStateObj, totalPrice: tempPrice });
  };
  checkoutCancelledHandler = () => {
    //since loaded with the route component
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.push(`${this.props.match.url}/contact-data`); //could use replace too
  };

  render() {
    let checkoutSummaryComponent =
      this.state.ingredients != null ? (
        <React.Fragment>
          <CheckoutSummary
            ingredients={this.state.ingredients}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={`${this.props.match.path}/contact-data`}
            render={(props) => (
              <ContactData
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                {...props}//passing props including history obj
              />
            )}
          />
        </React.Fragment>
      ) : null;
    return <div>{checkoutSummaryComponent}</div>;
  }
}

//iterate through dictionary:https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript/34913701

export default Checkout;

//For Route, using render instead of component
