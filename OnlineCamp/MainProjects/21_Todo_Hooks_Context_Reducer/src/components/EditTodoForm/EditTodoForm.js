import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/todos.context';
import useInputState from '../../hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const { dispatch } = useContext(TodosContext)
  const [value, handleChange, reset] = useInputState(task); //reusing the hook

  // Values of context is changing so it re-renders the components 
  console.log('Edit TodoForm rendering');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'EDIT_TODO', id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '50%' }} // fixes look the overrides fullWidth prop
    >
      <TextField
        // Margin is the material ui prop, same with fullWidth and autoFocus
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        // material ui props
        autoFocus

      />
    </form>
  );
}
export default EditTodoForm;
