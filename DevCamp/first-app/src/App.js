import React, {Component} from 'react';
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
    otherState: "Some otherValue"
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
  render() {
    return (
      <div className="App">
        <div>
          <h1>Hello There</h1>
          <button onClick={() => this.switchNameHandler("Josh")}>Switch Name</button>
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
        </div>
      </div>
    )
  }
}
//   render() {
//     return (
//       <div className="App">
//         {this.state.persons.map(person => {
//           return (
//             <div>
//               <h1>Hello There</h1>
//               <Person name={person.name} />
//               <button onClick={this.switchNameHandler}>Switch Name</button>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

export default App;
