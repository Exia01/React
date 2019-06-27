import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        }) //passes the project into the function which performs the dispatch
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Project</h5>
                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleChange} />
                        <label htmlFor="title">Project Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Project Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

//takes in dispatch method
const mapDispatchToProps = dispatch => {
    return {
        //returning whatever property we can to add to the props. Adding method
        createProject: (project) => dispatch(createProject(project))//takes in individual object and then dispatch action creator
    }
}
//function, hoc, then wrap it
export default connect(null, mapDispatchToProps)(CreateProject)
//the first parameter is always mapStateToProps. There is none; passing null



// handleChange function is called each time we key down thus it is not good practice. we can change state using on onSubmit itself, using refs and here it goes
//   handleSubmit = (e) => {
//     e.preventDefault()
//       this.setState(() => {
//         return {
//           title: this.refs.title.value,
//           content: this.refs.content.value
//         }
//       }, () => {
//         this.props.createProject(this.state)
//       })
//     }
// or
// handleSubmit = (e) => {
//     e.preventDefault()
//       this.setState({
//           title: this.refs.title.value,
//           content: this.refs.content.value
//       }, () => {
//         this.props.createProject(this.state)
//       })
//     }