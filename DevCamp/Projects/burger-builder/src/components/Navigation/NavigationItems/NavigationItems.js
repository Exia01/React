import React from 'react';
import classes from './NaviagationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
//passing boolean props in active
const NavigationItems = () => (
  
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/Checkout">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
