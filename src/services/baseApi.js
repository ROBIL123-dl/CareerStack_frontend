import axios from "axios";
import getCSRFToken from "./csrf";
import ServerErrorPage from "../pages/serverError";

const baseurl = "http://localhost:8000";

export const api = axios.create({
  baseURL: baseurl,
  withCredentials: true,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(config => {
  const csrfToken = getCSRFToken();
  console.log("csrfToken",csrfToken)
  if (csrfToken) {
    config.headers["X-CSRFToken"] = csrfToken;
  }
  console.log("confcrsf",config)
  return config;
});


let isRefreshing = false;
let failedQueue = [];

const processQueue = (error = null) => {
  failedQueue.forEach(prom => {
    if (error) prom.reject(error);
    else prom.resolve();
  });
  failedQueue = [];
};


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if ([500, 502, 503, 504].includes(error.response.status)){
      ServerErrorPage()
      return Promise.reject(error);
    }
    if (
      originalRequest.url?.includes("/auth/authStatus/")
    ) {
      return Promise.reject(error);
    }

   
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => api(originalRequest));
      }

      isRefreshing = true;

      try {
        await api.post("/auth/refresh/"); 
        processQueue(null);
        return api(originalRequest);
      } catch (err) {
        processQueue(err);
        return Promise.reject(err); 
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);


