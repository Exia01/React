import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../../components/PaletteFooter/PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  // Reusing some of the "Colorbox" components so technically we are duplicating code but global classes are discourage in jss javscript css code
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "black",
    // Targetting the a tags inside the go back class exclusively
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none"
    }
  }
};


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
    const { classes } = this.props
    // Reusing the ColorBox Component since it only renders props
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        // addresses the colorbox link
        showingFullPalette={false}
      />
    ));
    return (
      <div>
        <div className={classes.Palette}>
          {/* handle change will bubble up and change the state false hides the slider toggle */}
          <Navbar handleChange={this.changeFormat} showingAllColors={false} />
          <div className={classes.colors}>
            {colorBoxes}
            <div className={classes.goBack}>
              <Link className to={`/palette/${id}`}>
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
export default withStyles(styles)(SingleColorPalette);
