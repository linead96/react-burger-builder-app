import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-42cae.firebaseio.com/'
});

export default instance;
