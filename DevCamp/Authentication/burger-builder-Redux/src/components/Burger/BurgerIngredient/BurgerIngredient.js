import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

//class but state is not being managed.
class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    //using ingredients switchcase
    // console.log("this.props", this.props)
    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case 'bread-top':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={classes.Meat} />;
        break;
      case 'cheese':
        ingredient = <div className={classes.Cheese} />;
        break;
      case 'bacon':
        ingredient = <div className={classes.Bacon} />;
        break;
      case 'salad':
        ingredient = <div className={classes.Salad} />;
        break;
      default:
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired //strings for prop types and required
};

export default BurgerIngredient;
