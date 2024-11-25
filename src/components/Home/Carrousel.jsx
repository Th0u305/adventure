import React from "react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/8.jpg";
import pic4 from "../../assets/3.jpg";
import pic5 from "../../assets/pic3.jpg";


const Carrousel = () => {
  return (
    <div
      id="carousel-7"
      data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 4000 }'
      className=" w-full h-max md:h-96 lg:h-[30rem] xl:h-[57rem] relative bg-[#0000002f] mt-24 xl:mt-0"
    >
      <div class="carousel h-full rounded-none mix-blend-multiply">
        <div className="container_mouse absolute z-20 left-0 right-0 mx-auto bottom-5 lg:bottom-12 w-fit ">
          <span className="mouse-btn w-[25px] h-[50px] md:w-[30px] md:h-[60px] lg:w-[40px] lg:h-[80px]">
            <span className="mouse-scroll w-[12px] h-[12px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]"></span>
          </span>
          <span className="text-white">Scroll Down</span>
        </div>
        <div className="carousel-body opacity-0">
            <img src={pic1} className="object-cover carousel-slide" alt="..." />
            <img src={pic2} className="object-cover carousel-slide" alt="..." />{" "}
            <img src={pic3} className="object-cover carousel-slide" alt="..." />{" "}
            <img src={pic4} className="object-cover carousel-slide" alt="..." />{" "}
            <img src={pic5} className="object-cover carousel-slide" alt="..." />{" "}
        </div>
      </div>
      <div className="absolute top-[30%] xl:top-[40%] w-full text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white font-semibold ">
          Discover Nature's <br></br> Wonders
        </h1>
      </div>
    </div>
  );
};

export default Carrousel;