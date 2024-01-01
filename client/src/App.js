import Register from "./pages/Register/Register";
import React, { useContext } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user}  = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register/>} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
