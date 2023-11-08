import React from "react";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation()

  if(loading) {
    return <div className="flex items-center lg:h-[60vh] justify-center"><span className="loading loading-ball loading-lg"></span></div>
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
