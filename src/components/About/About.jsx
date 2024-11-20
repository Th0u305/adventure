import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/ContextProvider";

const About = () => {
  const { myRef } = useContext(AuthContext);
  return (
    <div className="space-y-8 mt-28 w-[85%] mx-auto" ref={myRef}>
      <Helmet>
        <title>EcoVenture | About</title>
      </Helmet>
      <div className="space-y-5 text-center">
        <h1 className=" text-3xl lg:text-5xl font-semibold">About Us</h1>
        <p className="text-base lg:text-lg">
          At EcoVentures Hub, we’re passionate about connecting people with the
          beauty of nature while promoting sustainable travel. Our mission is to
          inspire eco-conscious explorers to embark on extraordinary journeys
          that respect and preserve the environment. We curate unique
          eco-friendly experiences—from tranquil forest expeditions to thrilling
          ocean dives—designed to leave a minimal footprint while maximizing
          adventure. Every destination and activity we feature is carefully
          chosen to align with our values of conservation, community support,
          and sustainability. Join us in exploring the wonders of our planet
          responsibly, one adventure at a time.
        </p>
      </div>

      <div className="space-y-5 text-center">
        <h1 className="text-3xl lg:text-4xl">🌿 Our Mission</h1>
        <p className="text-base lg:text-lg">
          To inspire sustainable travel by offering curated adventures that
          promote environmental conservation, community support, and respect for
          local cultures.
        </p>
        <div className="space-y-5 text-center">
          <h1 className="text-3xl lg:text-4xl">🌏 Why Choose Us?</h1>
          <ul className="list-disc text-base lg:text-lg ml-5 text-left">
            <li>
              Eco-Conscious Journeys: From lush forests to crystal-clear oceans,
              all our adventures are designed with sustainability in mind.
            </li>
            <li>
              Authentic Experiences: We partner with local communities to bring
              you culturally enriching and meaningful travel.
            </li>
            <li>
              Adventure for All: Whether you seek a thrilling trek, a serene
              camping retreat, or a wildlife safari, we have something for every
              explorer.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
