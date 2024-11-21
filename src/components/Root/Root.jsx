import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carrousel from "../Home/Carrousel";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor";
import "flyonui/flyonui"


const Root = () => {
  const { pathname } = useLocation();
  const [views, setViews] = useState(true);
  
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
  }, [pathname]);

  return (
    <div className=" relative pt-[5rem] md:pt-[6.5rem] lg:pt-[7.8rem] xl:pt-0">
            <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <Helmet>
        <title>EcoVenture | Home</title>
      </Helmet>
      <Toaster />
      <Navbar></Navbar>
      {views && <Carrousel></Carrousel>}
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
     
    </div>
  );
};

export default Root;
