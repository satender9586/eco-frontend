import axios from "axios";
import { getToken } from "./function";

// import { refreshTokenApi } from './api';
// import AllToast from '../utils/toast';

const instance = axios.create({});

instance.defaults.baseURL = "http://localhost:8080/api/v1";

// Add request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add response interceptor
instance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error?.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error?.response?.status === 401) {
      //   refreshTokenApi();
      //   AllToast.info("Please try again")
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default instance;
