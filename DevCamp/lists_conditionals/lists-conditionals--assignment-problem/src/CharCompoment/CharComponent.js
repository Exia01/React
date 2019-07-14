import React from 'react'
import uuid from "uuid";

const CharComponent = (props) => {
    const tempDict = [...props.paragraph].map(char => {
        let id = uuid.v4()
        return {id, char}
    })
    const updateDictHandler = (id) => {
        const tempLettersDict = tempDict.filter(obj => {
            return obj.id !== id
        })
        // console.log(tempLettersDict); 
        const chars = tempLettersDict.map(obj => {
            return obj.char
        })
        props.charRemoveHandler(chars.join(""))
    }
    console.log(props)
    const tagStyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
    }

    //creating element before rendering 
    const letters = tempDict.length ? (
        tempDict.map(letter => {
            return <p
                key={letter.id}
                style={tagStyle}
                onClick={() =>updateDictHandler(letter.id)}>{letter.char}</p>
        })
    ) : <p className="test">No text</p>


    return (
        <div>
            {letters}
        </div>
    )
}

export default CharComponent


//getting or mapping values from obj:https://javascript.info/keys-values-entries