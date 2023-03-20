import { useRef, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gateway from "./components/Gateway";
import Auth from "./Auth";
import Admin from "./Admin";
import Sandbox from "./Sandbox";
import Error from "./Error";
import Users from "./Users";
import OTP from "./pages/auth/OTP";
import PrivateRoiutes from "./pages/auth/PrivateRoutes";
import EpassRegistration from "./components/EpassRegistration";
import AuthService from "./services/auth.service";

function App() {
  const user = AuthService.getCurrentUser();
  const [refresh, setRefresh] = useState(false);
  const onIdle = () => {
    console.log("timeout");
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

  

  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/gateway/*" element={<Gateway />}></Route>
        <Route path="epass" element={<EpassRegistration />}></Route>
        <Route path="/otp" element={<OTP />}></Route>
        <Route path="/auth/*" element={<Auth />}></Route>
        <Route element={<PrivateRoiutes />}>
          <Route path="/admin/*" element={<Admin />}></Route>
          <Route path="/users/*" element={<Users />}></Route>
        </Route>
        <Route path="/sandbox/*" element={<Sandbox />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
