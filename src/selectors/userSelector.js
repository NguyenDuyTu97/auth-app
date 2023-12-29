import { useSelector } from "react-redux";

const getUserData = (state) => state?.users?.data;

export { getUserData };
