import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../config';
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from '../utils/auth';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = getRefreshToken();
        const response = await api.post('/auth/refresh-token', { refreshToken });
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        return api(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const apiService = {
  createUser: async (data) => {
    try {
      const response = await api.post('/users', data);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  },

  getUser: async (id) => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  },

  // Add more API endpoints here...
};

export default apiService;