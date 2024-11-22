import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Adventure from "./components/Adventure/Adventure";
import EcoTips from "./components/Adventure/EcoTips";
import About from "./components/About/About";
import Contact from "./components/About/Contact";
import PrivateRoute from "./components/Private/PrivateRoute";
import Dashboard from "./components/Private/Page/Dashboard/Dashboard";
import ContextProvider from "./components/Context/ContextProvider";
import Login from "./components/Private/Login";
import Register from "./components/Private/Register";
import SinglePages from "./components/Adventure/SinglePages";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "flyonui/flyonui"
import Money from "./components/Private/Page/Dashboard/DashboardPages/Money";
import Settings from "./components/Private/Page/Dashboard/DashboardPages/Settings";
import Profile from "./components/Private/Page/Dashboard/DashboardPages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Navigate to={'/'}></Navigate>,
      },
      {
        path: "adventure",
        element: <Adventure></Adventure>,
      },
      {
        path: "adventure/:id",
        element: <SinglePages></SinglePages>,
      },
      {
        path: "ecoTips",
        element: <EcoTips></EcoTips>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children:[
          {
            path:"/dashboard/billing",
            element:<PrivateRoute><Money></Money> </PrivateRoute>
          },
          {
            path:"/dashboard/profile",
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
          },
          {
            path:"/dashboard/setting",
            element:<PrivateRoute><Settings></Settings></PrivateRoute>
          }
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </HelmetProvider>
  </StrictMode>
);
