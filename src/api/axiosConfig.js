import axios from "axios";

export default axios.create({
  baseURL:
    "https://ec2-13-50-159-25.eu-north-1.compute.amazonaws.com:8080/api/v1",
  headers: { "ngrok-skip-browser-warning": "true" },
  withCredentials: true,
});