import React from 'react'
import personClass from './Person.module.css' // css module

const Person = (props) => {
    // console.log(props);
    const rnd = Math.random() // 30%  error marging
        if (rnd > 0.7) {
            throw new Error('Something went sideways')
        }

    
    return (
        <div className={personClass.Person}>
            <p onClick={props.clickEvent}>My name is {props.name} and i am {props.age} years old</p>
            <p className="">{props.id}</p>
            <p>{props.children}</p>
            <input value={props.name} type="text" onChange={props.changed}/>
        </div>
    )
}

export default Person
