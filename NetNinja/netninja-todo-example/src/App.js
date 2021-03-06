import React, { Component } from 'react';
import './App.css';
import Todos from './components/TodoComponent/Todos';
import AddTodo from './components/addFormComponent/addTodo';
import uuid from 'uuid';

/* This is a container component */
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy milk', active: true},
      {id: 2, content: 'Test', active: true}
    ]
  };

  /* Delete item from todos */
  deleteTodo = (id) => {
    /* Two ways of doing this  */
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    /* Since key and value is named the same, es6 allows for the same name ---I think---*/
    this.setState({
      todos
    })

    // this.setState(prevState => ({
    //   todos: prevState.todos.filter(todo => {
    //     return todo.id !== id
    //   })}))

  };

  addTodo = (item) => {
    item.id = uuid.v4()
    item.active = true
    console.log(item)
    /* create a new array or 'Tree' , add item */
    let todos = [...this.state.todos, item]
    this.setState({
      todos
    })

    
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todoList={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
