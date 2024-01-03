import { createSlice } from "@reduxjs/toolkit";

const initialState = { values: [] };

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRoleInfo(state, action) {
      state.values = action.payload;
    },
    getRoleInfo(state, action) {
      state.values = action.payload;
    },
  },
});

export const { getRoleInfo, setRoleInfo } = roleSlice.actions;
export default roleSlice.reducer;
