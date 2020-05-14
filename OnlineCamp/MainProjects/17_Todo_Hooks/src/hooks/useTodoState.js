import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  // returns a series of objs that be extracted
  return {
    todos,
    addTodo: newTodoText => {
      //shallow copy with spread and update that one task obj
      setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
    },

    removeTodo: todoId => {
      //filter out removed todo
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      //call setTodos with new todos array
      setTodos(updatedTodos);
    },

    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },

    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        // could use find? looping through with map and updating with id if found
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    }
  };
};
