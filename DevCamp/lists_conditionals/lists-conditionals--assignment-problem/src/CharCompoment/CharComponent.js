import React from 'react'
import uuid from "uuid";

const CharComponent = (props) => {
    const tempDict = [...props.paragraph].map(char=>{
        let id = uuid.v4()
        return {id:char}
    })
    console.log(tempDict);
    
    let lettersArr = [...props.paragraph]
    // console.log(lettersArr)
    console.log(props)
    const tagStyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
    }

    //creating element before rendering 
    const letters = lettersArr.length ? (
        lettersArr.map(letter => {
            return <p 
            key={uuid.v4()} 
            style={tagStyle}
            onClick={()=>props.removeChar}>{letter}</p>
        })
    ) : <p className="test">No text</p>


    return (
        <div>
            {letters}
        </div>
    )
}

export default CharComponent
