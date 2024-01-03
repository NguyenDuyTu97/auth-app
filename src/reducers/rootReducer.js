import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";

const rootReducer = combineReducers({
  user: userReducer,
  role: roleReducer,
});

export default rootReducer;
