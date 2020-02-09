import React, { Component } from 'react';

class IconList extends Component {
  static defaultProps = {
    options: [
      'angry',
      'anchor',
      'archive',
      'at',
      'archway',
      'baby',
      'bell',
      'bolt',
      'bone',
      'car',
      'city',
      'cloud',
      'couch'
    ]
  };
  constructor(props) {
    super(props);
    this.state = { icons: ['bone', 'cloud'] };
    this.addIcon = this.addIcon.bind(this);
  }
  // addIcon() {
  /*UNSAFE APPROACH*/
  //   let idx = Math.floor(Math.random() * this.props.options.length);
  //   let newIcon = this.props.options[idx];
  //   let icons = this.state.icons;
  //   icons.push(newIcon);  /* MUTATES */
  //   this.setState({ icons: icons });
  // }

  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    console.log([...this.state.icons, newIcon]);
    this.setState({ icons: [...this.state.icons, newIcon] }); ///copying first layer and adding new icon
  }
  render() {
    const icons = this.state.icons.map(i => (
      <i className={`fas fa-${i}`} key={Math.random()} />
    ));
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconList;
