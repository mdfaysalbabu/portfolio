import React from "react";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Language from "../languaje/Language";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "../Education/Education";
import Typical from "react-typical";

const Banner = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="">
      <section className="banner-section  bg-gradient-to-r from-black to-gray-600 py-20">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <img
            src="https://i.ibb.co/f8fM6Xf/1685692815451-1-01.jpg"
            alt="Profile"
            className="rounded-full w-56 h-72 mx-auto md:mx-0 md:mr-8"
          />
          <h1 className="text-4xl font-bold text-white mb-4 text-center" data-aos="fade-up">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-orange-300 mb-8" data-aos="fade-up">
            <Typical
              loop={Infinity}
              steps={[
                "I am Mern Stack Developer",
                2000,
                "I am Web developer",
                2000,
                "I am Ui Designer",
                2000,
              ]}
            ></Typical>
          </p>
          <div className="flex space-x-2 mb-8" data-aos="fade-up">
            <a
              href="https://github.com/mdfaysalbabu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-400 btn"
            >
              <FaGithub className="mr-1" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/md-faysal-ahamed-undefined-045680278/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn bg-blue-600 "
            >
              <FaLinkedin className="mr-1" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/faysalbabuu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn bg-green-700"
            >
              <FaInstagram className="mr-2" />
              Instagram
            </a>
          </div>
          <p className="text-white text-lg mb-8 ml-5 text-center " data-aos="fade-up">
            My background as a MERN Stack Developer, along with my education in
            Computer  Science,<br /> have allowed me to attain a strong
            foundation of technical skills..
          </p>
          <div className="flex space-x-4" data-aos="fade-up">
            <a
              href="/MD Faysal Ahamed Mern Stack resume (3).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-error btn btn-download"
              download
            >
              Download Resume
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
