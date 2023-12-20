import instance from "../axios";

const loginApi = ({ email, password }) => {
  return instance.post("login", { email, password });
};

export { loginApi };
