import React, { Component } from 'react';

// Slider and css
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

//imported after to override the previous on index css
import './Navbar.css';

// Material ui imports
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
    console.log(e.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>React-Color-Picker</a>
        </div>
        {/* min, max, val this.props with out of box func OnAfterChange  */}
        <div className='slider-container'>
          <span>Level:{level}</span>
          <div className='slider'>
            {/* Tradeoff is overriding the style of library */}
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              step={100}
            />
          </div>
        </div>
        <div className='select-container'>
          {/* Out of the box built in css and javascript imports up top separate */}

          <Select
            labelId=''
            id=''
            value={format}
            onChange={this.handleChange}
          >
            <MenuItem value='hex'> HEX - #ffff</MenuItem>
            <MenuItem value='rgb'> RGB - rgb(255, 2555, 255, 255)</MenuItem>
            <MenuItem value='rgba'>
              {' '}
              RGBA - rgba(255, 2555, 255, 255, 1.0)
            </MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
