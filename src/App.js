import { useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index"
import Auth from "./Auth";
import Error from "./Error";
import Users from "./Users";
import Sandbox from "./Sandbox";
import OTP from "./pages/auth/OTP";
// import PrivateRoiutes from "./pages/auth/PrivateRoutes";
import AuthService from "./services/auth.service";
import Sales from "./Sales";
// import RequireAuth from "./pages/auth/RequireAuth";

function App() {
  const user = AuthService.getCurrentUser();
  const [refresh, setRefresh] = useState(false);
  const onIdle = () => {
    // console.log("timeout");
    localStorage.clear();
    setRefresh(true);
  };
  if (refresh && user) {
    window.location.reload(true);
    setRefresh(false);
  }

  const idleTimer = useIdleTimer({
    onIdle,
    timeout: 1000 * 60 * 30,
    // timeout: 1000 * 5, test
  });
  console.log(idleTimer);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}></Route>{" "}
        <Route path="/auth/*" element={<Auth />}></Route>
        <Route path="/otp" element={<OTP />}></Route>
        <Route path="/sandbox/*" element={<Sandbox />}></Route>
        {/* <Route element={<RequireAuth allowedRoles={"merchant"} />}> */}
        <Route path="/users/*" element={<Users />}></Route>
        {/* </Route>
        <Route element={<RequireAuth allowedRoles={"sales"} />}> */}
        <Route path="/sales/*" element={<Sales />}></Route>
        {/* </Route> */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
