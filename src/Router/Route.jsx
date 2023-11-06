import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import Error from "../Pages/Error/Error";
import AddService from "../Pages/AddService/AddService";

import About from "../Pages/About/About";
import AllServices from "../Pages/AllServices/AllServices";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'addService',
        element:<AddService/>
      },
      {
        path: "services",
        element: <AllServices />,
        
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Route;
