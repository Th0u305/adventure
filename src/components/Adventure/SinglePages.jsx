import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import moment from "moment";
import animation from "../../assets/animation.gif";
import 'animate.css';

import { BiCategory } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { CiMoneyBill } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'

const SinglePages = () => {
  const [singleData2, setSingleData2] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("singleData"));
    setSingleData2(data);
  }, []);

  const {
    id,
    adventureTitle,
    image,
    category,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    specialInstructions,
    maxGroupSize,
  } = singleData2;

  const handleConsultation = () => {
    const currentHour = new Date().getHours();
    if (!bookingAvailability) {
      return toast.error("Booking isn'n available right now");
    }
    if (!user) {
      navigate("/login");
    } else {
      if (currentHour >= 10 && currentHour < 20) {
        Swal.fire({
          icon: "success",
          title: "Thank you for choosing us",
          text: "Your adventure cost added to the billing",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        window.open("https://meet.google.com", "_blank");
      } else {
        Swal.fire({
          title: "404",
          text: "Our experts are available for consultation between 10:00 AM and 8:00 PM. Please try again during these hours.",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
      }
    }
  };

  return (
    <section className="mt-28 relative">
      <Helmet>
        <title>EcoVenture | Adventures</title>
      </Helmet>
      <div className="text-center mb-12">
        <p className="text-lg">{moment().format("MMMM Do YYYY, h:mm a")}</p>

        <h1 className="text-3xl lg:text-5xl font-semibold mt-5 mb-5">
          Create Lasting Memories
        </h1>
        <p className="text-base lg:text-lg">
          Embark on journeys that will stay with you forever.
        </p>
        <div className="mt-12">
          <h2 className="text-2xl lg:text-3xl mb-5 font-semibold">
            Consultation Time
          </h2>
          <p className="text-base lg:text-lg ">
            Time is between 10:00am - 8:00pm
          </p>
        </div>
      </div>
      <div key={id} className="w-[85%] md:w-[70%] xl:w-[60%] mx-auto">
        <div className="card group hover:shadow h-full p-6 xl:p-12 rounded-3xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
              className="transition-transform duration-1000 group-hover:scale-110 w-fit rounded-3xl"
            />
          </figure>
          <div className="card-body gap-4 space-y-5">
            <h5 className="card-title mb-2.5 text-3xl">{adventureTitle}</h5>
            <p className="text-gray-800 text-lg inline-flex items-center gap-4">
              <BiCategory className="text-3xl" />
              Category : {category}
            </p>
            <p className="text-gray-800 text-lg inline-flex items-center gap-4">
              <TbListDetails className="text-8xl md:text-5xl lg:text-3xl" />
              Details: {shortDescription}
            </p>
            <p className="text-gray-800 text-lg inline-flex items-center gap-4">
              <CiLocationArrow1 className="text-3xl" />
              Location: {location}
            </p>
            <p className="text-gray-800 text-lg inline-flex items-center gap-4 ">
              <CiMoneyBill className="text-3xl" />
              AdventureCost: {adventureCost}
            </p>
            <p className="text-gray-800 text-lg inline-flex items-center gap-4">
              <MdOutlineEventAvailable className="text-3xl" />
              BookingAvailability:{" "}
              <p
                className={`border-2 rounded-full px-5 py-1 
                      ${
                        bookingAvailability
                          ? "border-green-600 bg-[#a7f0aa]"
                          : "border-red-600 bg-red-300"
                      }`}
              >
                {bookingAvailability ? "Available" : "Not Available"}
              </p>
            </p>
            <ul className="flex flex-col justify-start gap-5 items-top items-start">
              <p className="text-gray-800 text-lg inline-flex items-center gap-4 ">
                <MdOutlineIntegrationInstructions className="text-3xl" />
                EcoFriendlyFeatures:{" "}
              </p>
              <div>
                <li className="list-disc text-gray-800 text-base ml-12">
                  {ecoFriendlyFeatures
                    ? ecoFriendlyFeatures[0]
                    : ecoFriendlyFeatures}
                </li>
                <li className="list-disc text-gray-800 text-base ml-12">
                  {ecoFriendlyFeatures
                    ? ecoFriendlyFeatures[1]
                    : ecoFriendlyFeatures}
                </li>
              </div>
            </ul>
            <p className="text-gray-800 text-lg inline-flex items-center gap-4 ">
              <MdAccessTimeFilled className="text-3xl" />
              Duration: {duration}
            </p>
            <ul className="flex flex-col justify-start gap-5 items-top items-start">
              <p className="text-gray-800 text-lg inline-flex items-center gap-4 ">
                <MdOutlineIntegrationInstructions className="text-3xl" />
                IncludedItems:{" "}
              </p>
              <div>
                <li className="list-disc text-gray-800 text-base ml-12">
                  {includedItems ? includedItems[0] : includedItems}
                </li>
                <li className="list-disc text-gray-800 text-base ml-12">
                  {includedItems ? includedItems[1] : includedItems}
                </li>
              </div>
            </ul>
            <p className="text-gray-800 text-lg inline-flex items-center gap-4 ">
              <MdGroups className="text-3xl" />
              MaxGroupSize: {maxGroupSize}
            </p>
            <ul className="flex flex-col justify-start gap-5 items-top items-start">
              <p className="text-gray-800 text-lg inline-flex items-center gap-4 ">
                <MdOutlineIntegrationInstructions className="text-3xl" />
                SpecialInstructions:{" "}
              </p>
              <div>
                <li className="list-disc text-gray-800 text-base ml-12">
                  {specialInstructions
                    ? specialInstructions[0]
                    : specialInstructions}
                </li>
                <li className="list-disc text-gray-800 text-base ml-12">
                  {specialInstructions
                    ? specialInstructions[1]
                    : specialInstructions}
                </li>
              </div>
            </ul>

            <p className="text-gray-800 text-lg inline-flex items-center gap-4">
              <SiLevelsdotfyi className="text-3xl" />
              Adventure Level: {adventureLevel}
            </p>
          </div>

          <div className="card-actions justify-center items-center5">
            <button
              onClick={handleConsultation}
              className="btn hover:scale-110 ease-in-out	duration-300 btn-wide h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
            >
              Talk with Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePages;
