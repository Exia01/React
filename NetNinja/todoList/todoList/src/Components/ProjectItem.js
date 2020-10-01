import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id) {
    // console.log('test');
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong> -{' '}
        {this.props.project.category} - {this.props.project.id}{' '}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          <button>Delete</button>
        </a>
      </li>
    );
  }
}
ProjectItem.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
};

export default ProjectItem;
