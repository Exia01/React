import React, { Component } from 'react';
//URLSearchParams is not supported by older browsers

import queryString from 'query-string';

class Course extends Component {
  //could turn into component
  state = {
    id: null,
    courseTitle: null
  };
  fetchCourseData = paramsSearchTerm => {
    console.log('[Props on Course.js] ' + this.props.location);
    let { id } = this.props.match.params; // destructuring
    let params = new URLSearchParams(this.props.location.courseTitle);
    let courseTitle = params.get('course-title');
    console.log(courseTitle);
    if(this.state.id !== id & this.state.courseTitle !== courseTitle){
      this.setState({ id:id, courseTitle: courseTitle });
    }
    return


    //both return an obj
    // const values = queryString.parse(this.props.location.search, null);
    // console.log(values);
    // let courseTitleUrlSearchParams = values.courseTitle;
  };
  componentDidMount() {
    this.fetchCourseData();
  }
  componentDidUpdate(prevProps, prevState) {
    this.fetchCourseData();
  }
  render() {
    //not sure if setting below is optimized for performance but it works?
    {
      /*console.log("[Props on Course.js] " + this.props.location)
    let { id } = this.props.match.params; // destructuring 
    let params = new URLSearchParams(this.props.location.courseTitle)
    let courseTitle = params.get('course-title')
    console.log(courseTitle);

    //both return an obj  
    const values = queryString.parse(this.props.location.search, null)
    console.log(values)
  let courseTitleUrlSearchParams = values.courseTitle */
    }

    //could also set as state
    return (
      <div>
        <h1>Course Title: {this.state.courseTitle}</h1>
        <p>You selected the Course with ID: {this.state.id}</p>
      </div>
    );
  }
}

export default Course;

//How to use query strings: https://tylermcginnis.com/react-router-query-strings/
