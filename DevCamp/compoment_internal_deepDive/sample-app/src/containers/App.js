import React, { Component } from 'react';
// import {BrowserRouter, Link, Route} from 'react-router-dom';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//container component shouldn't be involved with UI too much. Should be lean
class App extends Component {
  // state is a class property that
  //can implement from class based component
  state = {
    persons: [
      { id: 1, name: 'Max', age: '28' },
      { id: 2, name: 'Manu', age: '23' },
      { id: '23', name: 'Melanie', age: '17' }
    ],
    otherState: 'Some otherValue',
    showPersons: false
  };

  nameChangedHandler = (e, id) => {
    //event and id
    e.preventDefault();
    //find the element on the array and obtain the id
    const personIndex = this.state.persons.findIndex(p => {
      //just like map will cycle through
      //person id
      return p.id === id;
    });
    const person = {
      // create a new js obj and using spread operator // could use object.assign
      ...this.state.persons[personIndex]
    };
    person.name = e.target.value; //getting value
    const persons = [...this.state.persons]; //spread operator to copy the state
    persons[personIndex] = person; // update the value on the array

    this.setState({ persons: persons }); //can pass pass object persons for simplicity
  };

  deletePersonHandler = personIndex => {
    //fetch all persons
    const persons = this.state.persons.slice(); //without args returns a whole copy
    // const persons = [...this.state.persons]//spreads the state into a new arr/
    //changing pointer since it is a const
    persons.splice(personIndex, 1); // returns the copy without that index removed
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //inverting value if true. React will merge the rest of the components
    this.setState({ showPersons: !doesShow });
  };
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState)
    // console.log(this.state)
  }
  render() {
    //default which checks every time the state renders or updates.
    let persons = null;

    //check if true
    if (this.state.showPersons) {
      // if the statement is true and will render
      //mapping with index and passing the arg to the anonymous func
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
//CSS modules: https://programmingwithmosh.com/react/css-modules-react/
//https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
//https://github.com/css-modules/css-modules
