import React from 'react';
import EditTodoForm from '../EditTodoForm/EditTodoForm';

import useToggleState from '../../hooks/useToggleState';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

//destructuring props
function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);

  function checkBoxClickHandler() {
    toggleTodo(id);
  }
  function removeTodoClickHandler() {
    removeTodo(id);
  }

  return (
    // added height to prevent list growth while editing
    <ListItem style={{ height: '64px' }}>
      {/* using ternary could move out of this to a func */}
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggleIsEditing}
        />
      ) : (
        // Can also use React.Fragment or just Fragment instead of empty carats <> </>
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={checkBoxClickHandler}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={removeTodoClickHandler}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
