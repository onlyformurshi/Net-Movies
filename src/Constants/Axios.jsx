
import axios from 'axios';
import { baseURL } from './Constants';
const instance = axios.create({
    baseURL
});

export default instance