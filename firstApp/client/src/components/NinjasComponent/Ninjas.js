import React, { Component } from 'react';
import './Ninjas.css';
/* We can automatically pass down the props from parent to child. */
class Ninjas extends Component {
    render() {
        /*  console.log(this.props); //this logs an object */
        /*   'Destructuring' We extracted the properties from the props object; can be used wherever */
        const { people } = this.props
        /*     It makes it easier to assign and it also makes it reusable */
        /* Here we use map which creates a new element  */
        const peopleList = people.map(person => {
            //console.log(person)
            return (
                <div className="ninja" key={person.id}>
                    <ul>
                        <li>Name: {person.name}</li>
                        <li><p>Age: {person.age}</p></li>
                        <li><p> Language: {person.language}</p></li>
                    </ul>
                </div>
            )
        })
        return (
            <div className="ninja-list">
                {peopleList}
            </div>
        )
    }
}

export default Ninjas;
