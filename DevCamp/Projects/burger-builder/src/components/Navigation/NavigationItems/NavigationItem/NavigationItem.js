import React from 'react';
import classes from './NavigationItem.module.css';

// <li><a className="this.props.active" href="{props.link}">{props.children}</a></li>

const NavigationItem = props => (
  <li className={classes.NavigationItem}>
    <a className={props.active ? classes.active : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
