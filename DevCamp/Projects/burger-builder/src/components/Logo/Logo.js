import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
//importing logo as component and referencing dynamically. Webpack will then optimize code
import classes from './Logo.module.css';


const Logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);
export default Logo;
