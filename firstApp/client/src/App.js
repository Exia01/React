import React, { Component } from 'react';
import './App.css';

import Ninja from './components/NinjaComponent/Ninja';
/* This app component is connected to the index.js
On the render return, we can only have one "div returning"
However, we can still embed divs inside of it.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <Ninja name="John" age="25" belt="Black"/>
        <Ninja name="Jose" age="27" belt="Red"/>
      </div>
    );
  }
}

export default App;
