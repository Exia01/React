import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';


// import './index.css'

export class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route patch='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

// NOTE: Only BurgerBuilder itself gets the props not the nested component
