import React from 'react'
import Aux from '../../hoc/Auxiliary'; // using aux as a wrapper for the adjacent tags || can React Fragment.

import classes from './Layout.module.css' //module css


const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)
export default layout