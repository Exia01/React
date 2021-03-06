import React, { Component, Fragment } from 'react'; //using fragment instead of auxiliary hoc

import axios from '../../axios-orders'; //using axios instance

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSumary from '../../components/Burger/OrderSummary/OrderSumary';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

//Global constant (shouldnt it be let since it might be changed?)
const INGREDIENT_PRICES = {
  salad: 0.35,
  cheese: 0.5,
  meat: 1.45,
  bacon: 1.0
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 1,
    purchaseable: false,
    purchasing: false, //if on the checkout screen --> pressed "Order now" btn
    loading: false,
    error: false
  };

  //reaching out to firebase for the ingredients and setting state
  componentDidMount() {
    
    axios
      .get(
        'https://burgerbuilder-react-88618.firebaseio.com/orders/ingredients.json'
      )
      .then(response => {
        const ingredients = response.data;
        this.setState({ ingredients });
      })
      .catch(err => {
        //the hoc will catch the error and render the modal component??? -> i'm so lost by this point
        this.setState({ error: true });
      });
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
    this.setState({ purchaseable: ingredientTotal > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    //obtaining the count from the state
    const updatedCount = oldCount + 1;
    const ingredients = {
      //distributing old properties from state using spread
      ...this.state.ingredients
    };

    ingredients[type] = updatedCount;
    //setting that ingredient on that count
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    // this.setState({ totalPrice: newPrice, ingredients });
    this.setState(
      { ingredients, totalPrice: newPrice },
      this.updatePurchaseState
    ); //callback after updating state
  };

  removeIngredientHandler = type => {
    let oldCount = this.state.ingredients[type]; //obtaining the count from the state
    if (oldCount <= 0) {
      // can't create an array to render from negative value
      return; //quick break
    }
    const updatedCount = oldCount - 1; //increasing count
    const updatedIngredients = {
      //distributing old properties from state using map
      ...this.state.ingredients
    };

    // console.log(updatedIngredients);
    updatedIngredients[type] = updatedCount; // salad:number
    //setting that ingredient on that count
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };

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

  purchaseContinueHandler = () => {
    let ingredientsAndTotalParam = new URLSearchParams(
      this.state.ingredients 
    );//
    ingredientsAndTotalParam.set("price",this.state.totalPrice)
    let checkoutLocation = {
      hash: '#order',
      pathname: `${this.props.match.url}checkout`,
      search: `?${ingredientsAndTotalParam}`,
      ingredientsParams: `?${ingredientsAndTotalParam}`
    };
    this.props.history.push(checkoutLocation);
  };

  render() {
    const disabledInfo = {
      //copying state and creating a true or false
      ...this.state.ingredients
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
    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            //reverting
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
          />
        </React.Fragment>
      );
      orderSumary = (
        <OrderSumary
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice}
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

export default withErrorHandler(BurgerBuilder, axios); //axios is expected on the withError hoc
// Turning obj into queryStringParam: https://howchoo.com/g/nwywodhkndm/how-to-turn-an-object-into-query-string-parameters-in-javascript
//another param solution:https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
//Setting URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set || https://stackoverflow.com/questions/8737615/append-a-param-onto-the-current-url
