import React from 'react'
import './Person.css'

const Person = (props) => {
    console.log(props);
    
    return (
        <div className="Person">
            <p onClick={props.clickEvent}>My name is {props.name} and i am {props.age} years old</p>
            <p className="">{props.id}</p>
            <p>{props.children}</p>
            <input value={props.name} type="text" onChange={props.changed}/>
        </div>
    )
}

export default Person

