import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.10.15:8001/',
});

export default api;
