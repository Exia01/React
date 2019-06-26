import React from 'react';
//single component being reused
import ProjectSummary from './ProjectSummary';

//destructuring directly and grabbing project directly from the props
const ProjectList = ({projects}) => {
  //using conditional truthy to render if projects and passing props
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

export default ProjectList;
