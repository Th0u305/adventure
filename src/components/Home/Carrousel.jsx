import React, { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic2.jpg";
import pic4 from "../../assets/3.jpg";
import pic5 from "../../assets/25.jpg";
import { Carousel } from "flowbite-react";

const Carrousel = () => {
  return (
    <div className="h-72 md:h-96 lg:h-[30rem] xl:h-[60rem] relative bg-[#00000036] pointer-events-none mt-20 md:mt-25 xl:mt-0">
      <Carousel leftControl="." rightControl="." className="mix-blend-multiply">
        <img src={pic1} alt="..." />
        <img src={pic2} alt="..." />
        <img src={pic3} alt="..." />
        <img src={pic4} alt="..." />
        <img src={pic5} alt="..." />
      </Carousel>
      <div className="absolute top-[30%] xl:top-[40%] w-full text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white font-semibold ">
          Discover Nature's Wonders
        </h1>
        <p className="text-base lg:text-xl xl:text-2xl text-white md:mt-5 p-5 md:p-0">
          Explore breathtaking eco-adventures handpicked to connect you with the
          beauty of nature.
        </p>
      </div>
    </div>
  );
};

export default Carrousel;
