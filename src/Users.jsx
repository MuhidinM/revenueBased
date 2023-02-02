import React from "react";
import { Route, Routes } from "react-router-dom";
import E404 from "./pages/error/E404";
import Nav from "./pages/user/Nav";
import Home from "./pages/user/Home";
import Uapi from "./pages/user/Uapi";
import Modal from "./components/Modal";
import Accounts from "./pages/user/Accounts";
import Transactions from "./pages/user/Transactions";
import Sidebar from "./pages/user/Sidebar";
import Profile from "./pages/user/Profile";
import Settings from "./pages/user/Settings";
import Generateqr from "./pages/user/Generateqr";

function Users() {
  return (
    <>
      <Modal />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="items-center drawer-content bg-slate-100">
          {/* <!-- Page content here --> */}
          <Nav />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="uapi" element={<Uapi />}></Route>
            <Route path="transactions" element={<Transactions />}></Route>
            <Route path="accounts" element={<Accounts />}></Route>
            <Route path="qr" element={<Generateqr />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="setting" element={<Settings />}></Route>
            <Route path="*" element={<E404 />}></Route>
          </Routes>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Users;
