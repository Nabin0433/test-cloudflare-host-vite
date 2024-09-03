import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import {} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className=" container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
              Bikram
            </h3>
            <p className="text-gray-400">
              {" "}
              Front-End Developer, specialising in web designing
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter Email"
                className=" w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 "
              />
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className=" border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center ">
          <p className="text-gray-400 ">
            &copy; {new Date().getFullYear()} Gyawali. All rights reserved
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/profile.php?id=100075501368068&mibextid=ZbWKwL"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href=" https://www.linkedin.com/in/Gyawali-gyawali-a545422b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/CoddingJourney/"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://chat.whatsapp.com/KPMm9Iu8xWp8jQvDdUasii"
              className="text-gray-400 hover:text-white"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
