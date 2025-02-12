import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8  md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-4xl font-bold hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Bikram
        </div>
        <div className="space-x-6 mt-3">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 ">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        {/* <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          id="contact "
        >
          Contact Me
        </button> */}
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact ME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
