import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() { 
    let todoItems;
    if(this.props.todos){ // this is a property
        todoItems = this.props.todos.map(todo=> {
            return(
                <TodoItem  key={todo.title} todo={todo}/>
            )
        });
    }
    return (
      <div className="Todos">
        <h1>Latest Todos</h1>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
    todo:PropTypes.array
}
export default Todos;
