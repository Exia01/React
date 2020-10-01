import React, {Component} from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import {connect} from 'react-redux'
//being used as a higher order component
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'

//Class based component --> might use state
class Dashboard extends Component {
  render() {
    // console.log(this.props)
    //destructuring then passing down the component as props 
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />  //if there is not a user id

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    projects: state.firestore.ordered.projects, //loading from db
    auth: state.firebase.auth, // grabbing auth from state
    notifications: state.firestore.ordered.notifications //ordered property
  }
}

//multiple wrappers 
export default compose(
  connect(mapStateToProps),
  firestoreConnect([// this will connect with the reducer to update and passing the in array
    { collection: 'projects', orderBy:['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy:['time', 'desc']} //behind the scenes the firestore reducer will handle the attaching
  ])
)(Dashboard)

// firestoreConnect takes in an object, which specifies what collection wer're connecting to