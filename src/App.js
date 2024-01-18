import "./App.css";
import Login from "./pages/login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { getCurrentUser } from "./utils/localStorage";
import { useSelector } from "react-redux";
import { getUserData } from "./selectors/userSelector";
import About from "./pages/about";
import User from "./pages/user";

function App() {
  const currentUser = useSelector(getUserData) || getCurrentUser();

  return (
    <>
      <BrowserRouter>
        {!currentUser ? (
          // <Navigate to="/login" />
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
