import React from 'react';
import Todo from '../Todo/Todo';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  // Destructuring props
  if (todos.length)
    //simple if statement, don't show show anything if no length
    return (
      <Paper>
        {/* paper gives it the effect */}
        <List>
          {todos.map((todo, i) => (
            // To add a key to a fragment, we have to use the long-hand version
            // rather than <> </>, we have to use <React.Fragment>
            <React.Fragment key={i}>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {/* using index. If we're on the the last item don't add the divider */}
              {i < todos.length - 1 && <Divider />}
              {/* using short circuit of and and  */}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
