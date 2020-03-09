import React from 'react';
import './App.css';
import VendingMachine from './containers/VendingMachine';
import { Switch, Route } from 'react-router-dom';



import Soda from './components/Soda';
import FreshSardines from './components/FreshSardines';
import Chips from './containers/Chips';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={VendingMachine} />
        <Route exact path='/Chips' component={Chips} />
        {/*  could pass props and or just do component if not*/}
        <Route exact path='/Soda' render={() => <Soda />} />
        <Route exact path='/FreshSardines' render={() => <FreshSardines />} />
      </Switch>
    </div>
  );
}

export default App;
