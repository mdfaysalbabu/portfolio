import React from "react";
import { Fade } from "react-reveal";
import "./Language.css"

const Language = () => {
  return (
    <section className="language-section py-10 bg-gradient-to-r from-gray-900 to-purple-400">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Languages</h2>
        <div className="grid grid-cols-1 m-5 sm:grid-cols-3 md:grid-cols-3 gap-3">
          <Fade cascade duration={500}>
            <div className="language-card p-2 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-r from-purple-400 to-violet-500 animate-language-card">
              <span className="text-white text-6xl">বাংলা</span>
            </div>
            <div className="language-card p-2 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-r from-purple-400 to-violet-500 animate-language-card">
              <span className="text-white text-6xl">English</span>
            </div>
            <div className="language-card p-2 flex items-center justify-center rounded-lg shadow-lg bg-gradient-to-r from-purple-400 to-violet-500 animate-language-card">
              <span className="text-white text-6xl">हिन्दी</span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Language;
