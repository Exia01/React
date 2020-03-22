import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

import './Palette.css';
// Slider and css
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    // console.log(level);
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    console.log(this.props.palette.colors[300]);
    const colorBoxes = colors[level].map(color => {
      return <ColorBox background={color.hex} name={color.name} />;
    });
    return (
      <div className='Palette'>
        {/* min, max, val props with out of box func OnAfterChange  */}
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          onAfterChange={this.changeLevel}
          step={100}
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
