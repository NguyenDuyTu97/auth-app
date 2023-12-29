import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getUsersApi } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../utils/localStorage";

const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      await getUsersApi();
    };

    getUsers();
  }, []);

  const onLogout = () => {
    removeItem("userAuth");
    navigate("/login");
  };

  const onReloadData = async () => {
    await getUsersApi();
  };

  return (
    <div>
      Home
      <div>
        <button onClick={onReloadData}>Reload data</button>
      </div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
