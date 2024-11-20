import React, { useContext, useState } from "react";
import avatarLogo from "../../../../assets/man.gif";
import { Link, useNavigate } from "react-router-dom";
import { CiLink } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Money from "./DashboardPages/Money";
import { AuthContext } from "../../../Context/ContextProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { firebaseAuth } from "../../../firebase/firebase.config";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

import {
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { loading, user, updateUserProfile, myRef } =
    useContext(AuthContext);
  const [viewWallet, setViewWallet] = useState(false);
  const [viewProfile, setVieProfile] = useState(true);
  const [viewSetting, setViewSetting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  if (loading) {
    return <span class="loading loading-ring loading-lg hidden"></span>;
  }
  const handleBtn = (id) => {
    if (id === "wallet") {
      setVieProfile(false);
      setViewWallet(true);
      setViewSetting(false);
    } else if (id === "profile") {
      setVieProfile(true);
      setViewWallet(false);
      setViewSetting(false);
    } else if (id === "setting") {
      setVieProfile(false);
      setViewWallet(false);
      setViewSetting(true);
    }
  };

  const updateProfile = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({ displayName: name, email: email, photoURL: photo })
      .then(() => {
        if (name) {
          toast.success("Successfully changed your name");
          e.target.reset();
          navigate("/dashboard");
        }
        if (email) {
          toast.success("Successfully changed your Email Id");
          e.target.reset();
          navigate("/dashboard");
        }
        if (photo) {
          toast.success("Successfully changed your Profile Picture");
          e.target.reset();
          navigate("/dashboard");
        }
        if (password) {
          if (password.length < 6) {
            setErrorMessage("Password should be 6 characters or longer ");
            return;
          }
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!passwordRegex.test(password)) {
            setErrorMessage(
              "Password must contain at least one uppercase, lowercase, number, special character"
            );
            return;
          }
          setErrorMessage("");
          e.target.reset();
          navigate("/dashboard");

          return toast.success("Successfully changed your password");
        }
      })
      .catch((err) => {
        toast.error("Please try again")
      });
  };

  const handleDeleteUser = async () => {
    const user = firebaseAuth.currentUser;

    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "Click confirm to enter your password.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    });

    if (isConfirmed && user) {
      const { value: password } = await Swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
          maxlength: "10",
          autocapitalize: "off",
          autocorrect: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Submit",
        cancelButtonText: "Cancel",
      });

      try {
        // Reauthenticate the user
        const credential = EmailAuthProvider.credential(user.email, password); // Replace with actual password
        await reauthenticateWithCredential(user, credential);

        // Delete the user
        await deleteUser(user);
        toast.success("User Deleted");
        navigate("/");
      } catch (error) {
        toast.error("Please give correct credential");
      }
    } else {
      toast.error("No user logged in");
    }
  };

  return (
    <div className="flex lg:h-[170vh] 2xl:h-[120vh] lg:items-end p-8" ref={myRef}>
      <Helmet>
        <title>EcoVenture | Dashboard</title>
      </Helmet>
      <div className="w-full max-w-4xl max-md:max-w-xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center">Dashboard</h2>
        <div className="bg-white grid grid-cols-1 lg:grid-cols-3 p-8 shadow-md rounded-md overflow-hidden gap-5 ">
          <div className="border-2 rounded-2xl pt-12 flex flex-col justify-start items-center mb-12">
            {/* Profile Picture */}
            <div className="mb-6 text-center">
              <img
                src={user ? user.photoURL : avatarLogo}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-300"
              />
              <div className="mt-8">
                <h1 className="text-2xl">{user?.displayName || "John Doe"}</h1>
                <p className="text-lg">{user?.email || "example@gmail.co"}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleBtn("profile")}
              className="w-[90%] mt-5 mb-5 py-2.5 px-4 text-base btn btn-lg hover:scale-105 duration-300 ease-in-out tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Profile
            </button>
            <button
              type="button"
              onClick={() => handleBtn("wallet")}
              className="w-[90%] mb-5 py-2.5 px-4 text-base btn btn-lg hover:scale-105 duration-300 ease-in-out tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Wallet
            </button>
            <button
              type="button"
              onClick={() => handleBtn("setting")}
              className="w-[90%] mb-8 py-2.5 px-4 text-base btn btn-lg hover:scale-105 duration-300 ease-in-out tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Settings
            </button>
          </div>

          {/* profile form  */}

          {viewProfile && (
            <form
              onSubmit={updateProfile}
              className="md:w-[100%] mx-auto p-12 col-span-2 bg-gray-100 rounded-2xl"
            >
              <div className="space-y-6">
                <div>
                  <label className="text-gray-800 text-lg mb-2 block">
                    Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      className="bg-white border border-gray-300 w-full text-base text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter name"
                    />
                    <FaUser className="absolute right-4 text-2xl text-gray-400" />
                  </div>
                </div>
                <div>
                  <div className=" rounded-lg border-2 border-gray-500 mb-8 p-5 flex justify-evenly items-center">
                    <div className="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-36">
                      <label
                        for="upload"
                        className="flex flex-col items-center gap-2 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 fill-white stroke-indigo-500"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="text-gray-600 font-medium">
                          Upload Picture
                        </span>
                      </label>
                      <input id="upload" type="file" className="hidden" />
                    </div>

                    <p className="text-xl mt-5">Or upload via link</p>
                  </div>
                  <label className="text-gray-800 text-lg mb-2 block">
                    Photo Url
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="photo"
                      type="text"
                      className="bg-white border border-gray-300 w-full text-base text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      placeholder="Url"
                    />

                    <CiLink className="absolute right-4 text-3xl text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-lg mb-2 block">
                    Email Id
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      className="bg-white border border-gray-300 w-full text-base text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter email"
                    />
                    <HiOutlineMailOpen className="absolute right-4 text-2xl text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-lg mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="bg-white border border-gray-300 w-full text-base text-gray-800 pl-4 pr-10 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4  text-2xl text-gray-400 cursor-pointer"
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </button>
                  </div>
                  <p className="text-red-600">{errorMessage}</p>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-base btn btn-lg hover:scale-105 duration-300 ease-in-out tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Save Changes
                </button>
              </div>
            </form>
          )}

          {viewWallet && <Money></Money>}
          {viewSetting && (
            <div className="flex justify-evenly items-center flex-col w-full col-span-2 bg-gray-100 rounded-2xl">
              <div className="flex justify-center items-center flex-col gap-2">
                <img
                  className="w-40 h-36 rounded-full"
                  src={user?.photoURL || avatarLogo}
                  alt=""
                />
                <h1 className="text-2xl">{user.displayName || "John Doe"}</h1>
                <p>{user?.email || "example@gmail.com"}</p>
              </div>

              <button
                type="button"
                onClick={() => handleDeleteUser()}
                className="w-[15em] mb-8 py-2.5 px-4 text-base btn btn-lg hover:scale-105 duration-300 ease-in-out tracking-wide rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Delete Account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
