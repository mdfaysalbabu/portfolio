import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Reveal, Zoom } from "react-reveal";

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
        <Zoom  duration={800} delay={ 200}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <Reveal effect="fadeInUp">
              <div className="bg-purple-500 rounded-lg shadow-lg p-6 text-white">
                <img
                  className="rounded-xl h-56"
                  src="https://www.ecopathshalaandcollege.edu.bd/img/gallery/large/3f01583f4f49a85c8bca76908de3e183.jpg"
                  alt=""
                />
                <h3 className="text-xl text-orange-200 font-semibold mb-2">College</h3>
                <p className="text-gray-300 font-bold mb-4">Eco College</p>
                <p className="text-white">
                My college, Eco College, is a top-ranked institution located in the bustling city of Thakurgaon Bangladesh.i have completed my college life in 2018.
                </p>
              </div>
            </Reveal>
            <Reveal effect="fadeInUp" delay={200}>
              <div className="bg-purple-500 rounded-lg shadow-lg p-6 text-white">
                <img
                  className="rounded-xl h-56"
                  src="https://images.shiksha.com/mediadata/images/1683793709phps6rTFg.jpeg"
                  alt=""
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-200">
                  Bachelor's Degree
                </h3>
                <p className="text-gray-300 font-bold mb-4">
                  Haldia Institute Of Technology
                </p>
                <p className="text-white">
                My University, Haldia Institute of Technology, is a top-ranked institution located in the bustling Kolkata India.i have completed my Versity life in 2023..
                </p>
              </div>
            </Reveal>
            <Reveal effect="fadeInUp" delay={400}>
              <div className="bg-purple-500 rounded-lg shadow-lg p-6 text-white">
                <img
                  className="rounded-xl h-56"
                  src="https://www.programming-hero.com/img/programming-hero-features.png"
                  alt=""
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-200">Online Courses</h3>
                <p className="text-gray-300 mb-4 font-bold">Programming Hero</p>
                <p className="text-white">
                Programming Hero One of the Best Online Course in Bangladesh .this course duration was 6 months i have completed programming hero course perfectly.
                </p>
              </div>
            </Reveal>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Education;
