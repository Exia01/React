import React from 'react';

/* We are changing this to a UI Container since there are no states, it is only related to UI */
//we still need to pass the 'properties' ninja
/*  'Destructuring' We extracted the properties from the props object; can be used wherever */
const Ninjas = ({ people }) => {
    /* Here we use map which creates a new element  */
    //const peopleList = people.map(person => {
    //console.log(person)
    //if (person.age > 20) {
    //    return (
    //        <div className="ninja" key={person.id}>
    //            <ul>
    //                <li>Name: {person.name}</li>
    //                <li><p>Age: {person.age}</p></li>
    //                <li><p> Language: {person.language}</p></li>
    //            </ul>
    //        </div>
    //    )
    //} else {
    //    return null
    //}
    /* This is an example of a ternary operator: leaner code */
    const peopleList = people.map(person => {
        return person.age > 20 ? (
            <div className="ninja" key={person.id}>
                <ul>
                    <li>Name: {person.name}</li>
                    <li>Age: {person.age}</li>
                    <li> Language: {person.language}</li>
                </ul>
            </div>
        ) : null
    })

    return (
        <div className="ninja-list">
            {peopleList}
        </div>
    )
}

export default Ninjas;
