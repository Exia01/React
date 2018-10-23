import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

import Ninjas from './components/NinjasComponent/Ninjas';
import AddNinja from './components/addNinjaComponent/addNinja';
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
      { name: 'Jose', age: 28, language: 'Spanish', id: 1 },
      { name: 'Jasmine', age: 17, language: 'English', id: 2 },
      { name: 'Heather', age: 19, language: 'English', id: 3 },
      { name: 'Nelson', age: 35, language: 'French', id: 4 },
      { name: 'Ricky', age: 29, language: 'German', id: 5 }
    ]
  };
  /* Takes in the new ninja from 'AddNinja' Submit */
  addNinja = (person) => {
    /* we recieve the object and assign it an id */
    person.id = uuid.v4();
    console.log(person);
    /* Creating a new array  based on the old one using spread operator */
    let ninjaList = [...this.state.ninjas, person];
    console.log('Working');
    this.setState({
      ninjas: ninjaList
    });
  };

  /* Creating a delete option, takes an id. We then pass it onto the app */
  deleteNinja = (id) => {
    /* No splice: When using React, you should never mutate the state directly. If an object (or Array, which is an object too) is changed, you should create a new copy. */
      let people = this.state.ninjas.filter(person => {
         /* if the ninja does not have the id then i will keep it */
          return person.id !== id
      })

      this.setState({
          ninjas:people
      })
  };

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <Ninjas people={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
