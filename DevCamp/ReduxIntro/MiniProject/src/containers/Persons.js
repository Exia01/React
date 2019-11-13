import React, { Component } from 'react';
//Used as a function to return an HOC connects the component
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

//importing constant actions
import { ADD_PERSON, REMOVE_PERSON } from '../store/constants/PersonActionType';


class Persons extends Component {
  //local state
  state = {
    age: [],
    persons: []
  };

  personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: 'Yoshi',
      age: Math.floor(Math.random() * 40)
    };
    this.setState(prevState => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };

  personDeletedHandler = personId => {
    this.setState(prevState => {
      return {
        persons: prevState.persons.filter(person => person.id !== personId)
      };
    });
  };

  render() {
    const personTagComponent = null;
    return (
      <div>
        <AddPerson personAdded={this.personAddedHandler} />
        {this.state.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.personDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

export default Persons;
