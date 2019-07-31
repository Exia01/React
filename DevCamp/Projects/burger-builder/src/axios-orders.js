import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-react-88618.firebaseio.com/'
});

export default instance;