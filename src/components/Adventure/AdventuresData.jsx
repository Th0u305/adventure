import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import ErrorPage from "../ErrorPage/ErrorPage";

const AdventuresData = () => {
  const { filteredData , setSingleData} = useContext(AuthContext);

  const singlePageData = (id) => {
    localStorage.setItem("singleData", JSON.stringify(id))
    setSingleData(id);
  };
  return (
    <div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-12">
        {
          filteredData.length > 0 ?  filteredData.map((item) => (
            <div key={item.id} className="">
              <div className="card group hover:shadow rounded-3xl h-full">
                <figure>
                  <img
                    src={item.image}
                    alt="Shoes"
                    className="transition-transform duration-1000 group-hover:scale-110"
                  />
                </figure>
                <div className="card-body gap-4">
                  <h5 className="card-title mb-2.5">{item.adventureTitle}</h5>
                  <p className="text-gray-600">Category : {item.category}</p>
                  <p className="text-gray-600">
                    Details: {item.shortDescription}
                  </p>
                  <p className="text-lg text-gray-600">
                    Location: {item.location}
                  </p>
                  <p className="text-lg text-gray-600">
                    Adventure Level: {item.adventureLevel}
                  </p>
                  <div className="card-actions justify-center items-center5">
                    <NavLink
                      onClick={() => singlePageData(item)}
                      to={`${item.id}`}
                      className="btn hover:scale-110 ease-in-out	duration-300 btn-wide h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                    >
                      Explore Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )) : <div className="col-span-3 flex flex-col justify-center items-center h-[40vh]">
            <h1 className="text-8xl font-semibold">404</h1>
            <p className="text-lg">No data available </p>
          </div> 
        }
       
      </div>
    </div>
  );
};

export default AdventuresData;
