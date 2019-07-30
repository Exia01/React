import React from 'react';

import './Post.css';

const post = (props) => {
    const {title, author} = props.post
    console.log(props);
    
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{title.substring(0, 10)}...</h1>
            <div className="Info">
                <div className="Author">{author}</div>
            </div>
        </article>
    )
}


export default post;