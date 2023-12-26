import { toast } from "react-toastify";

const toastMessage = (type, message, { ...options }) => {
  return toast[type](message, { ...options });
};

export default toastMessage;
