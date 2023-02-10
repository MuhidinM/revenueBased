import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import E404 from "./pages/error/E404";
import Nav from "./pages/admin/Nav";
import Sidebar from "./pages/admin/Sidebar";
import Footer from "./components/Footer";
import Users from "./pages/admin/Users";
import Banks from "./pages/admin/Banks";
import Messages from "./pages/admin/Messages";
import Modal from "./components/Modal";
import Activate from "./pages/admin/Activate";
import Usermanagement from "./pages/admin/Usermanagement";
import Modal2 from "./components/Modal2";

import Transactions from "./pages/admin/Transactions";
//change is happened
function Admin() {
  return (
    <>
      <Modal />
      {/* <Modal2 /> */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content bg-slate-100">
          {/* <!-- Page content here --> */}
          <Nav />
          <div className="m-4">
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="users" element={<Users />}></Route>
              <Route path="transactions" element={<Transactions />}></Route>
              <Route path="banks" element={<Banks />}></Route>
              <Route path="activate" element={<Activate />}></Route>
              <Route path="messages" element={<Messages />}></Route>
              <Route path="Profile" element={<Profile />}></Route>
              <Route path="*" element={<E404 />}></Route>
            </Routes>
          </div>

          <Footer />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Admin;
