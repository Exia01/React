import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// defining a css obj
const styles = {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    // specifying hover
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: 'grey'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  }
};
// classes props will be passed with main included
const MiniPalette = props => {
  const { classes, paletteName, emoji } = props;

  // console.log([props]);

  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

// Using as HOC, passing style obj
export default withStyles(styles)(MiniPalette);
