import React, { Component } from 'react'

import './ColorBox.css'

export class ColorBox extends Component {
    render() {
        let { background, name} = this.props
        return (
            <div style={{ backgroundColor: background }} className="ColorBox">
                <span>{name}</span>
                <span>More</span>
            </div>
        )
    }
}

export default ColorBox
