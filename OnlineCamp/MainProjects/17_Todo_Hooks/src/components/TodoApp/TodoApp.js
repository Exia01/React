import React, { useEffect } from 'react';

import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

import useTodoState from '../../hooks/useTodoState';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
  // Pull from localStorage or create empty arr
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  // // todo: id, task, completed

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper
      // creates a background or whole color in the background
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      {/* material ui */}
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>

      {/* sets the container like bootstrap centering */}
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        {/* sets the screen breaks */}
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;

// --TodoApp
//  --TodoForm
//  --TodoList
//   --TodoList
