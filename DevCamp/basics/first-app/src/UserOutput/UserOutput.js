import React from 'react'

function UserOutput(props) {
    const {persons, inputValue} = props.stateValues
    console.log(props);

    return (
        <div>
            <div className="container">
            <div className="col">
                <ul className="list-group">
                {persons.map(person => {
                    return (
                        <li key={person.name} className="list-group-item">{person.name}</li>
                        )
                    })}
                    </ul>
                <p>{inputValue}</p>
            </div>
        </div>

        </div >
    )
}

export default UserOutput
