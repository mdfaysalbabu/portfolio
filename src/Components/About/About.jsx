import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { Reveal } from "react-reveal";
import "./About.css"
import Typewriter from "react-typewriter-effect";
import Aos from "aos";


const About = () => {
    const [typing, setTyping] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "My background as a MERN Stack Developer, along with my education in Computer Science, have allowed me to attain a strong foundation of technical skills..",
    "I'm a passionate and experienced web developer with a strong focus on front-end development. I love creating beautiful and functional websites that provide a great user experience...",
    "I am highly skilled with HTML, CSS, JavaScript, and have experience working with frameworks such as React. I have over one year of experience with each of these technologies, and I am eager to learn even more technologies to sharpen my skill set...",
    "I am constantly learning and exploring new technologies to stay up-to-date with the latest trends in web development. I am also a strong advocate for clean and maintainable code, ensuring scalability and long-term success for projects...",
    "In addition to web technologies, I have a passion for mobile technologies and Basic Python Programming Language as well Let's work together to bring your ideas to life and create exceptional web experiences!",
  ];

  useEffect(() => {
    setTyping(true);
    const timer = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [textIndex]);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="bg-gradient-to-r from-gray-900 to-purple-400 py-12">
      <h2 className="text-4xl font-extrabold text-white text-center mb-8">
        About Me
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div
              className="relative rounded-full w-80 h-80 overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="bg-image">
                <img
                  src="https://i.ibb.co/Jd2b5Mb/DSC-0430-01.jpg"
                  alt="Profile"
                  className="object-cover w-60 h-full image-animation"
                />
              </div>
              <div className="overlay"></div>
              <div className="icon-wrapper">
                <FaReact className="text-white text-6xl" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div
              className="about-text"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold text-orange-100 mb-2">
                Hi, I'm MD Faysal Ahamed
              </h3>
              <div className="font-semibold">
                <p className={`text-gray-200 mb-4 ${typing ? "typing" : ""}`}>
                  {texts[textIndex]}
                </p>
                <div className="flex items-center mt-6">
                  <div className="mr-4">
                    <FaHtml5 className="text-3xl text-teal-500" />
                  </div>
                  <div className="mr-4">
                    <FaCss3Alt className="text-3xl text-cyan-500" />
                  </div>
                  <div className="mr-4">
                    <FaJs className="text-3xl text-yellow-600" />
                  </div>
                  <div>
                    <FaReact className="text-3xl text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
