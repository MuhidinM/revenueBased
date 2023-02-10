import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Uapi from './Uapi'
import Transactions from './Transactions'
import Accounts from './Accounts'
import E404 from "../error/E404";
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <>
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
            <Route path="*" element={<E404 />}></Route>
          </Routes>
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Dashboard