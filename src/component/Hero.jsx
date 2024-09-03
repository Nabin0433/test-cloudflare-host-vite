import React from "react";
import HeroImage from "../assets/hero-image.jpg";
import { Document } from "react-pdf";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className=" mx-auto  mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 cursor-pointer hover:scale-105"
      />
      <div className="mx-4">
        <h1 className="text-4xl font-bold">
          I'M {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            {" "}
            Bikram Gyawali
          </span>
          , Front-End Developer
        </h1>
        <p className="mt-4  text-lg text-gray-300">
          I can build modern and responsive web application for you.
        </p>
      </div>
      <div className="mt-8 space-x-5">
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "
        >
          {" "}
          Contact{" "}
        </a>

        <a
          download="resume.pdf"
          href="../../../resume.pdf"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full "
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
