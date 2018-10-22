import React, { Component } from 'react';
import './App.css';

import Ninjas from './components/NinjasComponent/Ninjas';
/* This app component is connected to the index.js
On the render return, we can only have one "div returning"
However, we can still embed divs inside of it.
*/

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>My First React App</h1>
                <Ninjas name="John" age="25" belt="Black" />
                <hr />
                <Ninjas name="Jose" age="27" belt="Red" />
            </div>
        );
    }
}

export default App;
