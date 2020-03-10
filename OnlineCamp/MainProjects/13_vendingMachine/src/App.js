import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";


import Navbar from "./components/Navbar/Navbar";
import Sardines from "./components/Sardines/Sardines";
import Soda from "./components/Soda/Soda";
import Chips from "./containers/Chips/Chips";
import VendingMachine from "./containers/VendingMachine/VendingMachine";

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*since  we want it to be permanently on top */}
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/soda' render={() => <Soda />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/chips' render={() => <Chips />} />
        </Switch>
      </div>
    );
  }
}

export default App;
