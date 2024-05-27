import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;