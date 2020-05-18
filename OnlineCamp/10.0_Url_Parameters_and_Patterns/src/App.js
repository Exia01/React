import React, { Component } from "react";
import Food from "./Food";
import Meal from "./Meal";
import Navbar from "./Navbar";
import FoodSearch from "./FoodSearch";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* THIS VERSION USING COMPONENT WORKS AND IS SIMPLER */}
        {/* BUT IT WILL NOT WORK IF YOU NEED TO PASS ADDITIONAL PROPS*/}
        {/* <Route exact path='/food/:name' scomponent={Food} /> */}

        {/* THIS VERSION USING RENDER IS LESS CLEAN BUT MORE EXPLICIT */}
        {/* AND YOU CAN PASS IN YOUR OWN ADDITIONAL PROPS */}
        <Navbar />
        <Switch>
          <Route
            exact
            /*Colon indicates url parameter that is just food and name*/
            path='/food/:name'
            /*routeprops could be named anything props are being spread and passed individually*/
            render={routeProps => <Food {...routeProps}  isAuthenticated="true"/>}
          />
          <Route
            exact
            // Exact is looking for all the combination of parameters
            path='/food/:foodName/drink/:drinkName'
            props={{test:true}} 
            // if trying to add additional props then use render props with obj will not pass
            component={Meal}
          />
          {/* <Route
            exact
            path='/'
            render={routeProps => <FoodSearch {...routeProps}/>}
          /> */}
          {/* below wont work when needing to pass props */}
          <Route exact path='/' component={FoodSearch} />
          {/* Order matters on switch so this would be the catch all  */}
          <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
