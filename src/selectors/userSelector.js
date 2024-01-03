import { useSelector } from "react-redux";

const getUserData = (state) => state?.user?.data;

export { getUserData };
