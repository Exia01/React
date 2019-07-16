import React, {Component} from 'react'

// this compoment is strictly for handling the error in person.js
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
    // class method 
    componentDidCatch = (error, errorInfo) => { //args automatically passed by react
        this.setState({hasError: true, errorMessage: errorInfo})
        //set state to current error and true
    }
    //when accessing props in class we need to access the props with "this"
    render() {
        if (this.state.hasError) { // if true
            return (
                <div>
                    <h1>{this.state.errorMessage}</h1>
                </div>
            )

        }// could also do else{return this.props.children}
        return this.props.children
    }
}

export default ErrorBoundary
