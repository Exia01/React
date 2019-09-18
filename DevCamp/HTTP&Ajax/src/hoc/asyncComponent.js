import React, { Component } from 'react';

const asyncComponent = importComponent => {
  //passing a function?
  return class extends Component {
    //creating a normal react component
    state = {
      component: null //this prop will dynamically be set when the cmp mounts
    };

    componentDidMount() {

      //function, will return a promise
      importComponent().then(component => {
        //   this is the argument from the component we load dynamically
        this.setState({ component: component.default });
      });
    }

    render() {
      //short for component
      const C = this.state.component;
      // checking if a component has been passed
      let dynamicComponent = null;
      dynamicComponent = C ? (dynamicComponent = <C {...this.props} />) : null;
      return dynamicComponent;
    }
  };
};

export default asyncComponent;
