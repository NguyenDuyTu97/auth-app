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

const addUsersApi = (data) => {
  return instance.post("add-user", data);
};

const updateUsersApi = (data) => {
  return instance.patch("update-user", data);
};

const deleteUserApi = (id) => {
  return instance.delete(`/delete-user/${id}`);
};

export {
  loginApi,
  refreshTokenApi,
  getUsersApi,
  addUsersApi,
  updateUsersApi,
  deleteUserApi,
};
