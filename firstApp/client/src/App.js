import React, { Component } from 'react';
import './App.css';

import Ninjas from './components/NinjasComponent/Ninjas';
/* This app component is connected to the index.js
On the render return, we can only have one "div returning"
However, we can still embed divs inside of it.
*/

class App extends Component {
    /* We create a state */
    state = {
        /* Creating a dictionary that will be passed in the 'Props'
         * We pass the ninjas from the apps down to the ninjas js
         * */
        ninjas: [
            {name: 'Jose', age: 28, language: 'Spanish', id:1},
            {name: 'Jasmine', age: 17, language: 'English', id:2},
            {name: 'Heather', age: 19, language: 'English', id:3},
            {name: 'Nelson', age: 35, language: 'French', id:4},
            {name: 'Ricky', age: 29, language: 'German', id:5},
        ]
    }
    render() {
        return (
            <div className="App">
                <h1>My First React App</h1>
                <Ninjas people={this.state.ninjas}/>
            </div>
        );
    }
}

export default App;
