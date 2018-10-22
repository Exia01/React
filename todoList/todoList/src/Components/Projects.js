import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
    deleteProject(id){ // this is a property
        this.props.onDelete(id);
    }
   
  render() { 
    let projectItems;
    if(this.props.projects){ // this is a property
        projectItems = this.props.projects.map(project=> {
            // console.log(project);
            return(
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
            )
        });
    }
    return (
      <div className="Projects">
        <h1>Latest Projects</h1>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
    projects:PropTypes.array,
    onDelete:PropTypes.func}
export default Projects;
