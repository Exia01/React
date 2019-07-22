import React, {Component} from 'react';
import classes from './App.module.css'; // css module
// import {BrowserRouter, Link, Route} from 'react-router-dom';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withWrapper from '../hoc/withWrapped'; //lowercase since it is Functional Component
import Aux from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context' //being used as a component

//container component shouldn't be involved with UI too much. Should be lean
class App extends Component {
  constructor(props) {
    //first life cycle that executes
    super(props); // when declaring a constructor, need to pass super to initialize properly
    console.log('[App.js] constructor');
    // could also declare state here but not needed
  }
  // state is a class property that
  //can implement from class based component
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 23},
      {id: '23', name: 'Melanie', age: 17}
    ],
    otherState: 'Some otherValue',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,

  };

  // after constructor runs this life cycle follows
  //need to add static to execute properly
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }


  //after getDerivedStateFromProps render gets executed
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  } //after render componentDidMount runs


  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] shouldComponentUpdate')
    return true // have to return either true or false. We can even compare props to determine that
  }


  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

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

    //we can either initialize a variable and pass in increase num or use the prev state and increase it to set the new state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  };

  deletePersonHandler = personIndex => {
    //fetch all persons
    const persons = this.state.persons.slice(); //without args returns a whole copy
    // const persons = [...this.state.persons]//spreads the state into a new arr/
    //changing pointer since it is a const
    persons.splice(personIndex, 1); // returns the copy without that index removed
    this.setState({persons: persons});
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //inverting value if true. React will merge the rest of the components
    this.setState({showPersons: !doesShow});
  };
  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] render');
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
          isAuthenticated={this.state.authenticated}
        />
      );
    }
    //props coming from index.js
    //passing length to cockpit to better optimize the conditional for updating 
    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit Component</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withWrapper(App, classes.App); //wrapping app and passing in the classes from app
//CSS modules: https://programmingwithmosh.com/react/css-modules-react/
//https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
//https://github.com/css-modules/css-modules
//component lifeCycle : https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
