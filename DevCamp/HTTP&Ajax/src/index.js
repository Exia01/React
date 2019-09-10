import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
//all configs can be moved to a utils folder implement as HOC??
axios.defaults.baseURL='https://jsonplaceholder.typicode.com' //setting up true for all requests

// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'//this could be set as a authorization token
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' //application/json would be the default
//interceptors are functions that can be defined globally that will apply every time we execute a request or receive a response
// applying here since it is the most global file
axios.interceptors.request.use(request =>{
    console.log(request) //generally name requestConfig
    //always need to return the request or edit before 
    return request
},err=>{
    console.log("interceptors error! ", err) //this error is a setting fail
    return Promise.reject(err)// this would forward the error to the request
})

axios.interceptors.response.use(response=>{
    console.log(response) //
    //always need to return the request or edit before 
    return response
},err=>{
    console.log("interceptors error! ", err) //this error is a setting fail
    return Promise.reject(err)// this would forward the error to the request
})


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
// getting rid of interceptors is also easy. Simply store the reference to the interceptor in a variable and call eject  with that reference as an argument, to remove it (more info: https://github.com/axios/axios#interceptors):