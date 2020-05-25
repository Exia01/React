import React, { useContext } from 'react'; //useContext enables use of context
import useInputState from '../../hooks/useInputState';
//since we have wrapped the provider around the apps we can import the context to consume the provider
import {DispatchContext} from './../../contexts/todos.context';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

//destructuring props
function TodoForm() {
  // reusing hook from the inputState custom component
  const [value, handleChange, reset] = useInputState('');

  const dispatch = useContext(DispatchContext); //consuming provider with hook(uses the reducer ) and only provides the Dispatch func

  function submitFormHandler(e) {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', task: value }); //dispatching an action to reducer, could import from action types?
    reset();
  }
  // Values of context is changing so it re-renders the components when adding todos
  console.log('TodoForm Rendering'); //whenever a value changes in context the component re-renders

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
