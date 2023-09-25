import axios from "axios";

export default axios.create({
  baseURL:
    "http://ec2-51-20-82-209.eu-north-1.compute.amazonaws.com:8080/api/v1",
  headers: { "ngrok-skip-browser-warning": "true" },
  withCredentials: true,
});