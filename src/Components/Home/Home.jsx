import React from "react";
import About from "../About/About";
import Education from "../Education/Education";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Language from "../languaje/Language";
import Contact from "../Contact/Contact";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="bg-black">
        <div>
            <Banner></Banner>
        </div>
      <div className="">
        <About></About>
      </div>
      <div className="">
        <Education></Education>
      </div>
      <div>
        <Skill></Skill>
      </div>
      <div>
        <Project></Project>
      </div>
      <div>
        <Language></Language>
      </div>
      <div className="">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
