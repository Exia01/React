import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import { withStyles } from '@material-ui/core/styles';
import PaletteFooter from '../../components/PaletteFooter/PaletteFooter';


import styles from '../../styles/PaletteStyles';

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex',
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    // console.log(level);
    this.setState({ level });
  }

  changeFormat(value) {
    // value coming from the Navbar handleChange on the select
    this.setState({ format: value });
  }

  render() {
    // destructuring for easier use
    const { colors, palette, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    // console.log(this.props.palette.colors[300]);
    const colorBoxes = colors[level].map((color) => {
      return (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          id={color.id}
          paletteId={id}
          moreUrl={`/Palette/${id}/${color.id}`}
          // showingFullPalette will eval as true even though it is just empty
          showingFullPalette
        />
      ); //picking rgb, rgba, etc
    });
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          // Will eval to true
          showingAllColors
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter palette={palette} emoji={emoji} />
      </div>
    );
  }
}

// wrapping styles constant and passing props for styles as classes
export default withStyles(styles)(Palette);

// React slider resources: https://github.com/react-component/slider
