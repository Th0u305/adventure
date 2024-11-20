import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Adventure from "./components/Adventure/Adventure";
import EcoTips from "./components/Adventure/EcoTips";
import About from "./components/About/About";
import Contact from "./components/About/Contact";
import PrivateRoute from "./components/Private/PrivateRoute";
import Profile from "./components/Private/Page/Profile";
import Dashboard from "./components/Private/Page/Dashboard/Dashboard";
import ContextProvider from "./components/Context/ContextProvider";
import Login from "./components/Private/Login";
import Register from "./components/Private/Register";
import SinglePages from "./components/Adventure/SinglePages";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
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
