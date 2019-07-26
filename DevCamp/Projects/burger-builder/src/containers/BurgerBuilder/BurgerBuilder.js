import React, { Component, Fragment } from 'react'; //using fragment instead of auxiliary hoc
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSumary from '../../components/Burger/OrderSummary/OrderSumary';

//Global constant (shouldnt it be let since it might be changed?)
const INGREDIENT_PRICES = {
  salad: 0.75,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.75
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 1,
    purchaseable: false,
    purchasing: false
  };

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
      return; //quick break
    }
    const updatedCount = oldCount - 1; //increasing count
    const updatedIngredients = {
      //distributing old properties from state using map
      ...this.state.ingredients
    };

    // console.log(updatedIngredients);
    updatedIngredients[type] = updatedCount;
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
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
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
    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSumary ingredients={this.state.ingredients} />
        </Modal>
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
      </Fragment>
    );
  }
}

export default BurgerBuilder;
