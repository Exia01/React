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
  const [isEditing, toggle] = useToggleState(false);

  function checkBoxClickHandler() {
    toggleTodo(id);
  }
  function removeTodoClickHandler() {
    removeTodo(id);
  }

  return (
    <ListItem style={{ height: '64px' }}>
      {/* could move out of this to a func */}
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
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
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
