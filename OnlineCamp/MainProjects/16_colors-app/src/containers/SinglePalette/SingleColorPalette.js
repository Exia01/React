import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    //shades never changes, adding to instance to class itself?
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    //being explicit so passing params
  }

  //could move to utils files
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      // {100:[], 200:[]}
      //looping through all the objs
      // console.log(allColors[key]);
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
      //making an array of colors that contain all the shades
    }
    //return all shades of given color except for the first one. It is just white
    return shades.slice(1);
  }
  render() {
    // Reusing the ColorBox Component since it only renders props
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        // addresses the colorbox link
        showLink={false}
      />
    ));
    return (
      <div>
        <div className='Palette'>
          <h1>Single Color Palette</h1>
          <div className='Palette-colors'>{colorBoxes}</div>
        </div>
      </div>
    );
  }
}
export default SingleColorPalette;
