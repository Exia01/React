import React from 'react'
/* We've imported the rainbow hoc -> 'Higher order component' */
import Rainbow from '../hoc/Rainbow'
const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, nobis veritatis! Sed perspiciatis magnam exercitationem? Porro beatae vero magnam doloremque vel autem necessitatibus, deleniti doloribus exercitationem distinctio consequatur facere consequuntur!</p>
        </div>
        )
}

/* We then pass the component to the rainbow wich returns a wrapped component */
export default Rainbow(About)