import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// importing hoc that will pass with styles as classes
import { SortableElement } from 'react-sortable-hoc';

import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../../styles/DraggableColorBoxStyles';

// converting element into SortableElement
const DraggableColorBox = SortableElement((props) => {
  const { classes, name, onDeleteClickHandler, color } = props;

  const handleClick = () => {
    onDeleteClickHandler(name);
  };
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        {' '}
        <span> {name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
