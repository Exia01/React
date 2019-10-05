import React, { Component, Suspense } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'Angular - The Complete Guide' },
      { id: 2, title: 'Vue - The Complete Guide' },
      { id: 3, title: 'PWA - The Complete Guide' }
    ]
  };
  // shouldComponentUpdate(nextProps, nextState, nextContext){
  //   console.log('ShouldComponentUpdate');
  //   console.log(this.props.location.pathname !== nextProps.location.pathname);
  //   // console.log(this.props);
  //   // console.log(nextProps);
  //   return this.props.location.pathname !== nextProps.location.pathname

  // }
  
  loadFullPostHandler = course => {
    let location = {
      hash: '#Get',
      pathname: `/Courses/${course.id}`,
      search: `?lookup-course=true&courseTitle=${course.title}`,
      courseTitle:`?course-title=${course.title}`,
      ReviewSort: '?marked=helpful'

    };
    // this.props.history.push(`/posts/${id`)
    this.props.history.push(location);
  };
  
  render() {
    console.log(this.props);
    let articles = this.state.courses.map(course => {
      return (
        <article
          className="Course"
          onClick={() => this.loadFullPostHandler(course)}
          key={course.id}
        >
          <h4>{course.title}</h4>
        </article>
      );
    });
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">{articles}</section>
        <Suspense fallback={<div>Loading...</div>}>
          <Route
            path={`${this.props.match.url}/:id`}
            component={Course}
          />
        </Suspense>
      </div>
    );
  }
}

export default Courses;
