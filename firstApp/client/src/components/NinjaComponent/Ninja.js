import React, { Component } from 'react';
import './Ninja.css';
/* We can automatically pass down the props from parent to child. */
class Ninja extends Component {
  render() {
   /*  console.log(this.props); //this logs an object */
  /*   'Destructuring' We extracted the properties from the props object; can be used wherever */
    const {name, age, belt} = this.props
/*     It makes it easier to assign and it also makes it reusable */
    
    return (
      <div className="ninja">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
      </div>
    );
  }
}

export default Ninja;
