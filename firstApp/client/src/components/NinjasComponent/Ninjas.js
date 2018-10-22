import React from 'react';

/* We are changing this to a UI Container since there are no states, it is only related to UI */
//we still need to pass the 'properties' ninja
 /*  'Destructuring' We extracted the properties from the props object; can be used wherever */
const Ninjas = ({ people }) => {
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

export default Ninjas;
