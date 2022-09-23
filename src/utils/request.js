import axios from "axios";
import qs from "qs";

const BASE_URL = "https://webapi.spectrumera.com";
const REQUEST_TIMEOUT = 1000 * 30;

const service = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

service.interceptors.request.use(
  (config) => {
   
    if (config.headers["Content-Type"] == "application/x-www-form-urlencoded;") {
      config.data = JSON.parse(config.data);
    }
    return config;
  }
);

// respone
service.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response) {
      return err.response.data;
    } else {
      return err.config;
    }
  }
);

export default service;
