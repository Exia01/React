import React, {Component} from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import {connect} from 'react-redux'

//Class based component --> might use state
class Dashboard extends Component {
  render() {
    // console.log(this.props)
    //destructuring then passing down the component as props 
    const { projects } = this.props; 
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
          <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // return which properties are attached to the props
  return {
    projects: state.project.projects //this is from root reducer
  }
}

//connect returns a higher order component(a wrapper)
export default connect(mapStateToProps) (Dashboard);
