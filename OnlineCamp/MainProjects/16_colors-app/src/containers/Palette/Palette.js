import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';

import './Palette.css';
import PaletteFooter from '../../components/PaletteFooter/PaletteFooter';
export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
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
    const { level, format } = this.state;
    // console.log(this.props.palette.colors[300]);
    const colorBoxes = colors[level].map(color => {
      return (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          id={color.id}
          paletteId={id}
          moreUrl={`/Palette/${id}/${color.id}`}
          // showlink will eval as true even though it is just empty
          showLink
        />
      ); //picking rgb, rgba, etc
    });
    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          // Will eval to true
          showingAllColors
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter palette={palette} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;

// React slider resources: https://github.com/react-component/slider
