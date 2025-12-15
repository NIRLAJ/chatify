import axios from "axios";

const defaultApi = import.meta.env.VITE_API_URL ?? (import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api");

export const axiosInstance = axios.create({
  baseURL: defaultApi,
  withCredentials: true,
});
