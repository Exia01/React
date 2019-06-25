import React from 'react'
//Enables active class for the links
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1 waves-effect waves-light">NN</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks
