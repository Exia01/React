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
    otherState:"Some otherValue"
  }
  switchNameHandler = (e) => { //class method, standard to use "handler at the end"
    console.log(e)
    e.preventDefault()
    // //DON'T DO THIS: this.state.persons[0].name = "test"
    this.setState({ persons: [
      {name: "Kyle", age: "28"},
      {name: "Kevin", age: "26"},
      {name: "Melanie", age: "17"}
    ] })
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Hello There</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
