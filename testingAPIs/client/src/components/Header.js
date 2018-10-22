import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

// this is our root componet
class Header extends Component {
  componentDidMount() {
    console.log(window.location.pathname);
  }

  render() {
    return (
      <div className="Header">
        <Link to="/">Home</Link> ||
        <Link to="/about">About</Link> ||
        <Link to="/contact">Contact</Link> ||
        <Link to="/donate">Donate</Link>
      </div>
    );
  }
}

export default Header;
