import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Reveal } from "react-reveal";

const Education = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className="bg-gradient-to-r from-gray-900 to-purple-400 py-12">
      <div className="container mx-auto">
        <h2
          className="text-3xl text-center font-bold text-white mb-8"
          data-aos="fade-up"
        >
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Reveal effect="fadeInUp">
            <div className="bg-purple-500 rounded-lg shadow-lg p-6 text-white">
                <img className="rounded-xl h-56" src="https://www.ecopathshalaandcollege.edu.bd/img/gallery/large/3f01583f4f49a85c8bca76908de3e183.jpg" alt="" />
              <h3 className="text-xl font-semibold mb-2">College</h3>
              <p className="text-gray-200 mb-4">Eco College</p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae dapibus lacus, non tincidunt urna. Nullam eu consectetur
                dolor.
              </p>
            </div>
          </Reveal>
          <Reveal effect="fadeInUp" delay={200}>
            <div className="bg-purple-500 rounded-lg shadow-lg p-6 text-white">
                <img  className="rounded-xl h-56" src="https://images.shiksha.com/mediadata/images/1683793709phps6rTFg.jpeg" alt="" />
              <h3 className="text-xl font-semibold mb-2">Bachelor's Degree</h3>
              <p className="text-gray-200 mb-4">Haldia Institute Of Technology</p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae dapibus lacus, non tincidunt urna. Nullam eu consectetur
                dolor.
              </p>
            </div>
          </Reveal>
          <Reveal effect="fadeInUp" delay={400}>
            <div className="bg-purple-500 rounded-lg shadow-lg p-6 text-white">
              <img className="rounded-xl h-56" src="https://www.programming-hero.com/img/programming-hero-features.png" alt="" />
              <h3 className="text-xl font-semibold mb-2">Online Courses</h3>
              <p className="text-gray-200 mb-4">Programming Hero</p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae dapibus lacus, non tincidunt urna. Nullam eu consectetur
                dolor.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
