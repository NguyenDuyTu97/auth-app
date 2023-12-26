import instance from "../axios";

const loginApi = ({ email, password }) => {
  return instance.post("login", { email, password });
};

const getUsersApi = () => {
  return instance.get("get-users");
};

export { loginApi, getUsersApi };
