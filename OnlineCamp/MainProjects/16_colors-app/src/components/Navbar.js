import React from 'react';

// Slider and css
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

//imported after to override the previous on index css
import './Navbar.css';

const Navbar = props => {
  const { level, changeLevel } = props;
  return (
    <header className='Navbar'>
      <div className='logo'>
        <a href='#'>React-Color-Picker</a>
      </div>
      {/* min, max, val props with out of box func OnAfterChange  */}
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
    </header>
  );
};

export default Navbar;
