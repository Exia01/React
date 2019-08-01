import React from 'react'
import Auxiliary from '../Auxiliary/Auxiliary' // could also use React fragment
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent) => { //takes in the jsx
    return (props)=>{ //passing in the previous props it then returns the WrappedComponent with the passed in props
        return(
            <Auxiliary>
            <Modal>
                <p>Something didn't work</p>
            </Modal>
            <WrappedComponent {...props}/>
            </Auxiliary>
        )
    }
}

export default withErrorHandler
