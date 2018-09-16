import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: 'Ryu',
    age: '30'
  }

  submit(e) {
    e.preventDefault()
  }

 /*  The state is scoped and has no access to the handle submit function. 
  We bind it to the state by using the arrow function wich gives us acess to the state */
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', this.state);
    this.form = ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  /* this is bingding the date to the 'this.State' 
  we use this we we are want to bind the state to it */
  handleClick=(e)=> {
    this.setState({
      name:'Yoshi'
    })
    console.log(this.state)

  }
  handleMouseOver(e) {
    console.log(e.target, e.pageX) //logs the location of the mouse
  }
  handleCopy(e) {
    console.log('Try being original for once! ;]')
  }
  render() {
    return (
      <div className="App">
        <div className="app-content">
          <h1>Hello Ninjas</h1>
          <p>My name is: {this.state.name}</p>
          <p>I am: { this.state.age }</p>
          <button onClick={this.handleClick}>Click me</button>
          <br />
          <button onMouseOver={this.handleMouseOver}>Hover me</button>
          <br />
          <br />
          <p onCopy={this.handleCopy}>What we think, we become</p>

          <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>

        </div >
      </div>
    );
  }
}

export default App;
