import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: null
  };
  // no need to use componentDidMount since this is separate and accessed by url
  componentDidMount() {
    this.fetchIngredientsData();
  }
  fetchIngredientsData = paramSearchTerm => {
    console.log('Fetching Ingredients Data in Checkout');
    let ingredientsIteratorObj = new URLSearchParams(
      this.props.location.ingredientsParams
    );
    let tempStateObj = {};
    for (const [key, value] of ingredientsIteratorObj.entries()) {
      tempStateObj[key] = value || 0;
    }

    this.setState({ ingredients: tempStateObj });
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
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      ) : null;
    return <div>{checkoutSummaryComponent}</div>;
  }
}

//iterate through dictionary:https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript/34913701

export default Checkout;
