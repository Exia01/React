import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/' // by default the instance will assume the defaults(global setting) in index.js
}); // this creates an instance of axios --> a copy of the axios obj multiple copies can be created
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'; // this will override the global settings
export default instance //enables use on other files