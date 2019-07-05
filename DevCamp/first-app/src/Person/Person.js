import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>My name is {props.name} and i am {props.age} years old</p>
        </div>
    )
}

export default Person

