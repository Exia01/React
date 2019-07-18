import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  //   static getDerivedStateFromProps(props, state = { hello: 'Hello World!' }) {
  //       console.log('[Persons.js] getDerivedStateFromProps....', props, state);
  //       //need to have a return even if it is empty
  //       return state
  //     }
  //after getDerivedStateFromProps shouldComponentUpdate will run

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[Persons.js] shouldComponentUpdate...');
    // have to return or false whether it should update
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate..');
    return { message: 'Snapshot!!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //will run after render method
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] Rendering...... ');
    return this.props.persons.map((individual, index) => {
      //using property naming for this.props functions
      return (
        <Person
          clickEvent={() => this.props.clicked(index)}
          name={individual.name}
          age={individual.age}
          changed={event => this.props.changed(event, individual.id)}
          key={individual.id}
        />
      );
    });
  }
}

export default Persons;
