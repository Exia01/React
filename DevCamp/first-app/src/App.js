import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';



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
    inputValue: "test@value.com",
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
  inputValueSubmitHandler = (obj) => {
    this.setState({inputValue: obj})
    console.log(this.props);
    
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
    console.log(this.state)

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
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Route exact path='/' render={props =>
              <div>
                <h1>Hello There</h1>
                <button style={style} onClick={() => this.switchNameHandler("Josh")}>Switch Name</button>
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
                <div className="test-links">
                  <Link to="/input">Input</Link><br />
                  <Link to="/output">Output</Link>
                </div>
              </div>
            } />
            <Route
              path='/input'
              render={(props) => <UserInput {...props} inputValueSubmitHandler={this.inputValueSubmitHandler} currentEmail={this.state.inputValue} />}
            />
            <Route path="/output" component={UserInput} />
          </BrowserRouter>
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
