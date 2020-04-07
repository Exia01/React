import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';

// import './ColorBox.css';

const styles = {
  ColorBox: {
    width: '20%',
    // // if we're showing the full palette, meaning all  colors  set to 25%
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    // this add the 'Hover' action the the button within the Colorbox class, its okay since it is only one button
    '&:hover button': {
      opacity: 1,
    },
  },
  copyText: {
    color: (props) =>
      // creating a luminance range to change text, could also move to a func
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
    // c
  },
  seeMore: {
    color: (props) =>
      // checking if it is a light color
      chroma(props.background).luminance() >= 0.07
        ? 'rgba(0,0,0,0.6)'
        : 'white',
    background: ' rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },
  copyButton: {
    // Checking if it is a light color ternary
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: 0,
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    // Targeting h1 inside copyMessage class
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
    },
    // Targetting all P tags inside copyMessage
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
    },
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
};

// This container does not have access to route props since it is being generated and rendered inside the Pallete.js
export class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
    this.evtPropagation = this.evtPropagation(this);
  }

  changeCopyState() {
    console.log('test');

    //using state with callback, runs timeout reset
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }
  // will need to stop the copied animation
  evtPropagation(e) {
    // returning function to prevent eval from react
    return function (e) {
      e.stopPropagation();
    };
  }

  render() {
    const {
      background,
      name,
      id,
      paletteId,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    // When copied is true, add show call with short circuit
    const { copied } = this.state;

    return (
      // using HOC, could be wrapped on bottom only
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          {/* When using scale, it will not only grow the div but the content/text as well. Separating the div is best */}
          <div
            className={`${classes.copyOverlay} ${
              copied && classes.showOverlay
            }`}
            style={{ background }}
          />
          <div
            className={`${classes.copyMessage} ${
              copied && classes.showMessage
            }`}
          >
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {/* Short circuit eval */}
          {showingFullPalette && (
            <Link to={moreUrl} onClick={this.evtPropagation}>
              <span className={classes.seeMore}> MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

// wrappes the styles as props under classes obj
export default withStyles(styles)(ColorBox);

// function rendering on evt https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js
