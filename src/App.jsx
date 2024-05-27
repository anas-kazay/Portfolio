import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Essay1 from "./Components/Essay1";
import Essay2 from "./Components/Essay2";
import { FaHandPointRight } from "react-icons/fa";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 f-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container px-4 mx-auto">
          <Link to={"/essay1"}>
            <button className=" fixed text-white right-10 top-10 bg-purple-900 hover:bg-purple-800 py-1 px-2 rounded">
              <FaHandPointRight className="inline-block mr-2" /> Essay 1
            </button>
          </Link>
          <Link to={"/essay2"}>
            <button className=" fixed text-white right-10 top-20 bg-purple-900 hover:bg-purple-800 py-1 px-2 rounded">
              <FaHandPointRight className="inline-block mr-2" /> Essay 2
            </button>
          </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="essay1" element={<Essay1 />} />
            <Route path="essay2" element={<Essay2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
