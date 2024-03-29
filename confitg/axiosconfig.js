import axios from "axios";
import { getToken } from "./function";

// "http://localhost:8080/api/v1"
const instance = axios.create({});

const basePublicUrl = import.meta.env.VITE_PUBLIC_URL;
instance.defaults.baseURL = basePublicUrl;

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
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default instance;
