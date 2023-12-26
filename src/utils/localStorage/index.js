const setCurrentUser = (user) => {
  if (!user) user = "";
  return localStorage.setItem("userAuth", JSON.stringify(user));
};

const getCurrentUser = () => {
  return localStorage.getItem("userAuth");
};

const removeItem = (name) => {
  return localStorage.removeItem(name);
};

export { setCurrentUser, getCurrentUser, removeItem };
