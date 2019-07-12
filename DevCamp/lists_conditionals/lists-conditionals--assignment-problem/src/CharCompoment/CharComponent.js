import React from 'react'

const CharComponent = (props) => {
    let lettersArr = [...props.paragraph]
    console.log(lettersArr)
    const letters = lettersArr.length ? (
        lettersArr.map(letter => {
            
        })
    )
    return (
        <div>
            <p>CharComponent works!</p>
        </div>
    )
}

export default CharComponent
