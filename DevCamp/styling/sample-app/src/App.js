import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Radium, {StyleRoot} from "radium"
import './App.css';
import Person from './Person/Person';


class App extends Component {
  // state is a class property that
  //can implement from class based component
  state = {
    persons: [
      {id: 1, name: "Max", age: "28"},
      {id: 2, name: "Manu", age: "23"},
      {id: '23', name: "Melanie", age: "17"}
    ],
    otherState: "Some otherValue",
    showPersons: false,
  }


  nameChangedHandler = (e, id) => {//event and id
    e.preventDefault()
    //find the element on the array and obtain the id
    const personIndex = this.state.persons.findIndex(p => {
      //just like map will cycle through
      //person id
      return p.id === id
    })
    const person = { // create a new js obj and using spread operator // could use object.assign
      ...this.state.persons[personIndex]
    }
    person.name = e.target.value //getting value
    const persons = [...this.state.persons] //spread operator to copy the state
    persons[personIndex] = person// update the value on the array

    this.setState({persons: persons})
  }


  deletePersonHandler = (personIndex) => {
    console.log('hello?');

    //fetch all persons
    const persons = this.state.persons.slice()//without args returns a whole copy
    // const persons = [...this.state.persons]//spreads the state into a new arr/
    //changing pointer since it is a const
    persons.splice(personIndex, 1) // returns the copy without that index removed
    this.setState({persons: persons})

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
      backgroundColor: 'green',
      color: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      //setting property as string due to colon
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    //default which checks every time the state renders or updates. 
    let persons = null
    //check if true
    if (this.state.showPersons) {
      // if the statement is true and will render
      //mapping with index and passing the arg to the anonymous func
      persons = (
        <div>
          {this.state.persons.map((individual, index) => {
            return <Person
              clickEvent={() => this.deletePersonHandler(index)}
              name={individual.name}
              age={individual.age}
              changed={(event) => this.nameChangedHandler(event, individual.id)}
              key={individual.id} />
          })}
        </div>
      )
      style.backgroundColor = "red"
      //changing on hover to red
      style[':hover'] = { //radium enables on hover
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    //creating css styling to match app.css on if condition then joining
    const classes = []
    //if 2 persons or less
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold")// classes = ["red", "bold"]
    }

    //StyleRoot enables media queries when placed inside div
    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(" ")}>Hello There</h1>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    )
  }
}


export default Radium(App)
