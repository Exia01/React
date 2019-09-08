// Typically this would the used as a wrapper around the core component we want to render to the screen

import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary'; // using aux as a wrapper for the adjacent tags || can React Fragment.

import classes from './Layout.module.css'; //module css
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

// though it has a class and could be defined as a container, it wraps the burger builder in app and can classify as hoc
//setting class component to handle one click for side drawer
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    //since using set state we need to use prev state
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
