import React from 'react'
import Radium from 'radium'
import './Person.css'

const Person = (props) => {
    // console.log(props);
    const style = {
        '@media(min-width:500px)': {
            width:'450px'
        }
    }
    
    return (
        <div className="Person" style={style}>
            <p onClick={props.clickEvent}>My name is {props.name} and i am {props.age} years old</p>
            <p className="">{props.id}</p>
            <p>{props.children}</p>
            <input value={props.name} type="text" onChange={props.changed}/>
        </div>
    )
}

export default Radium(Person) //HOC
