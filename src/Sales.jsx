import React from "react";
import E404 from "./pages/error/E404";
import Home from "./pages/sales/Home";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./pages/sales/Sidebar";
import Nav from "./pages/sales/Nav";
import Inventory from "./pages/sales/Inventory";
import LoanRequest from "./pages/sales/LoanRequest";
import LoanList from "./pages/sales/LoanList";

function Sales() {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-100 dark:bg-gray-700">
          {/* <!-- Page content here --> */}
          <Nav />
          <div className="m-4">
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="/inventory" element={<Inventory />}></Route>
              <Route path="/request" element={<LoanRequest />}></Route>
              <Route path="/loan" element={<LoanList />}></Route>
              <Route path="*" element={<E404 />}></Route>
            </Routes>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Sales;
