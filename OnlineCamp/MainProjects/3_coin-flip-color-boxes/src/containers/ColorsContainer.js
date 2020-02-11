import React, { Component } from 'react';

import { selectColor, newUniqueColorGenerator } from '../helper';
import Color from '../components/Color';

class ColorsContainer extends Component {
  static defaultProps = {
    colors: [
      '#B4BAD4',
      '#957DAD',
      '#FF756D',
      '#ff66ff',
      '#FFDFD3',
      '#8FBC8F',
      '#CD5C5C',
      '#E1CEC9',
      '#2e5cb8',
      '#1f3d7a',
      '#193366',
      '#FF6961',
      '#D4CFBD',
      'pink',
      'lightblue'
    ]
  };
  constructor(props) {
    super(props);
    this.state = { colorsObjs: null };
    this.onColorBoxClickedHandler = this.onColorBoxClickedHandler.bind(this);
  }

  componentDidMount() {
    let colorsArr;
    colorsArr = this.props.colors.map(e => {
      return selectColor(this.props.colors);
    });
    this.setState({ colorsObjs: colorsArr });
  }

  onColorBoxClickedHandler(e) {
    const oldColor = e.target.style.backgroundColor;
    const currentId = e.target.id;
    let newColor = newUniqueColorGenerator(this.props.colors, oldColor);

    let newColorsObj = [...this.state.colorsObjs];
    const foundIndex = newColorsObj.findIndex(obj => obj.id === currentId);

    newColorsObj[foundIndex].color = newColor;
    this.setState(newColorsObj);
  }

  render() {
    let colorBblocks;
    if (this.state.colorsObjs) {
      colorBblocks = this.state.colorsObjs.map(el => {
        return (
          <Color
            colorObj={el || null}
            key={el.id}
            colorClickedHandler={this.onColorBoxClickedHandler}
          />
        );
      });
    }
    return (
      <div className='color-container'>
        {this.state.colorsObjs && colorBblocks}
      </div>
    );
  }
}

export default ColorsContainer;

// https://stackoverflow.com/questions/35206125/javascript-es6-es5-find-in-array-and-change
