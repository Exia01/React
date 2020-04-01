import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../../components/PaletteFooter/PaletteFooter';
import { Link } from 'react-router-dom';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    //shades never changes, adding to instance to class itself?
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    //being explicit so passing params
    this.state = {
      format: 'hex'
    };
    this.changeFormat = this.changeFormat.bind(this);
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

  changeFormat(value) {
    // value coming from the Navbar handleChange on the select
    this.setState({ format: value });
  }

  render() {
    const { format } = this.state;
    const { emoji, palette, id } = this.props.palette;
    // Reusing the ColorBox Component since it only renders props
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        // addresses the colorbox link
        showLink={false}
      />
    ));
    return (
      <div>
        <div className='SingleColorPalette Palette'>
          {/* handle change will bubble up and change the state false hides the slider toggle */}
          <Navbar handleChange={this.changeFormat} showingAllColors={false} />
          <div className='Palette-colors'>
            {colorBoxes}
            <div className='go-back ColorBox'>
              <Link className='back-button' to={`/palette/${id}`}>
                {' '}
                Go Back
              </Link>
            </div>
          </div>
          <PaletteFooter palette={palette} emoji={emoji} />
        </div>
      </div>
    );
  }
}
export default SingleColorPalette;
