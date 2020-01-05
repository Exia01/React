import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

// import './index.css'

export class App extends Component {
  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path='/orders' component={Orders} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/auth' component={Auth} />
            <Route path='/logout' component={Logout} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

// NOTE: Only BurgerBuilder itself gets the props not the nested component
//REact Router:https://www.freecodecamp.org/news/a-guide-to-upgrading-to-react-router-4/
//importing components: https://stackoverflow.com/questions/44865904/mapdispatchtoprops-not-working-props-empty-error-redux-action-is-not-a-functi