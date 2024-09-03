import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Service from "./component/Service";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
