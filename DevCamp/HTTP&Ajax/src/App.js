import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// react-router-dom  is required for web development. It wraps react-router  and therefore uses it as a dependency. 
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
