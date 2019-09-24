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
        <ol style={{ textAlign: 'left' }}>
          <li>
            Make the courses in "Courses" clickable by adding a link and load
            the "Course" component in the place of "Courses" (without passing
            any data for now)
          </li>
          <li>Pass the course ID to the "Course" page and output it there</li>
          <li>
            Pass the course title to the "Course" page - pass it as a param or
            score bonus points by passing it as query params (you need to
            manually parse them though!)
          </li>
          <li>
            Load the "Course" component as a nested component of "Courses"
          </li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>
            Redirect requests to /all-courses to /courses (=> Your "Courses"
            page)
          </li>
        </ol>

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
