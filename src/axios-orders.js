import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-app-project.firebaseio.com/'
});

export default instance;