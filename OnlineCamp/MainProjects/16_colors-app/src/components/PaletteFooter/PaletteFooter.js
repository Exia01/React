import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/PaletteFooterStyles';
const PaletteFooter = (props) => {
  const { palette, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {palette}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};

export default withStyles(styles)(PaletteFooter);
