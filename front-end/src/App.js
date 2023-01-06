import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import Admin from "./components/Amin/Pages/AdminHome";
import Home from "./components/user/HomeUser";
import AdminLogin from "./components/Amin/Pages/AdminLogin";
import UserAuth from "./ProtectedRoutes/UserRoutes";
import UnAuthUser from "./ProtectedRoutes/UnAuthUser";
import Authentcation from "./ProtectedRoutes/AdminRoute";
import UnAuthAdmin from "./ProtectedRoutes/UnAuthAdmin";
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Routes>
      <Route element={<UnAuthAdmin />}>
        <Route path="/admin/login" element={<AdminLogin />} />
      </Route>
      <Route element={<Authentcation />}>
        <Route path="/admin" element={<Admin />} />
      </Route>

      <Route element={<UnAuthUser />}>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Register />} />
      </Route>

      <Route element={<UserAuth />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
    //  <div className='App'>{
    //   currentForm=== "login" ? <Login onFormSwitchRou={toggleForm} />:<Register onFormSwitch={toggleForm} />

    //  }
    //  </div>
  );
}

export default App;
