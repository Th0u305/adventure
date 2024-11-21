import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { NavLink } from "react-router-dom";
import AdventuresData from "./AdventuresData";
import { Helmet } from "react-helmet-async";

const Adventure = () => {
  const { category, setFilteredData, allData, myRef } =
    useContext(AuthContext);

  const btnCategory = (id) => {
    const filtered = allData.filter((item) => item.category === id);
    setFilteredData(filtered);
  };

  return (
    <div className="mt-12 xl:mt-28" id="adventure" ref={myRef}>
      <Helmet>
        <title>EcoVenture | Adventure</title>
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl p-2 font-semibold">
        Plan Your Next Getaway
        </h1>
        <p className="text-xl p-5">
        Find your ideal eco-adventure and start planning your escape.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-0 items-center justify-between xl:items-start">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-1 grid-rows-1 gap-5 md:w-[80%] xl:w-fit">
          {category.map((item) => (
            <NavLink
              key={item.id}
              onClick={() => btnCategory(item.category)}
              className="btn h-16 bg-[#37474F] text-lg font-semibold text-white border-none hover:bg-[#2196F3] focus:bg-[#2196F3] hover:scale-110 ease-in-out duration-300	"
            >
              {item.category}
            </NavLink>
          ))}
        </div>

        <div className="w-[90%] md:w-[80%] lg:w[70%] xl:w-[80%] 2xl:w-[85%]">
          {<AdventuresData></AdventuresData>}
        </div>
      </div>
    </div>
  );
};
export default Adventure;
