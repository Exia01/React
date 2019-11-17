import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
  //setup as local UI STATE
  state = {
    name: '',
    age: ''
  };
  nameChangedHandler = e => {
    this.setState({ name: e.target.value });
  };
  ageChangedHandler = e => {
    this.setState({ age: e.target.value });
  };
  submitPersonHandler = () => {
    let person = { name: this.state.name, age: this.state.age };
    this.props.personAdded(person);
  };

  render() {
    return (
      <div className='AddPerson'>
        <input
          type='text'
          name='name'
          id=' '
          placeholder='Name'
          onChange={this.nameChangedHandler}
          value={this.state.name}
        />
        <br />
        <input
          type='number'
          name='age'
          id=' '
          placeholder='Age'
          onChange={this.ageChangedHandler}
          value={this.state.age}
          min={1}
          max={99}
          step={1.5}
        />
        <br />
        <button onClick={this.submitPersonHandler}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
