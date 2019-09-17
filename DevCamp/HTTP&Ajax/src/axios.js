import axios from 'axios';
const config = {
  headers: {
    accept: 'application/json',
    contentType: 'application/json'
  }
};
axios.defaults.headers.get['Content-Type'] = config.contentType;
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: config.headers // by default the instance will assume the defaults(global setting) in index.js
}); // this creates an instance of axios --> a copy of the axios obj multiple copies can be created
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'; // this will override the global settings

export default instance; //enables use on other files

//Axios request config: https://github.com/axios/axios#request-config
