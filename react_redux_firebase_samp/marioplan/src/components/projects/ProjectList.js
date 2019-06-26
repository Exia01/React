import React from 'react';
//single component being reused
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;