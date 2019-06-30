import React from 'react'
//Enables active class for the links
import {NavLink} from 'react-router-dom'
//connect to redux
import {connect} from 'react-redux'
//action creator 
import {signOut} from '../../store/actions/authActions'

//functional component takes in props
const SignedInLinks = (props) => {
  //associating the onclick event to the a-tag directly 
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}
//adding the property to the props
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

//there is no mapstatetoprops to props so passing null
export default connect(null, mapDispatchToProps)(SignedInLinks)

