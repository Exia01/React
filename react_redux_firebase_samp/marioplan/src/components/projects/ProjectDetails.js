import React from 'react'
//import connect and redux state
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
//props coming from the router
const ProjectDetails = (props) => {
  const { project } = props;  //destructuring
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}
//functions defines what we want to attach to our props
const mapStateToProps = (state, ownProps) => {
    // console.log(state); 
    const id = ownProps.match.params.id;// getting the props from component as ownProps
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null // if project find id
    return {
      project: project
    }
  }

export default compose( //compose the higher order components
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'projects' // specifying which base we're using
    }])
  )(ProjectDetails)
  