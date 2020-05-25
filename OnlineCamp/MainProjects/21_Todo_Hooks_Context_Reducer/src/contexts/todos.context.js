import React, { createContext, useReducer } from 'react';
import { todoReducer } from './../reducers/todo.reducer'; //imports the reducer
// todos
//all methods to interact w/todos

const defaultTodos = [
  { id: 1, task: 'Move the lawn using goeats', completed: false },
  { id: 2, task: 'Release lady bugs into garden', completed: true },
];

// separating contexts to prevent unnecessary rendering since Todos changed when passed to a props
export const TodosContext = createContext();
export const DispatchContext = createContext();

export default function TodosProvider(props) {
  //  reducer returns the todos state and dispatch func
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos); //creating reducer with todoReducer and initial todos
  return (
    //creating provider and passing value as obj to be consumed
    <TodosContext.Provider value={todos}>
      {/* wrapping inside makes it so that we only have to wrap components with one provider */}
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

// When wrapping dispatch inside the curly bracket like so {{dispatch}} it would create a new obj every time, taking out to prevent any unnecessary changes
