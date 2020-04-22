import React from 'react';
// importing hoc that will pass with styles as classes

import { withStyles } from '@material-ui/core/styles';
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
    // this add the 'Hover' action
  },
};
const DraggableColorBox = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.color}
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
