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
    backgroundColor: '#dae1e4',
    height:"150px", 
    width:"100%", 
    borderRadius: '5px',
    // This hides the corners from the colors to abide by the border radius
    overflow:"hidden",
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
  },
  miniColor: {
    // 25% of parent
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  }
};
// classes props will be passed with main included
const MiniPalette = props => {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => {
    return (
      <div
        className={classes.miniColor}
        style={{ background: color.color }}
        key={color.name}
      ></div>
    );
  });
  // console.log([props]);

  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

// Using as HOC, passing style obj
export default withStyles(styles)(MiniPalette);
