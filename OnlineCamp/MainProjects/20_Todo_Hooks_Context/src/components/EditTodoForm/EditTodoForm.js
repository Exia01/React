import React from 'react';
import useInputState from '../../hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task); //reusing the hook
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
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
