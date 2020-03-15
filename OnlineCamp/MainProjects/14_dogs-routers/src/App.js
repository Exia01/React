import React from 'react';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';

import whiskey from '../src/imgs/whiskey.jpg'
import hazel from '../src/imgs/hazel.jpg'
import tubby from '../src/imgs/tubby.jpg'
import { Switch, Route } from 'react-router-dom';
import DogList from './containers/DogList/DogList';
import Dog from './components/Dog';

function App() {
  const defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  return (
    <div className="App">
      <Navbar dogs={defaultProps.dogs} />
      <Switch>
        <Route exact path='/' render={routeProps => <DogList {...routeProps} dogs={defaultProps.dogs} />} />
        <Route
          exact
          path='/dog/:name'
          render={routeProps => <Dog {...routeProps} dogs={defaultProps.dogs} />}
        />
        <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} />
      </Switch>
    </div>
  );
}

export default App;


// https://tylermcginnis.com/react-router-pass-props-to-link/ 