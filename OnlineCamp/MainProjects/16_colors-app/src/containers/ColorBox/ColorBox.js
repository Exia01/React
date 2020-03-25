import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        //using state with callback, runs timeout reset
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1500);
        })

    }
    
    render() {
        const { background, name } = this.props
        // When copied is true, add show call with short circuit
        const { copied } = this.state
        return (
            // using HOC, could be wrapped on bottom only
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    {/* When using scale, it will not only grow the div but the content/text as well. Separating the div is best */}
                    <div className={`copy-overlay ${copied && 'show'}`} style={{ background }} />
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="see-more"> More</span>
                </div>
            </CopyToClipboard>

        )
    }
}

export default ColorBox
