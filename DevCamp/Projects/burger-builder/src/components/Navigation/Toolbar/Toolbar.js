import React from 'react';
import classes from './Toolbar.module.css'; //strings dynamically generated strings
import Logo from '../../Logo/Logo';


const toolbar = () => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo/>
    <nav className="">...</nav>
  </header>
);

export default toolbar;
