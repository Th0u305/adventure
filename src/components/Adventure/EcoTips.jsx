import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/ContextProvider";

const EcoTips = () => {
  const {myRef} = useContext(AuthContext)
  return (
    <div className="mt-28" id="eco" ref={myRef}>
      <Helmet>
        <title>EcoVenture | Eco-Tips</title>
      </Helmet>
      <h1 className="text-3xl lg:text-5xl font-semibold text-center">
        General & Eco-Friendly Adventure Tips
      </h1>
      <div className="accordion accordion-bordered w-[85%] mx-auto mt-12">
        <div className="accordion-item active" id="payment-bordered">
          <button
            className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
            aria-controls="payment-bordered-collapse"
            aria-expanded="true"
          >
            <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Reduce Single-Use Plastics
          </button>
          <div
            id="payment-bordered-collapse"
            className="accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="payment-bordered"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
                Carry reusable bags, bottles, and straws to minimize plastic
                waste.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="delivery-bordered">
          <button
            className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
            aria-controls="delivery-bordered-collapse"
            aria-expanded="false"
          >
            <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Opt for Renewable Energy
          </button>
          <div
            id="delivery-bordered-collapse"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="delivery-bordered"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
                Consider solar panels or support green energy programs from your
                utility provider.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="cancel̉-bordered">
          <button
            className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
            aria-controls="cancel̉-bordered-collapse"
            aria-expanded="false"
          >
            <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Embrace Public Transport
          </button>
          <div
            id="cancel̉-bordered-collapse"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="cancel̉-bordered"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
                Walk, bike, or use public transport whenever possible to reduce
                carbon emissions.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="cancel̉-bordered">
          <button
            className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
            aria-controls="cancel̉-bordered-collapse"
            aria-expanded="false"
          >
            <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Leave No Trace
          </button>
          <div
            id="cancel̉-bordered-collapse"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="cancel̉-bordered"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
                WAlways clean up after yourself when exploring nature and stick
                to designated trails.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="cancel̉-bordered">
          <button
            className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
            aria-controls="cancel̉-bordered-collapse"
            aria-expanded="false"
          >
            <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Eco-Friendly Gear
          </button>
          <div
            id="cancel̉-bordered-collapse"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="cancel̉-bordered"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
                Use biodegradable soaps, solar-powered chargers, and reusable
                containers during adventures.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="cancel̉-bordered">
          <button
            className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start"
            aria-controls="cancel̉-bordered-collapse"
            aria-expanded="false"
          >
            <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
            <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
            Support Ethical Tourism
          </button>
          <div
            id="cancel̉-bordered-collapse"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="cancel̉-bordered"
            role="region"
          >
            <div className="px-5 pb-4">
              <p className="text-base-content/80 font-normal">
                Choose operators committed to preserving natural habitats and
                local cultures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoTips;
