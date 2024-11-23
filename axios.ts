import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  // baseURL: "http://ec2-3-111-37-136.ap-south-1.compute.amazonaws.com:3000/api",
  baseURL: "http://localhost:3000/api",
});

export default instance;
