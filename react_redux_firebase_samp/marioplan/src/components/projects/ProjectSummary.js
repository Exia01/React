import React from 'react'
//using package moment js 
import moment from 'moment'

//receiving an individual project
const ProjectSummary = ({project}) => {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{project.title}</span>
          <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    )
  }
export default ProjectSummary
