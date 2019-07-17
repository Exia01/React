import React from 'react'
import Person from './Person/Person';

//since since we are only executing a single return logic we can use es6+ formatting without return 
const Persons = (props) => props.persons.map((individual, index) => {
    //using property naming for props functions
    return <Person
        clickEvent={() => props.clicked(index)}
        name={individual.name}
        age={individual.age}
        changed={(event) => props.changed(event, individual.id)}
        key={individual.id} />
})

export default Persons
