import React from 'react'
import classes from './Cockpit.module.css' // css modules scoped to this component

const Cockpit = (props) => {
    // console.log(props);
    
    //if 2 persons or less
    //creating css styling to match app.css on if condition then joining
    const assignClasses = []
    let btnClass = ''
    if (props.showPersons) { //coming from the app state 
        btnClass = classes.Red // string from obj css loader that gives us access
    }
    if (props.persons.length <= 2) {
        assignClasses.push(classes.red) // classes = ["red"]
    }
    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold)// classes = ["red", "bold"]
    }
    return (
        <div className={classes.Cockpit}>
            <h1 className={assignClasses.join(" ")}>Hello There</h1>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit
