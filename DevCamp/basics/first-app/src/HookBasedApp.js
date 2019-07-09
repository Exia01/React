import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {
  //useState is the most important hook, allows to manipulate stat in a functional component
  //allways return two elements --> state and function to update the state
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Max", age: "28"},
      {name: "Manu", age: "23"},
      {name: "Melanie", age: "17"}
    ]
  })
  const[otherState, setOtherState] = useState('Some other value')
  console.log(personsState,otherState)
  const switchNameHandler = () => { 
     //when using react hooks, function set does not merge what you pass to with the old state it replaces it. 
    setPersonsState({
      persons: [
        {name: "Kyle", age: "28"},
        {name: "Kevin", age: "26"},
        {name: "Melanie", age: "17"}
      ]
    })
  }
  return (
    <div className="App">
      <div>
        <h1>Hello There</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}  />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    </div>
  )
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

  // // state is a class property that
  // //can implement from class based component
  // state = {
  //   persons: [
  //     {name: "Max", age: "28"},
  //     {name: "Manu", age: "23"},
  //     {name: "Melanie", age: "17"}
  //   ], 
  //   otherState:"Some otherValue"
  // }
  // switchNameHandler = (e) => { //class method, standard to use "handler at the end"
  //   console.log(e)
  //   e.preventDefault()
  //   // //DON'T DO THIS: this.state.persons[0].name = "test"
  //   this.setState({ persons: [
  //     {name: "Kyle", age: "28"},
  //     {name: "Kevin", age: "26"},
  //     {name: "Melanie", age: "17"}
  //   ] })
  // }