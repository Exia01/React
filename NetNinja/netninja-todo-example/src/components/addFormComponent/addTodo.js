/* This is a class based containerComponent since it stores a State */
import React, { Component } from 'react';

/* We automatically get the props in classbased components */
class AddTodo extends Component {
    /* Create the content, add id and true later */
    state = {
        content:''
    }
    /* Add the form value to the content */
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    //binding it with the arrow function
    handleSubmit = (e) => {
        e.preventDefault()
        /* Calling the todo Props from apps */
        this.props.addTodo(this.state)
        /* Here we reset the state then reset the form */
        this.setState({
            content:''
        })
       /* we can reset like this too -->  e.target.reset() */
    }
    render() {
      return (
        <div>
              <form onSubmit={this.handleSubmit}>
                  Add new todo:
                  <input type="text" onChange={this.handleChange} value={this.state.content}/>
              </form>
        </div>
      )
    };
}

export default AddTodo 