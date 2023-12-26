import axios from "axios";
import { getCurrentUser } from "../utils/localStorage";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // timeout: 30000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const currentUser = getCurrentUser();
    if (currentUser) {
      config.headers["Authorization"] =
        "Bearer " + JSON.parse(currentUser).token;
    }

    return config;
  },
  function (error) {
    // Do something with request error

    console.log(error, "error");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log(response, "response 000");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    console.log(error, "error 111");
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
