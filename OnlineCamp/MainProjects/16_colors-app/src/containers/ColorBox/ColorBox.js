import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../styles/ColoBoxStyles';

// This container does not have access to route props since it is being generated and rendered inside the Pallete.js
export class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
    this.evtPropagation = this.evtPropagation(this);
  }

  changeCopyState() {
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
    // In case curious about the styles import
    // console.log(styles);

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

// wraps the styles import as props under classes obj
export default withStyles(styles)(ColorBox);

// function rendering on evt https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js
