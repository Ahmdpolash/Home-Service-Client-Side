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
import Details from "../Pages/Details/Details";

import ManageService from "../Pages/ManageService/MySchedule";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/Update/Update";
import MyService from "../Pages/Schedule/MyService";
import MySchedule from "../Pages/ManageService/MySchedule";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addService",
        element: <PrivateRoute><AddService /></PrivateRoute>,
      },
      {
        path: "services",
        element: <AllServices />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/api/services`),
      },
      {
        path: "/schedule",
        element: <PrivateRoute><MySchedule /></PrivateRoute>
      },
      {
        path: "/myService",
        element: <PrivateRoute><MyService /></PrivateRoute>
      },
      {
        path: "/manage",
        element: <PrivateRoute><ManageService /></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/api/bookings')
      },
      {
        path:'/update/:id',
        element:<Update/>,
        loader:() => fetch(`http://localhost:5000/api/services`)
      }
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
