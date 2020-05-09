import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
// 3rd party library to handle transitions
import MiniPalette from '../MiniPallette/MiniPalette';
import styles from '../../styles/PaletteListStyles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToPalette = this.goToPalette.bind(this);
  }
  
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  
  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>

          {/* wrapper */}
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => {
              return (
                // can pass multiple classes to this trasitions via the classNames
                <CSSTransition
                  key={palette.paletteName}
                  timeout={500}
                  classNames='fade'
                >
                  <MiniPalette
                    {...palette}
                    handleClick={this.goToPalette}
                    deletePalette={deletePalette}
                    key={palette.id}
                  />
                </CSSTransition>
              );
              /* Spreading or "extracting" props in palette */
            })}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

// Passing styles to PaletteList
export default withStyles(styles)(PaletteList);
