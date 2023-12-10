import React from "react";
import { Fade } from "react-reveal";
import "./Language.css"

const Language = () => {
  return (
    <section className="language-section py-10 bg-gradient-to-r from-black to-gray-600">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Languages</h2>
        <div className="grid grid-cols-1 m-5 sm:grid-cols-3 md:grid-cols-3 gap-3">
          <Fade cascade duration={500}>
            <div className="language-card p-2 flex items-center justify-center rounded-lg shadow-lg  bg-gray-700 animate-language-card md:w-96">
              <span className="text-white text-4xl">বাংলা</span>
            </div>
            <div className="language-card p-2 flex items-center justify-center rounded-lg shadow-lg bg-gray-700 animate-language-card md:w-96">
              <span className="text-white text-4xl">English</span>
            </div>
            <div className="language-card p-2 flex items-center justify-center rounded-lg shadow-lg bg-gray-700 animate-language-card md:w-96">
              <span className="text-white text-4xl">हिन्दी</span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Language;
