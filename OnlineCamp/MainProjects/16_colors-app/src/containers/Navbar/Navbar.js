import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material ui imports
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
// Slider and css
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

//imported after to override the previous on index css
// import './Navbar.css';
import styles from '../../styles/NavbarStyles'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
    console.log(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, showingAllColors, classes } = this.props;
    const { format } = this.state;

    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to='/'>React-Color-Picker</Link>
        </div>
        {showingAllColors && (
          <div>
            {/* min, max, val this.props with out of box func OnAfterChange  */}
            <span>Level:{level}</span>
            <div className={classes.slider}>
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
        )}
        <div className={classes.selectContainer}>
          {/* Out of the box built in css and javascript imports up top separate */}


          <Select
            labelId=''
            id=''
            value={format}
            onChange={this.handleFormatChange}
          >
            <MenuItem value='hex'> HEX - #ffff</MenuItem>
            <MenuItem value='rgb'> RGB - rgb(255, 2555, 255, 255)</MenuItem>
            <MenuItem value='rgba'>
              {' '}
              RGBA - rgba(255, 2555, 255, 255, 1.0)
            </MenuItem>
          </Select>
        </div>

        {/* Material component and passing addition props to operate */}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id='message-id'>
              Format Changed To {format.toUpperCase()}!
            </span>
          }
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close '
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
