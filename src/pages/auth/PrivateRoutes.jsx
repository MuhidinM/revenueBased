import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    // let user = localStorage.getItem("user");
  //   let auth;

  //   if ((user === {}) | (auth.token === null)) {
  //     auth = { token: false };
  //   } else {
  //     auth = { token: true };
  //   }


  //   if (user !== {}) {
  //     auth = { token: true };
  //   } else {
  //     auth = { token: false };
  //   }

  
  let auth = { token: true };
  // const [token, setToken] = useState(false)

  // if (user) {
  //   setToken(true)
  // }


  return auth.token ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoutes;
