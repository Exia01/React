import React, { Component, Fragment } from 'react';
import personClass from './Person.module.css'; // css module
import Aux from '../../../hoc/Auxiliary'; //empty hoc wrapper that is using the children --> opening and closing tags
import withClass from '../../../hoc/WithClass';

class Person extends Component {
  render() {
    console.log('[Person.js] Rendering...... ');
    // console.log(this.props);
    return (
      <Aux>
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
      </Aux>
    );
  }
}

export default withClass(Person);
