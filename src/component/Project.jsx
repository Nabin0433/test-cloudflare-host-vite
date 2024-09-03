import React from "react";
import blogManagement from "../assets/Blog.png";
import todoApp from "../assets/todo.png";
import website from "../assets/Website.png";

const projects = [
  {
    id: "1",
    name: "Blog Management",
    technologies: "ReactJS",
    image: blogManagement,
    github: "https://github.com/CoddingJourney/Blog-MS-redux-toolkit",
  },
  {
    id: 2,
    name: "Todo App",
    technologies: "JavaScript",
    image: todoApp,
    github: "https://github.com/CoddingJourney/Task-Managing-System",
  },
  {
    id: 3,
    name: "Commerical Website",
    technologies: "ReactJs",
    image: website,
    github: "https://github.com/CoddingJourney/first-website",
  },
];
const Project = () => {
  return (
    <div className=" bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12  transform duration-300  cursor-pointer  hover:scale-125">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 "
            >
              <img
                src={project.image}
                alt={project.name}
                className=" rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block  bg-gradient-to-r from-green-400 to-blue-500  text-white px-4 rounded-full"
                target="-blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
