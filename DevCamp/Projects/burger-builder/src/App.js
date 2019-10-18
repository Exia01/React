import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';

// import './index.css'

export class App extends Component {
  render() {
    
    return (
      <div>
        <Layout>
          <Switch>
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/checkout' component={Checkout} />
          <Route  path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

// NOTE: Only BurgerBuilder itself gets the props not the nested component
//REact Router:https://www.freecodecamp.org/news/a-guide-to-upgrading-to-react-router-4/