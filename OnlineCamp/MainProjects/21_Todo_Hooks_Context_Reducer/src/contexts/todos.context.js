import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState';
import { todoReducer } from './../reducers/todo.reducer'; //imports the reducer
// todos
//all methods to interact w/todos

const defaultTodos = [
  { id: 1, task: 'Move the lawn using goeats', completed: false },
  { id: 2, task: 'Release lady bugs into garden', completed: true },
];

export const TodosContext = createContext();

export default function TodosProvider(props) {
  //  reducer returns the todos state and dispatch func
  const [todosObj, dispatch] = useReducer(todoReducer, defaultTodos) //creating reducer with todoReducer and initial todos
  return (
    //creating provider and passing value as obj to be consumed
    <TodosContext.Provider value={{ todos: todosObj, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
