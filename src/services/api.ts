import axios from "axios";

export const api = axios.create({
  baseURL: "https://database-sos.up.railway.app",
  // baseURL: "https://tsunode-blog-api.onrender.com",
  timeout: 15000,
});
