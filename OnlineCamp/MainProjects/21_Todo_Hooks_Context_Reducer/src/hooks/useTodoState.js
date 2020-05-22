import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos); //using custom hook instead of useState

  // returns a series of objs that be extracted
  return {
    todos,
    addTodo: (newTodoText) => {
      //shallow copy with spread and update that one task obj
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },

    removeTodo: (todoId) => {
      //filter out removed todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      //call setTodos with new todos array
      setTodos(updatedTodos);
    },

    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        //loop through with map, find by id and update the property
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },

    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        // could use find? looping through with map and updating with id if found
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
