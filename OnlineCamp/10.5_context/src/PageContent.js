import React, { Component } from 'react';
//importing context
import { ThemeContext } from './contexts/ThemeContext';

//returns div which wraps the rest oft the page content
export default class PageContent extends Component {
  static contextType = ThemeContext; //finding the theme context with the wrapping
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? 'black' : 'white',
      height: '100vh',
      width: '100vw',
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

/*<PageContent>
  <Navbar></Navbar>
</PageContent> */
