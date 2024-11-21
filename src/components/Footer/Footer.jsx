import { useState } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { useContext } from "react";

const Footer = () => {
  const {myRef} = useContext(AuthContext)
  
  return (
    <div className=" bg-white p-10 space-y-5" ref={myRef}>
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-semibold">
        </h1>
        <p className="text-gray-600 ">
        </p>
        <div className="divider w-[90%] md:w-[80%] xl:w-[70%] mx-auto"></div>
        </div>
      <footer className="footer items-center justify-evenly">
        <nav>
          <h6 className="footer-title text-lg text-black">Services</h6>
          <a className="link link-hover text-lg text-gray-600">Product Support</a>
          <a className="link link-hover text-lg text-gray-600"> Order Tracking</a>
          <a className="link link-hover text-lg text-gray-600"> Shipping & Delivery</a>
          <a className="link link-hover text-lg text-gray-600"> Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg text-black">Company</h6>
          <a className="link link-hover text-lg text-gray-600">About us</a>
          <a className="link link-hover text-lg text-gray-600">Careers</a>
          <a className="link link-hover text-lg text-gray-600"> Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg text-black">Legal</h6>
          <a className="link link-hover text-lg text-gray-600">Terms of use</a>
          <a className="link link-hover text-lg text-gray-600">Privacy policy</a>
          <a className="link link-hover text-lg text-gray-600">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
