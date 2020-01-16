import React from 'react';
import classes from './NaviagationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
//passing boolean props in active
const NavigationItems = () => (
  //adding exact to route as fix
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/Orders'>Orders</NavigationItem>
  </ul>
);

export default NavigationItems;
