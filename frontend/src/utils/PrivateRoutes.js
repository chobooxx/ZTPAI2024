import { Outlet, Navigate } from "react-router-dom";
import AuthService from "../service/auth.service";

const PrivateRoutes = () => {
  // let auth = { token: false };
  //   let user = {AuthService.getCurrentUser() : false};

  const token = localStorage.getItem("token");
  let auth = { token: false };
  return auth ? <Outlet /> : <Navigate to="/login" />;
  // return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
