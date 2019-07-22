//Creating a context object
import React from 'react'

//createContext allows for a initial default value
const authContext = React.createContext({
    authenticated: false, 
    login:()=>{}
}) //this is available to any component without the transferring props through chain

export default authContext