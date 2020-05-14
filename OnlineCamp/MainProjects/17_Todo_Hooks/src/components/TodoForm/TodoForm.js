import React from 'react';
import useInputState from '../../hooks/useInputState';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

//destructuring props
function TodoForm({ addTodo }) {
  // reusing hook from the inputState custom component
  const [value, handleChange, reset] = useInputState('');

  function submitFormHandler(e) {
    e.preventDefault();
    addTodo(value);
    reset();
  }
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={submitFormHandler}>
        {/* Styled input */}
        <TextField
          // takes in props
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth //will make the textfield  go all the way across
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
