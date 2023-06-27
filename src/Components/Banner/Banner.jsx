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

const Banner = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="">
      <section className="banner-section  bg-gradient-to-r from-gray-900 to-purple-400 py-20">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <img
            src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais"
            alt="Your Image"
            className="rounded-full w-48 h-48 mb-8"
            data-aos="fade-right"
          />
          <h1 className="text-4xl font-bold text-white mb-4" data-aos="fade-up">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-white mb-8" data-aos="fade-up">
            I am a passionate developer
          </p>
          <div className="flex space-x-2 mb-8" data-aos="fade-up">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-300 btn"
            >
              <FaGithub className="mr-1" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn"
            >
              <FaLinkedin className="mr-1" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn"
            >
              <FaInstagram className="mr-2" />
              Instagram
            </a>
          </div>
          <p className="text-white text-lg mb-8" data-aos="fade-up">
            Short description about yourself and your skills goes here.
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
            <a
              href="/path/to/your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent btn btn-download"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-extrabold text-white">
              Welcome to My Resume
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Experienced Software Engineer with a passion for building web
              applications.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="bg-purple-500 text-white py-2 px-6 rounded-md text-base font-medium hover:bg-purple-600"
              >
                Download Resume
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12c0 4.69 2.99 8.68 7.16 10.1.53.1.72-.23.72-.5v-1.9c-2.33.4-2.82-1.17-2.82-1.17-.38-.97-.92-1.23-.92-1.23-.75-.51.06-.5.06-.5.83.06 1.27.85 1.27.85.74 1.27 1.95.9 2.42.69.07-.53.28-.9.52-1.1-1.83-.2-3.76-.92-3.76-4.09 0-.9.32-1.64.85-2.22-.09-.2-.37-1.05.08-2.18 0 0 .67-.22 2.2.85a7.84 7.84 0 0 1 2.07-.28c.7.01 1.4.1 2.06.28 1.53-1.07 2.2-.85 2.2-.85.45 1.13.17 1.98.08 2.18.53.58.85 1.32.85 2.22 0 3.18-1.93 3.89-3.76 4.09.29.26.54.77.54 1.56v2.31c0 .27.18.61.73.5C18.51 20.67 21 16.68 21 12c0-5.79-4.71-10.5-10.5-10.5z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 3c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v14c0 1.65-1.35 3-3 3h-8c-1.65 0-3-1.35-3-3v-14zm10 1h2v2h-2v-2zm-2 5h2v8h-2v-8zm-1 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-5-1h2v9h-2v-9zm-1 0v9h-2v-9h2z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.5C6.478 1.5 2.25 5.728 2.25 11.25v1.5C2.25 18.772 6.478 23 12 23s9.75-4.228 9.75-9.75v-1.5C21.75 5.728 17.522 1.5 12 1.5zm0 3.75a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm0 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zm4.377 1.635a.75.75 0 1 1 1.06 1.06l-2.607 2.606a.75.75 0 0 1-1.06 0l-1.976-1.975a.75.75 0 1 1 1.06-1.06l1.3 1.3 2.174-2.173z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://img.freepik.com/free-photo/laptop-with-office-stationery-personal-accessories-with-cup-tea-black-background_23-2148080334.jpg?size=626&ext=jpg&ga=GA1.1.1676688474.1687690117&semt=ais"
              alt="Resume Image"
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default Banner;
