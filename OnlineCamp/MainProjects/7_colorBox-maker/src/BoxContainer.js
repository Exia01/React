import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Box from './Box';
import Form from './Form';

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxItems: [
        { height: '100', width: '100', backgroundColor: 'red', id: uuid() }
      ]
    };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(colorBoxObj) {
    let newBoxItem = { ...colorBoxObj, id: uuid() };
    this.setState(state => ({
      boxItems: [...state.boxItems, newBoxItem]
    }));
  }
  removeBox(id) {
    let newBoxItemsArr = this.state.boxItems.filter(box => {
      return box.id !== id;
    });
    this.setState({ boxItems: newBoxItemsArr });
  }

  renderBoxes() {
    let boxTags;
    boxTags = this.state.boxItems.map(box => {
      return <Box boxPropsObj={box} key={box.id} removeBox={this.removeBox} />;
    });
    return boxTags;
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='title'>Boxes</h1>
        {this.renderBoxes()}

        <h3 className='title'> Add Box</h3>
        <Form addBox={this.addBox} />
      </React.Fragment>
    );
  }
}

export default BoxContainer;
