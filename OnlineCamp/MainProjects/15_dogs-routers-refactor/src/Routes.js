import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


// Separating into its own Component. Makes it easier to manage generates component
class Routes extends Component {
  render() {
    // func 
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
        // finding dog with params
      );
      // Return component with props that god passed in
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <Switch>
        <Route
          exact
          path='/dogs'
          render={() => <DogList dogs={this.props.dogs} />}
        />
        {/* Executes the func */}
        <Route exact path='/dogs/:name' render={getDog} />
        <Redirect to='/dogs' />
      </Switch>
    );
  }
}
export default Routes;
