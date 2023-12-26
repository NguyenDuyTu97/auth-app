import "./App.css";
import Login from "./pages/login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { getCurrentUser } from "./utils/localStorage";

function App() {
  const currentUser = getCurrentUser();

  return (
    <>
      <BrowserRouter>
        {!currentUser ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
