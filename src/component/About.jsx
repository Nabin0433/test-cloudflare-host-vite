import React from "react";
import AboutImage from "../assets/about-me.png";
// import HeroImage from "../assets/hero-image.jpg";

const About = () => {
  return (
    <div className=" bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12  transform duration-300  cursor-pointer  hover:scale-125">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-70 h-80 rounded-lg object-cover mb-8 md:mb-0 transform transition-transform duration-400 cursor-pointer hover:scale-125   "
          />
          <div className="flex-1 ">
            <p className="text-lg mb-8 ">
              I am a passionate front-End Developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in frontend technologies, I strive to create seamless and
              efficient user experiences.
            </p>

            {/* Skill */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 h-10">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 cursor-pointer hover:scale-105 w-10/12"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 h-10">
                  React Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 cursor-pointer hover:scale-105 w-11/12"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 h-10">
                  C
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300  cursor-pointer hover:scale-105 w-5/12"></div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 h-10">
                  Python
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 cursor-pointer hover:scale-105 w-4/12"></div>
                </div>
              </div>
            </div>

            {/* Experiences */}
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h2>
                <p>Years Experience</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h2>
                <p>Project Completed</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h2>
                <p>New Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
