import React, { Component, Fragment } from 'react'; //using fragment instead of auxiliary hoc
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
      meat: 0,
    },
    totalPrice: 1
  };

  addIngredientHandler = type => {
    let oldCount = this.state.ingredients[type]; //obtaining the count from the state
    const updatedCount = (oldCount += 1); //increasing count
    const updatedIngredients = {
      //distributing old properties from state using map
      ...this.state.ingredients
    };

    console.log(updatedIngredients);
    updatedIngredients[type] = updatedCount;
    //setting that ingredient on that count
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
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
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
