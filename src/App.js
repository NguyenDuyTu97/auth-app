import "./App.css";
import Login from "./pages/login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div>
      <Login />

      <ToastContainer />
    </div>
  );
}

export default App;
