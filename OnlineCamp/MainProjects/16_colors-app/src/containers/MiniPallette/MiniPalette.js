import React, { PureComponent } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(id) {
    this.props.handleClick(this.props.id);
  };

  deletePalette(e) {
    e.stopPropagation(); //will stop the bubbling event and prevent the navigation to another page
    this.props.openDialog(this.props.id)
  }


  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniColorBoxes = colors.map((color) => {
      console.log(paletteName)
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
      <div className={classes.root} onClick={this.onClickHandler}>
        <DeleteIcon
          className={classes.deleteICon}
          style={{ transition: 'all 0.3s linear' }}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);

// switched to class component
// The problem is that the function doSomething() is re-defined every time the component renders.  When a functional component is rendered, all the code inside of it is run which means we would be creating a bunch of new functions when we only really need one per component.  With a class based component, this isn't an issue. When a class component renders, only the render() method is called. So while it would work to define deletePalette inside of a functional component, it wouldn't be the most efficient way. Does that make sense?
