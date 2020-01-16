import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
//importing logo as component and referencing dynamically. Webpack will then optimize code
import classes from './Logo.module.css';


const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
      <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;