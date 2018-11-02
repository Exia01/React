import React from 'react';

/* NavLink adds an active class, adding a higher order component */
import { NavLink, withRouter, Link } from 'react-router-dom';
/* Passing props from appjs */
const Navbar = (props) => {
  // console.log(props)
  /*  setTimeout(() => {
        props.history.push('/about')
    },2000) */
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
      
        <Link to={'/'} className="brand-logo">Poke'Times</Link>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

/* Encapsulates the compoment into another component */
export default withRouter(Navbar);
