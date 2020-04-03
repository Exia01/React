import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';

import './ColorBox.css';

const styles = {
  ColorBox: {
    width: '20%',
    // // if we're showing the full palette, meaning all  colors  set to 25%
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    // this add the 'Hover' action the the button within the Colorbox class, its okay since it is only one button
    '&:hover button': {
      opacity: 1
    }
  },
  copyText: {
    color: props =>
      // creating a luminance range to change text, could also move to a func
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
    // c
  },
  seeMore: {
    color: props =>
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
    textTransform: 'uppercase'
  },
  copyButton: {
    // Checking if it is a light color ternary
    color: props =>
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
    opacity: 0
  }
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
    return function(e) {
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
      classes
    } = this.props;
    // When copied is true, add show call with short circuit
    const { copied } = this.state;

    return (
      // using HOC, could be wrapped on bottom only
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          {/* When using scale, it will not only grow the div but the content/text as well. Separating the div is best */}
          <div
            className={`copy-overlay ${copied && 'show'}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
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
