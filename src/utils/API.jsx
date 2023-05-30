import axios from "axios";

export const NODE_API = axios.create({
  baseURL: "http://http://192.168.14.245:5000/api",
});
