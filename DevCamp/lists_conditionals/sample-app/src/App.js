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

  deletePersonHandler = (personIndex)=>{
    console.log('hello?');
    
    //fetch all persons
    const persons = this.state.persons
    //changing pointer since it is a const
    persons.splice(personIndex, 1) // returns the copy without that index removed
    this.setState({persons:persons})

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
              age={individual.age} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hello There</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}


export default App;
