import React from "react";
//array of services
const services = [
  {
    id: 1,
    title: "Web Design",
    Description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development ",
    Description: "Building responsive and interative user interfaces.",
  },
  {
    id: 3,
    title: "Content Writing",
    Description: "Writing Content for your business and companies.",
  },
  //   {
  //     id: 4,
  //     title: "Digita Marketing",
  //     Description: "Promote your bussiness with our digital matketing team.",
  //   },
];
//Service Section

const Service = () => {
  return (
    <div className=" bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12  transform duration-300  cursor-pointer  hover:scale-125">
          My Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg over: shadow-lg transform transition-transform duration-300  cursor-pointer hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-green-600 to-blue-400 ">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300 hover:text-blue-50 ">
                {service.Description}
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-50 "
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
