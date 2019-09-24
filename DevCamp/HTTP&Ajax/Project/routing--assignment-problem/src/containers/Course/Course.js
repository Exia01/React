import React, { Component } from 'react';
//URLSearchParams is not supported by older browsers

import queryString from 'query-string'


class Course extends Component { 
    
    fetchCourseData=(paramsSearchTerm)=>{

    }
  render() {
    let { id } = this.props.match.params;
    let params = new URLSearchParams(this.props.location.courseTitle)
    let courseTitle = params.get('course-title')
    console.log(courseTitle);

    //both return an obj 
    const values = queryString.parse(this.props.location.search, null)
    console.log(values)
    let courseTitleUrlSearchParams = values.courseTitle

   
    return (
      <div>
        <h1>Course Title: {courseTitleUrlSearchParams}</h1>
        <p>You selected the Course with ID: {id}</p>
      </div>
    );
  }
}

export default Course;
