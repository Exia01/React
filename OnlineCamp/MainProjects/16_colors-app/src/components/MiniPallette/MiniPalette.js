import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/MiniPaletteStyles'

// classes props will be passed with main included
const MiniPalette = props => {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const onClickHandler = id => {
    handleClick(props.id);
  };

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
    <div className={classes.root} onClick={onClickHandler}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

// Using as HOC, passing style obj
export default withStyles(styles)(MiniPalette);
