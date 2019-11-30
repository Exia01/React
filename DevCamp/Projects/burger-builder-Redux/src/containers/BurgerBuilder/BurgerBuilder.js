import React, { Component, Fragment } from 'react'; //using fragment instead of auxiliary hoc
import { connect } from 'react-redux';
import axios from '../../axios-orders'; //using axios instance

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSumary from '../../components/Burger/OrderSummary/OrderSumary';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

//importing actionTypes
import {
  ADD_ING_HANDLER,
  REMOVE_ING_HANDLER
} from '../../store/actions/burger_actions';

class BurgerBuilder extends Component {
  state = {
    // Local UI State
    purchasing: false, //if on the checkout screen --> pressed "Order now" btn
    loading: false,
    error: false
  };

  //reaching out to firebase for the ingredients and setting state
  componentDidMount() {
    // axios
    //   .get(
    //     'https://burgerbuilder-react-88618.firebaseio.com/orders/ingredients.json'
    //   )
    //   .then(response => {
    //     const ingredients = response.data;
    //     this.setState({ ingredients });
    //   })
    //   .catch(err => {
    //     //the hoc will catch the error and render the modal component??? -> i'm so lost by this point
    //     this.setState({ error: true });
    //   });
  }

  updatePurchaseState(ingredientsList) {
    let ingredients = {};
    if (ingredientsList) {
      ingredients = {
        ...ingredientsList
      };
    } else {
      //copying the state
      ingredients = {
        ...this.state.ingredients
      };
    }
    //obtaining the keys and cycling to get the totals
    const ingredientTotal = Object.keys(ingredients)
      .map(igKey => {
        //array of nums for ingredients
        return ingredients[igKey];
      })
      .reduce((totalSum, el) => {
        // adding to totalSum with starting value of 0
        return totalSum + el;
      }, 0);
    // console.log('Ingredients: ', ingredients);
    // console.log('Total ingredients: ', ingredientTotal);
    return ingredientTotal > 0;
  }

  //modal handler
  purchaseHandler = () => {
    //set is set as an event need arrow function
    this.setState({ purchasing: true });
  };
  //closes modal
  purchaseCancelHandler = () => {
    //event -> need arrow function
    this.setState({ purchasing: false });
  };

  ////local function to set local UI
  purchaseContinueHandler = () => {
    let ingredientsAndTotalParam = new URLSearchParams(this.state.ingredients); //
    ingredientsAndTotalParam.set('price', this.state.totalPrice);
    let checkoutLocation = {
      hash: '#order',
      pathname: `${this.props.match.url}checkout`,
      search: `?${ingredientsAndTotalParam}`,
      ingredientsParams: `?${ingredientsAndTotalParam}`
    };
    this.props.history.push(checkoutLocation);
  };

  render() {
    console.log('Props on burgerBuilder', this.props);
    const disabledInfo = {
      //copying state and creating a true or false
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
      //checking true or false, will use for disabling buttons
    }

    //implementing same check as the burger below
    let orderSumary = null;

    //before we get the data from firebase, show spinner
    let burger = this.state.error ? (
      <p>Ingredients Can't be loaded!!</p>
    ) : (
      <Spinner />
    );
    //when state changes, this will recheck and render the burger component
    if (this.props.ings) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            //reverting
            purchaseable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            I
            price={this.props.price}
          />
        </React.Fragment>
      );
      orderSumary = (
        <OrderSumary
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price}
        />
      );
    }

    //checking after ingredients set
    if (this.state.loading) {
      //while the state is "loading"
      orderSumary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSumary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    ings: state.brg.ingredients,
    price: state.brg.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName => dispatch(ADD_ING_HANDLER(ingName)),
    onIngredientRemoved: ingName => dispatch(REMOVE_ING_HANDLER(ingName))
  };
};

//connecting to store and then passing another hoc onto the hoc
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios)); //axios is expected on the withError hoc
// Turning obj into queryStringParam: https://howchoo.com/g/nwywodhkndm/how-to-turn-an-object-into-query-string-parameters-in-javascript
//another param solution:https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
//Setting URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set || https://stackoverflow.com/questions/8737615/append-a-param-onto-the-current-url
