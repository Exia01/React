import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from '../MiniPallette/MiniPalette';

import styles from '../../styles/PaletteListStyles';
import { Link } from 'react-router-dom';
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
          <div className={classes.palettes}>
            {palettes.map((palette) => {
              return (
                <MiniPalette
                  {...palette}
                  handleClick={this.goToPalette}
                  deletePalette={deletePalette}
                  key={palette.id}
                />
              );
              /* Spreading or "extracting" props in palette */
            })}
          </div>
        </div>
      </div>
    );
  }
}

// Passing styles to PaletteList
export default withStyles(styles)(PaletteList);
