import axios from "axios";
import { getCurrentUser, setCurrentUser } from "../utils/localStorage";
import { refreshTokenApi } from "../api/userApi";
import { setDataUser } from "../reducers/userReducer";
import { useDispatch } from "react-redux";
import store from "../store";

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
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error?.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await refreshTokenApi();
      if (res?.data?.success) {
        const token = res.data.data;

        const currentUser = getCurrentUser();
        const newUser = { ...JSON.parse(currentUser), token };
        setCurrentUser({ ...newUser });
        store.dispatch(setDataUser(newUser));

        // set headers
        instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return instance(originalRequest);
      }
    }
    // return Promise.reject(error);
  }
);

export default instance;
