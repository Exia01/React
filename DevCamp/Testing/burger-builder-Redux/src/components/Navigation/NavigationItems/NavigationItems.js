import React from 'react';
import classes from './NaviagationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
//passing boolean props layout
const NavigationItems = props => {
  let LoginOrLogoutTag = (
    <NavigationItem link='/auth'>Authenticate</NavigationItem>
  );
  let ordersItem = null;
  if (props.isAuthenticated) {
    LoginOrLogoutTag = <NavigationItem link='/logout'>Logout</NavigationItem>;
    ordersItem = <NavigationItem link='/Orders'>Orders</NavigationItem>;
  }

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>
        Burger Builder
      </NavigationItem>
      {ordersItem}
      {LoginOrLogoutTag}
    </ul>
  );
};
export default NavigationItems;
