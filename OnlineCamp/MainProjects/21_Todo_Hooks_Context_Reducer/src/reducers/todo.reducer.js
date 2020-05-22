import { v4 as uuidv4 } from 'uuid';

export const todoReducer = (state, action) => {
  //takes in action
  switch (action.type) {
    //could import the action types instead of typing the cases
    case 'ADD_TODO':
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};
