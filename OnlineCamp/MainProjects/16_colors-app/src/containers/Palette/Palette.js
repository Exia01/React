import React, { Component } from 'react'
import ColorBox from '../ColorBox/ColorBox'


import './Palette.css'

export class Pallete extends Component {
    render() {
        const colorBoxes = this.props.pallete.colors.map(color => {
            return <ColorBox background={color.color} name={color.name} />
        })
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}

                </div>
                {/* Footer */}
            </div>
        )
    }
}

export default Pallete
