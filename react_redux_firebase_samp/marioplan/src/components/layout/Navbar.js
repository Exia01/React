import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
// functional component passing props
const Navbar = props => {
  const { auth, profile } = props
  // console.log(auth);
  // this will be true if id property exists show the component otherwise signout links and store it
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  )
}
//takes in the entire state but only attaching auth
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth, //attaching auth property to props
    profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
