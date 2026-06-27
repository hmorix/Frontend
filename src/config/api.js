// frontend/src/config/api.js

import axios from 'axios';

const API_URL = 'https://api.kinley.com/v1'; // replace with your API base URL

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add JWT token to headers
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token refresh
apiClient.interceptors.push({
  responseError: (error) => {
    if (error.response.status === 401) {
      // Handle token refresh or logout logic here
      console.log('Token expired or invalid. Please re-authenticate.');
    }
    return Promise.reject(error);
  },
});

export default apiClient;