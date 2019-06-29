import React from 'react';
//single component being reused
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

//destructuring directly and grabbing project directly from the props
const ProjectList = ({projects}) => {
  //using conditional truthy to render if projects and passing props
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList;
