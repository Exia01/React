import React, { Component, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
// import Orders from './containers/Orders/Orders';
// import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

// import './index.css'

import { connect } from 'react-redux';
import { authCheckState } from './store/actions';
import Spinner from './components/UI/Spinner/Spinner';

const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));

export class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    const { isAuthenticated } = this.props;
    let routes;
    routes = (
      <Layout>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            {isAuthenticated && <Route path='/logout' component={Logout} />}
            <Route path='/auth' component={Auth} />
            {isAuthenticated && <Route path='/checkout' component={Checkout} />}
            {isAuthenticated && <Route path='/orders' component={Orders} />}
            <Route path='/' exact component={BurgerBuilder} />
            <Redirect to='/' />
          </Switch>
        </React.Suspense>
      </Layout>
    );
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

// Using React Lazy:https://stackoverflow.com/questions/56576022/react-lazy-components-not-loaded-on-dynamic-routes

// Documentation:https://reacttraining.com/react-router/web/api/Switch

/* Another way of doing routes: let orderRoute;
    let orderComponent = <Route exact path='/orders' component={Orders} />;
    orderRoute =
      this.props.location.pathname === '/Orders' ? orderComponent : null;

    let routes = (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/auth' component={Auth} />,
          <Route path='/' exact component={BurgerBuilder} />,
          <Redirect to='/' />,
        </Switch>
      </Suspense>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path='/checkout' component={Checkout} />,
            <Route path='/logout' component={Logout} />,
            <Route path='/' exact component={BurgerBuilder} />,
            <Route path='/auth' component={Auth} />,{orderRoute}
            <Redirect to='/' />
          </Switch>
        </Suspense>
      );
    }

    */
