import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';
// todos
//all methods to interact w/todos

const defaultTodos = [
  { id: 1, task: 'Move the lawn using goeats', completed: false },
  { id: 2, task: 'Release lady bugs into garden', completed: true },
];

export const TodosContext = createContext();

export default function TodosProvider(props) {
  // utilizing custom hook which returns obj(can be de-structured)
  const todosObj = useTodoState(defaultTodos); //initial todos. injected into the hook

  return (
    //creating provider and passing value as obj to be consumed
    <TodosContext.Provider value={todosObj}>
      {props.children}
    </TodosContext.Provider>
  );
}
