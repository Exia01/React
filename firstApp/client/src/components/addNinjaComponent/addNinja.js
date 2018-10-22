/* This is a containerComponent since it stores a State */
import React, { Component } from 'react';


class AddNinja extends Component {
  state = {
    name: '',
    age: '',
    language: ''
  };
  /* This metho is handling all changes in the form */
  handleChange = e => {
    this.setState({
      /* THis is targeting the id of each form */
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
      /* We have access to the method because we passed it down in app.js We then pass the 'object' */
      this.props.addNinja(this.state)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input type="text" id="name" onChange={this.handleChange} />
          Age:
          <input type="text" id="age" onChange={this.handleChange} />
          Language:
          <input type="text" id="language" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;