<<<<<<< Updated upstream
import axios from 'axios';

export default axios.create({
  baseURL:
    "http://ec2-13-53-125-111.eu-north-1.compute.amazonaws.com:8080/api/v1",
  headers: { "ngrok-skip-browser-warning": "true" },
  withCredentials: true,
});
=======
import axios from "axios";

export default axios.create({
  baseURL:
    "https://ec2-13-53-125-111.eu-north-1.compute.amazonaws.com:8080/api/v1",
  headers: { "ngrok-skip-browser-warning": "true" },
  withCredentials: true,
});
>>>>>>> Stashed changes
