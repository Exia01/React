import React, { Component } from 'react';
//Used as a function to return an HOC connects the component
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

//importing constant actions
import { ADD_PERSON, REMOVE_PERSON } from '../store/constants/PersonActionType';
//importing actions
import { ADD_HANDLER, REMOVE_HANDLER } from '../store/actions/PersonAction';

class Persons extends Component {
  //local state
  state = {
    //local properties can go here
  };

  personAddedHandler = () => {
    let newPerson = {
      id: 1, // not really unique but good enough here!
      name: 'Yoshi',
      age: Math.floor(Math.random() * 40)
    };
    let test = ADD_HANDLER(newPerson);
    // console.log(test);
    this.props.onAddPerson(ADD_HANDLER());
  };

  personDeletedHandler = id => {
    this.props.onRemovePerson(id)
  };

  render() {
    const personTagComponent = null;
    return (
      <div>
        <AddPerson personAdded={this.personAddedHandler} />
        {this.props.persons.map(person => (
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

const mapStateToProps = state => {
  console.log('Mapping Props to State:', state);
  return {
    persons: state.prsn.persons
  };
};

//Enables dispatching to redux
const mapDispatchToProps = (dispatch, func) => {
  return {
    onAddPerson: obj => dispatch(obj),
    onRemovePerson: id => dispatch({ type: REMOVE_PERSON, payload: { id } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
