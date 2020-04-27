import React from 'react';
// importing hoc that will pass with styles as classes
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    width: '20%',
    // // if we're showing the full palette, meaning all  colors  set to 25%
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    // this add the 'Hover' action to the svg icon inside the root div,
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.2)',
    },
  },
  boxContent: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  deleteIcon: {
    transition: 'all 0.4s ease-in-out',
  },
};

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