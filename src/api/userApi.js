import instance from "../axios";

const loginApi = ({ email, password }) => {
  return instance.post("login", { email, password });
};

const refreshTokenApi = () => {
  return instance.post("refresh-token");
};

// CRUD
const getUsersApi = () => {
  return instance.get("get-users");
};

const deleteUserApi = (id) => {
  return instance.delete(`/delete-user/${id}`);
};

export { loginApi, refreshTokenApi, getUsersApi, deleteUserApi };
