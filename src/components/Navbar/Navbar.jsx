import React, { useContext } from "react";
import logo from "../../assets/map.png";
import avatarLogo from "../../assets/man.gif";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import toast from "react-hot-toast";
import 'flowbite';


const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const { myRef } = useContext(AuthContext);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        if (user) {
          toast.success("Signed Out Successfully");
        }
      })
      .catch(() => {
        toast.error("Please Try Again");
      });
  };

  const navMenu = (
    <>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="dropdown-item focus:bg-gray-300"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="dropdown-item focus:bg-gray-300"
          to="adventure"
        >
          Adventures
        </Link>
      </li>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="dropdown-item focus:bg-gray-300"
          to="ecoTips"
        >
          Eco-Tips
        </Link>
      </li>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="dropdown-item focus:bg-gray-300"
          to="about"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="dropdown-item focus:bg-gray-300"
          to="contact"
        >
          Contact
        </Link>
      </li>
    </>
  );

  const buttonLink = (
    <>
      <Link
        onClick={() =>
          myRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
        to="login"
        className="btn xl:w-36 md:h-10 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32] hover:scale-110 ease-in-out	duration-300"
      >
        Login
      </Link>
    </>
  );

  return (






    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    {buttonLink}
      <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"></img>
      </button>
  
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="dashboard/profile"
            href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
          </li>
          <li>
            <Link onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="dashboard/profile"
             href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
          </li>
          <li>
            <Link  onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="dashboard/profile"
            href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
          </li>
          <li>
            <Link  onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="dashboard/profile"
            href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {navMenu}
    </ul>
  </div>
  </div>
</nav>








    // <nav class="navbar xl:rounded-full fixed z-50 top-0 xl:top-15 shadow justify-between lg:container mx-auto left-0 right-0 lg:px-12">
    //   <div class="navbar-start w-full lg:w-fit">
    //     <div className="flex justify-between items-center w-[90%] lg:w-auto">
    //       <div class="dropdown relative inline-flex lg:hidden rtl:[--placement:bottom-end]">
    //         <button
    //           id="dropdown-default"
    //           type="button"
    //           class="dropdown-toggle btn btn-text btn-secondary btn-square"
    //           aria-haspopup="menu"
    //           aria-expanded="false"
    //           aria-label="Dropdown"
    //         >
    //           <span class="icon-[tabler--menu-2] dropdown-open:hidden size-7"></span>
    //           <span class="icon-[tabler--x] dropdown-open:block hidden size-7"></span>
    //         </button>
    //         <ul
    //           class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 border-2 border-black"
    //           role="menu"
    //           aria-orientation="vertical"
    //           aria-labelledby="dropdown-default"
    //         >
    //           {navMenu}
    //         </ul>
    //       </div>
    //       <div className="flex flex-row justify-center items-center gap-2 md:gap-5">
    //         <a href="/">
    //           <img className="w-15 md:w-16" src={logo} alt="" />
    //         </a>
    //         <a
    //           className="link text-base-content/90 link-neutral text-lg font-semibold no-underline"
    //           href="/"
    //         >
    //           EcoVenture
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="navbar-center max-lg:hidden">
    //     <ul class="menu menu-horizontal p-0 font-medium text-lg xl:text-xl">{navMenu}</ul>
    //   </div>
    //   <div class="navbar-end items-center gap-4 lg:w-fit">
    //     <div class="flex flex-row justify-center items-center gap-2 md:gap-5" href="#">
    //       {buttonLink}
    //       <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
    //         <button
    //           id="dropdown-scrollable"
    //           type="button"
    //           className="dropdown-toggle flex items-center"
    //           aria-haspopup="menu"
    //           aria-expanded="false"
    //           aria-label="Dropdown"
    //         >
    //           <div className="avatar">
    //             <div className="size-12 md:size-16 rounded-full">
    //               <img src={user?.photoURL || avatarLogo} alt="avatar 1" />
    //             </div>
    //           </div>
    //         </button>
    //         <ul
    //           className="dropdown-menu dropdown-open:opacity-100 hidden min-w-52 border-2 border-black"
    //           role="menu"
    //           aria-orientation="vertical"
    //           aria-labelledby="dropdown-avatar"
    //         >
    //           <li className="dropdown-header gap-3 border-0 pt-3">
    //             <div className="avatar">
    //               <div className="w-10 rounded-full">
    //                 <img src={user?.photoURL || avatarLogo} alt="avatar 1" />
    //               </div>
    //             </div>
    //             <div>
    //               <h6 className="text-base-content/90 text-base font-semibold">
    //                 {" "}
    //                 {user?.displayName || "John Doe"}
    //               </h6>
    //               <small className="text-base-content/50">
    //                 {" "}
    //                 {user?.email || "example@gmail.com"}
    //               </small>
    //             </div>
    //           </li>
    //           <li>
    //             <hr className="border-base-content/25 -mx-2 mb-3" />
    //           </li>
    //           <li>
    //             <Link
    //               onClick={() =>
    //                 myRef.current?.scrollIntoView({
    //                   behavior: "smooth",
    //                 })
    //               }
    //               className="dropdown-item"
    //               to="dashboard/profile"
    //             >
    //               <span className="icon-[tabler--user]"></span>
    //               My Profile
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               onClick={() =>
    //                 myRef.current?.scrollIntoView({
    //                   behavior: "smooth",
    //                 })
    //               }
    //               className="dropdown-item"
    //               to="/dashboard/setting"
    //             >
    //               <span className="icon-[tabler--settings]"></span>
    //               Settings
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               onClick={() =>
    //                 myRef.current?.scrollIntoView({
    //                   behavior: "smooth",
    //                 })
    //               }
    //               className="dropdown-item"
    //               to="/dashboard/billing"
    //             >
    //               <span className="icon-[tabler--settings]"></span>
    //               Billings
    //             </Link>
    //           </li>
    //           <li>
    //             <a className="dropdown-item" href="#">
    //               <span className="icon-[tabler--help-triangle]"></span>
    //               FAQs
    //             </a>
    //           </li>
    //           <li className="dropdown-footer gap-2">
    //             <Link
    //               onClick={handleSignOutUser}
    //               className="btn btn-error btn-soft btn-block"
    //               href="#"
    //             >
    //               <span className="icon-[tabler--logout]"></span>
    //               Sign out
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>  
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;