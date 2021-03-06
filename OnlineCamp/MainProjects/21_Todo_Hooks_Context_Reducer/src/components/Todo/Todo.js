import React, { useContext, memo } from 'react';
import { DispatchContext } from './../../contexts/todos.context';
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
function Todo({ id, task, completed }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const dispatch = useContext(DispatchContext); //pulling the dispatch func from reducer in todos context

  console.log('Todo Re-rendering', task);
  function checkBoxClickHandler() {
    dispatch({ type: 'TOGGLE_TODO', id: id });
  }
  function removeTodoClickHandler() {
    dispatch({ type: 'REMOVE_TODO', id: id });
  }

  return (
    // added height to prevent list growth while editing
    <ListItem component='div' style={{ height: '64px' }}>
      {/* using ternary could move out of this to a func */}
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggleIsEditing} />
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

export default memo(Todo); //hoc similar to pure component for classes

// List Item issue: when embedding another list style
// https://github.com/mui-org/material-ui/issues/13597
