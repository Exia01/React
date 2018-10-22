import React, { Component } from 'react';
import './Ninjas.css';
/* We can automatically pass down the props from parent to child. */
class Ninjas extends Component {
    render() {
        /*  console.log(this.props); //this logs an object */
        /*   'Destructuring' We extracted the properties from the props object; can be used wherever */
        const { name, age, belt } = this.props
        /*     It makes it easier to assign and it also makes it reusable */

        return (
            <div className="ninja">
                <ul>
                    <li>Name: {name}</li>
                    <li><p>Age: {age}</p></li>
                    <li><p> Belt: {belt}</p></li>
                </ul>
            </div>
        );
    }
}

export default Ninjas;
