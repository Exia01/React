import React from 'react';
import './Todos.css';
// import uuid from 'uuid';

/* This is a UI Component and destructuring */
const Todos = ({ todoList, deleteTodo }) => {
  /* Logic outside and using Ternary Operator */
  const todos = todoList.length ? (
    todoList.map(todo => {
      // console.log(todos)
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() =>deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );
  return <div className="todos collection">{todos}</div>;
};

export default Todos;
