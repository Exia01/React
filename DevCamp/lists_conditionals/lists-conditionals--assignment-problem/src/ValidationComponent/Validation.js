import React from 'react'

const Validation = (props) => {
    const paragraph = [...props.paragraph]
    // console.log(props)
    // console.log(paragraph.length)
    let vTag = ""
    if (paragraph && paragraph.length >= 1) {
        paragraph.length >= 5 ?
            (vTag = (<p>Text long enough</p>)) :
            (vTag = (<p>Text is too short! Minimum 5 chars</p>))
    }
    return (
        <div>
            {vTag}
        </div>
    )
}

export default Validation
