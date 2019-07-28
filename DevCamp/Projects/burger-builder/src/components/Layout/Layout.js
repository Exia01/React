import React from 'react'
import Aux from '../../hoc/Auxiliary'; // using aux as a wrapper for the adjacent tags || can React Fragment.

import classes from './Layout.module.css' //module css
import Toolbar from '../Navigation/Toolbar/Toolbar';


const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)
export default layout