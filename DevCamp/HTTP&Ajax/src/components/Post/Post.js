import React from 'react';
import {withRouter} from 'react-router-dom'
//HOC, will enable props

import Postcss from './Post.module.css'


const post = (props) => {
    const {title, author} = props.post
    console.log(
        'Props from Post: ', props);
    
    return (
        <article id={props.post.id} onClick={props.clicked} className={Postcss.Postcss}>
            <h1>{title.substring(0, 10)}...</h1>
            <div className="Info">
                <div className="Author">{author}</div>
            </div>
        </article>
    )
}


export default post
// export default withRouter(post); // sample of wrapping