import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  // state is a class property that
  //can implement from class based component
  state = {
    persons: [
      {name: "Max", age: "28"},
      {name: "Manu", age: "23"},
      {name: "Melanie", age: "17"}
    ],
    otherState: "Some otherValue",
    showPersons: false,
  }
  switchNameHandler = (newName) => { //class method, standard to use "handler at the end"
    // //DON'T DO THIS: this.state.persons[0].name = "test"
    this.setState({
      persons: [
        {name: newName, age: "28"},
        {name: "Manu", age: "23"},
        {name: "Melanie", age: "17"}
      ]
    })
  }
  nameChangedHandler = (e) => {
    e.preventDefault()
    this.setState({
      persons: [
        {name: 'Max', age: "28"},
        {name: e.target.value, age: "23"},
        {name: "Melanie", age: "17"}
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    //inverting value if true. React will merge the rest of the components
    this.setState({showPersons: !doesShow})
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState)
    // console.log(this.state)

  }
  render() {
    //inline style can be difficult for actions --> "hover" and can also help with scoping 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    //using ternary operator
    return (
      <div className="App">
        <h1>Hello There</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              clickEvent={this.switchNameHandler.bind(this, "Yoshi")}
              changed={this.nameChangedHandler}
            > My Hobbies:Racing </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
        </div> : null
        }
      </div>
    )
  }
}


export default App;
