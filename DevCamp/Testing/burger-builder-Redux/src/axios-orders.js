import axios from 'axios';

//could change or implement to MONGODB?? or strictly create an API for it and embed the application
const instance = axios.create({
  baseURL: 'https://burgerbuilder-react-88618.firebaseio.com/'
});

export default instance;