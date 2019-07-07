import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p onClick={props.clickEvent}>My name is {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input value={props.name} type="text" onChange={props.changed}/>
        </div>
    )
}

export default Person

