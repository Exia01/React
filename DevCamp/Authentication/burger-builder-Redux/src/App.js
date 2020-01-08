import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

// import './index.css'

import { connect } from 'react-redux';
import { authCheckState } from './store/actions';

export class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        ((
        <Route path='/auth' component={Auth} />
        ), (<Route path='/' exact component={BurgerBuilder} />
        ),
        <Redirect to='/' />
        );
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={Checkout} />,
          <Route exact path='/orders' component={Orders} />,
          <Route path='/logout' component={Logout} />,
          <Route path='/' exact component={BurgerBuilder} />,
          <Route path='/auth' component={Auth} />
          <Redirect to='/' />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); //helps passed the props down '''withRouter'''

// NOTE: Only BurgerBuilder itself gets the props not the nested component
//REact Router:https://www.freecodecamp.org/news/a-guide-to-upgrading-to-react-router-4/
//importing components: https://stackoverflow.com/questions/44865904/mapdispatchtoprops-not-working-props-empty-error-redux-action-is-not-a-functi
