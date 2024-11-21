import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carrousel from "../Home/Carrousel";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import "flyonui/flyonui"
import { AuthContext } from "../Context/ContextProvider";
import CursorComponent from "./Cursor";


const Root = () => {
  const { pathname } = useLocation();
  const [views, setViews] = useState(true);
  const {setViewWallet, setVieProfile, setViewSetting} = useContext(AuthContext)


  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const isMouse = window.matchMedia("(pointer: fine)").matches;
    const isLargeDevice = window.innerWidth >= 768;

    if (isMouse && isLargeDevice) {
      setShowCursor(true); // Enable cursor animation
    } else {
      setShowCursor(false); // Disable cursor animation
    }
  }, []);
  
  useEffect(() => {
    if (
      pathname === "/dashboard" ||
      pathname === "/login" ||
      pathname === "/register"
    ) {
      setViews(false);
    } else {
      setViews(true);
    }

    if (pathname === "/dashboard/billing") {
      setViewWallet(true)
      setVieProfile(false)
      setViewSetting(false)
    }
    if (pathname === "/dashboard/setting") {
      setViewWallet(false)
      setVieProfile(false)
      setViewSetting(true)
    }
  }, [pathname]);

  return (
    <div className=" ">
      <Helmet>
        <title>EcoVenture | Home</title>
      </Helmet>
      <Toaster />
      <Navbar></Navbar>
      <CursorComponent></CursorComponent>
      {views && <Carrousel></Carrousel>}
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
     
    </div>
  );
};

export default Root;
