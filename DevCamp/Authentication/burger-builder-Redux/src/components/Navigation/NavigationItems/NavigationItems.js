import React from 'react';
import classes from './NaviagationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
//passing boolean props layout
const NavigationItems = props => {
  let LoginOrLogoutTag = (
    <NavigationItem link='/auth'>Authenticate</NavigationItem>
  );
  if (props.isAuthenticated) {
    LoginOrLogoutTag = <NavigationItem link='/logout'>Logout</NavigationItem>;
  }

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link='/Orders'>Orders</NavigationItem>
      {LoginOrLogoutTag}
    </ul>
  );
};
export default NavigationItems;
