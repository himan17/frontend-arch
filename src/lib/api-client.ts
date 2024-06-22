// src/services/api.ts
import axios from "axios";
import { config } from "../config/config";
import { telegramWindow } from "./telegram";

// Create an Axios instance
const api = axios.create({
  baseURL: config.backend_url, // Replace with your API base URL
});

// Add a request interceptor to add the auth header
api.interceptors.request.use(
  (config) => {
    config.headers["x-telegram-init-data"] = telegramWindow.initData as string;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
