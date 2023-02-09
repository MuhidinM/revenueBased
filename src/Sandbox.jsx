import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/sandbox/Dashboard";
import Login from "./pages/sandbox/Login";
import OTP from "./pages/sandbox/OTP";
import Registration from "./pages/sandbox/Registration";
import E404 from "./pages/error/E404";

function Sandbox() {
  return (
    <>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="otp" element={<OTP />}></Route>
        <Route path="dashboard/*" element={<Dashboard />}></Route>
        <Route path="*" element={<E404 />}></Route>
      </Routes>
    </>
  );
}

export default Sandbox;
