import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRoleInfo } from "../../reducers/roleReducer";

export default function About() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log(store, "store 000000000");
  const navigate = useNavigate();

  return (
    <div>
      About
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go home
        </button>

        <button
          onClick={() => {
            dispatch(
              setRoleInfo([
                "LIST_USER",
                "CREATE_USER",
                "UPDATE_USER",
                "DELETE_USER",
              ])
            );
          }}
        >
          Set value
        </button>
      </div>
    </div>
  );
}
