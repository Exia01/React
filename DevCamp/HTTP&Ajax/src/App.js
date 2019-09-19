import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// react-router-dom  is required for web development. It wraps react-router  and therefore uses it as a dependency.
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      //enabling routing on the part of the app that needs routing
      //setting basename to any domain that is being served
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
