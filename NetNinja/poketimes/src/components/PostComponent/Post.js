import React, {Component} from 'react';
/* Container component */
/* Props have been inherited from the Route Component */
class Post extends Component {
    /* First it is initialize -> then it grabs from params */
    state = {
        id:null
    }

    componentDidMount() {
        /* console.log(this.props) */
        let id = this.props.match.params.post_id
        this.setState({
            id
        })
        console.log(id)
    }
    render() {
        return (
            <div className="container">
                <h4>Route Param: {this.state.id} </h4>
            </div>
        )
    }
}

export default Post