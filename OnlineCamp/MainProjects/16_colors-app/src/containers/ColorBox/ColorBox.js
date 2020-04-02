import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

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
    const { background, name, id, paletteId, moreUrl, showLink } = this.props;
    // When copied is true, add show call with short circuit
    const { copied } = this.state;
    // creating a luminance range to change text
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() <= 0.7;
    // changing font to white
    const fontColor = isDarkColor && 'light-text';
    return (
      // using HOC, could be wrapped on bottom only
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className='ColorBox'>
          {/* When using scale, it will not only grow the div but the content/text as well. Separating the div is best */}
          <div
            className={`copy-overlay ${copied && 'show'}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p className={`${isDarkColor && 'light-text'}`}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={fontColor}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark-text'}`}>
              Copy
            </button>
          </div>
          {/* Short circuit eval */}
          {showLink && (
            <Link to={moreUrl} onClick={this.evtPropagation}>
              <span className={`see-more ${isLightColor && 'dark-text'}`}>
                {' '}
                MORE
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;

// function rendering on evt https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js
