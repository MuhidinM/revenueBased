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
import MultiStepForm from "./pages/user/MultiStepForm";
import ActivatePrimaryAccount from "./pages/user/ActivatePrimaryAccount";
import Sales from "./pages/user/Sales";
import Inventory from "./pages/user/Inventory";
import Loan from "./pages/user/Loan";
function Users() {
  return (
    <>
      <Modal />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-100 dark:bg-gray-700">
          {/* <!-- Page content here --> */}
          <Nav />
          <div className="m-4">
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="uapi" element={<Uapi />}></Route>
              <Route path="transactions" element={<Transactions />}></Route>
              <Route path="accounts" element={<Accounts />}></Route>
              <Route path="sales" element={<Sales />}></Route>
              <Route path="inventory" element={<Inventory />}></Route>
              <Route path="loan" element={<Loan />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="setting" element={<MultiStepForm />}></Route>
              <Route path="*" element={<E404 />}></Route>
            </Routes>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Users;
