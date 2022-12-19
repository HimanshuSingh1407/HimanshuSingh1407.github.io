import React from "react";
import About from "./About";
import Calender from "./Calender";
import Contact from "./Contact";
import GithubAnalysis from "./GithubAnalysis";
import Home from "./Home";
import Project from "./Project";
import TechStack from "./TechStack";


const Allroutes = () => {
  return (
    <>
      <Home />
      <About />
      <Project />
      <TechStack />
      <GithubAnalysis />
      <Contact />
    </>
  );
};

export default Allroutes;
