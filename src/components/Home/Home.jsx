import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Context/ContextProvider";
import { NavLink, useLocation } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { CiMoneyBill } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { SiLevelsdotfyi } from "react-icons/si";
import { Helmet } from "react-helmet-async";

AOS.init();
const Home = () => {
  const { user, allData, setSingleData , myRef} = useContext(AuthContext);
  const [slicedData, setSlicedData] = useState([]);

  useEffect(() => {
    setSlicedData(allData.sort(() => Math.random() - 0.5).slice(0, 6));
  }, [allData]);

  const singlePageData = (id) => {
    setSingleData(id);
    localStorage.setItem("singleData", JSON.stringify(id));
  };

  return (
    <div className=" mt-12 md:mt-28" id="home" ref={myRef}>
      <Helmet>
        <title>EcoVenture | Home</title>
      </Helmet>
      <div className="p-5">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center">
          Adventures for Every Explorer
        </h1>
        <p className=" text-lg lg:text-xl text-center p-10">
          From serene mangroves to thrilling mountain treks, there's something
          for every traveler.
        </p>
      </div>

      <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:mt-0 mb-5 md:mb-12 p-10 lg:p-15 xl:p-0">
        {slicedData.map((item) => (
          <div key={item.id} data-aos={item.fade} className="">
            <div className="card group hover:shadow h-full p-8 rounded-3xl">
              <figure>
                <img
                  src={item.image}
                  alt="Shoes"
                  className="rounded-3xl transition-transform duration-1000 group-hover:scale-110 w-fit"
                />
              </figure>
              <div className="card-body gap-4 space-y-5">
                <h5 className="card-title mb-2.5 text-3xl">
                  {item.adventureTitle}
                </h5>
                <p className="text-gray-800 text-lg inline-flex items-center gap-4">
                  <BiCategory className="text-3xl" />
                  Category : {item.category}
                </p>
                <p className="text-gray-800 text-lg inline-flex items-top gap-4">
                  <TbListDetails className="text-6xl" />
                  Details: {item.shortDescription}
                </p>
                <p className="text-gray-800 text-lg inline-flex items-center gap-4">
                  <CiLocationArrow1 className="text-3xl" />
                  Location: {item.location}
                </p>
                <p className="text-gray-800 text-lg inline-flex items-center gap-4 ">
                  <CiMoneyBill className="text-3xl" />
                  AdventureCost: {item.adventureCost}
                </p>
                <p className="text-gray-800 text-lg inline-flex items-center gap-4">
                  <SiLevelsdotfyi className="text-3xl" />
                  Adventure Level: {item.adventureLevel}
                </p>
              </div>
              <div className="flex justify-center items-center mt-5 mb-5">
                <div className="card-actions justify-center items-center5">
                  <NavLink
                      onClick={() => singlePageData(item)}
                      to={user ? `adventure/${item.id}` : "/login"}
                      className="btn hover:scale-110 ease-in-out	duration-300 btn-wide h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                    >
                      Explore Now
                    </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-12 ">
        <NavLink
          to="adventure"
          className="btn hover:scale-110 ease-in-out	duration-300 w-[15em] h-16 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
        >
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
