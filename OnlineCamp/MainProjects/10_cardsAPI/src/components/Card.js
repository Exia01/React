import React from 'react'

const Card = (props) => {
    const {images, suit, value } = props.cardProps
    return (
        <div className="Card">
        <img src={images.png} alt={suit}/>
        </div>
    )
}

export default Card
