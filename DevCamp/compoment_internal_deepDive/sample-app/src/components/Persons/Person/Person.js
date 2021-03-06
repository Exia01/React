import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css'; // css module
import Aux from '../../../hoc/Auxiliary'; //empty hoc wrapper that is using the children --> opening and closing tags
import withClass from '../../../hoc/withWrapped';
import AuthContext from '../../../context/auth-context' //import context to consume


class Person extends Component {
  constructor(props) {
    super(props)//if adding constructor add super and pass props
    this.inputElementRef = React.createRef()//creating a reference pointer
  }
  // static property means it can be accessed from the outside without the need to instantiate the obj first
  static contextType = AuthContext //this allows react to connect to context
  componentDidMount() {
    //class property, class based component
    // this.inputElement.focus()// initializing input element in the input ref
    this.inputElementRef.current.focus() //the current element stored in this reference has a focus property
    console.log(this.context.authenticated)
    console.log(this.context)
  }
  //ref--> references. Any element, this can be added and it is a property
  render() {
    // console.log(this)
    console.log('[Person.js] Rendering...... ');
    // console.log(this.props);
    // consuming context which enables app to pass the props directly to this component
    return (
      <Aux>
          {this.context.authenticated ? <p>Authenticated! </p> : <p>Please log in!</p>}
        <p onClick={this.props.clickEvent}>
          My name is {this.props.name} and i am {this.props.age} years old
        </p>
        <p className="">{this.props.id}</p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          value={this.props.name}
          type="text"
          onChange={this.props.changed}
        />
      </Aux>
    );
  }
}
// Adding extra property can either be lowercase or uppercase depending on component
//this will use in development mode and give warning if you pass the incorrect type or prop it will then throw a warning
Person.propTypes = {
  click: PropTypes.func, //click expects get the pointer to a function
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  id: PropTypes.number,

};

export default withClass(Person, classes.Person);//passing the person from classes
