import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  // Don't attach JWT for login/register
  if (
    token &&
    !config.url.startsWith("/auth/login") &&
    !config.url.startsWith("/auth/register")
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;