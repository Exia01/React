import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

// <li><a className="this.props.active" href="{props.link}">{props.children}</a></li>

//using the classes active which inherits from the a tag?
const NavigationItem = props => {
  let getNavLinkClass = path => {
    return this.props.location.pathname === path
      ? 'nav-item active'
      : 'nav-item';
  };
  let navLinkTag = null;

  //because of the way the navlink interprets the active route the to path needs to be specified because of the prefixing --> add exact as workaround 
  return (
    <li className={`${classes.NavigationItem}`}>
      <NavLink to={props.link} activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
};
export default NavigationItem;

// Only one active at a time:https://stackoverflow.com/questions/42980858/react-router-v4-setting-activeclass-on-parent/54573453#54573453
