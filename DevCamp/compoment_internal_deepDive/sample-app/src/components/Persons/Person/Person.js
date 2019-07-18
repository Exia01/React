import React, { Component } from 'react';
import personClass from './Person.module.css'; // css module

class Person extends Component {
  render() {
    console.log('[Person.js] Rendering...... ');
    // console.log(this.props);
    return (
      <div className={personClass.Person}>
        <p onClick={this.props.clickEvent}>
          My name is {this.props.name} and i am {this.props.age} years old
        </p>
        <p className="">{this.props.id}</p>
        <p>{this.props.children}</p>
        <input
          value={this.props.name}
          type="text"
          onChange={this.props.changed}
        />
      </div>
    );
  }
}

export default Person;
