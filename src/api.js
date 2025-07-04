// src/api.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Match your backend port
});

export default axiosInstance;
