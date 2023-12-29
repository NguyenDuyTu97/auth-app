import instance from "../axios";

const loginApi = ({ email, password }) => {
  return instance.post("login", { email, password });
};

const refreshTokenApi = () => {
  return instance.post("refresh-token");
};

const getUsersApi = () => {
  return instance.get("get-users");
};

export { loginApi, refreshTokenApi, getUsersApi };
