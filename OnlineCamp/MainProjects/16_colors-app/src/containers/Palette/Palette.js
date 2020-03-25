import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../../components/Navbar';

import './Palette.css';
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
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    console.log(this.props.palette.colors[300]);
    const colorBoxes = colors[level].map(color => {
      return <ColorBox background={color[format]} name={color.name} />; //picking rgb, rgba, etc
    });
    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;

// React slider resources: https://github.com/react-component/slider
