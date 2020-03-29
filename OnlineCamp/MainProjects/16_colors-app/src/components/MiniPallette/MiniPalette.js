import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// defining a css obj
const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
    
    // This will only apply to the h1 inside the main class
    "& h1":{
      color:'grey'
    }
  },
  secondary: {
    backgroundColor: 'Pink'
  }
};
// classes props will be passed with main included
const MiniPalette = props => {
  const { classes } = props;
  console.log([props]);

  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
    </div>
  );
};

// Using as HOC, passing style obj
export default withStyles(styles)(MiniPalette);
