import React, { useContext } from "react";
import logo from "../../assets/map.png";
import avatarLogo from "../../assets/man.gif";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import toast from "react-hot-toast";
import "flyonui/flyonui";

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
    <div className="">
      <nav className="navbar xl:rounded-full fixed z-50 top-0 xl:top-15 shadow justify-between  lg:container mx-auto left-0 right-0">
        <div className="navbar-start items-center w-fit md:gap-8 lg:gap-0 md:w-[60%] md:justify-between lg:w-auto">
          <div className="dropdown relative inline-flex lg:hidden rtl:[--placement:bottom-end] items-center">
            <button
              id="dropdown-default"
              type="button"
              className="dropdown-toggle btn btn-text btn-secondary btn-square"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <span className="icon-[tabler--menu-2] dropdown-open:hidden size-7"></span>
              <span className="icon-[tabler--x] dropdown-open:block hidden size-7"></span>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 border-2 border-black"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-default"
            >
              {navMenu}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-3">
            <a href="/">
              <img className="w-15 md:w-20" src={logo} alt="" />
            </a>
            <a
              className="link text-base-content/90 link-neutral text-lg font-semibold no-underline"
              href="/"
            >
              EcoVenture
            </a>
          </div>
        </div>
        <div className="navbar-center max-lg:hidden">
          <ul className="menu menu-horizontal p-0 rtl:ml-20 text-xl font-semibold">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end items-center gap-4 w-fit xl:w-auto">
          <div>{buttonLink}</div>

          <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
            <button
              id="dropdown-scrollable"
              type="button"
              className="dropdown-toggle flex items-center"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <div className="avatar">
                <div className="size-9 md:size-16 rounded-full">
                  <img src={user?.photoURL || avatarLogo} alt="avatar 1" />
                </div>
              </div>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden min-w-52 border-2 border-black"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-avatar"
            >
              <li className="dropdown-header gap-3 border-0 pt-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || avatarLogo} alt="avatar 1" />
                  </div>
                </div>
                <div>
                  <h6 className="text-base-content/90 text-base font-semibold">
                    {" "}
                    {user?.displayName || "John Doe"}
                  </h6>
                  <small className="text-base-content/50">
                    {" "}
                    {user?.email || "example@gmail.com"}
                  </small>
                </div>
              </li>
              <li>
                <hr className="border-base-content/25 -mx-2 mb-3" />
              </li>
              <li>
                <Link
                  onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="dashboard/profile"
                >
                  <span className="icon-[tabler--user]"></span>
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="/dashboard/setting"
                >
                  <span className="icon-[tabler--settings]"></span>
                  Settings
                </Link>
              </li>
              <li>
              <Link
                  onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="/dashboard/billing"
                >
                  <span className="icon-[tabler--settings]"></span>
                  Billings
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="icon-[tabler--help-triangle]"></span>
                  FAQs
                </a>
              </li>
              <li className="dropdown-footer gap-2">
                <Link
                  onClick={handleSignOutUser}
                  className="btn btn-error btn-soft btn-block"
                  href="#"
                >
                  <span className="icon-[tabler--logout]"></span>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
