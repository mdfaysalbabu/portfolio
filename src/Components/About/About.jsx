import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-purple-400 py-12">
      <h2 className="text-4xl font-extrabold text-white text-center mb-8">
        About Me
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais"
              alt="Profile"
              className="rounded-full w-80 mx-auto md:mx-0 md:mr-8"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-2">
              Hi, I'm MD Faysal Ahamed
            </h3>
            <div className="font-semibold">
              <p className="text-gray-200 mb-4">
                My background as a Mern Stack Developer, along with my education
                in Computer Science, have allowed me to attain a strong
                foundation of technical skills
              </p>
              <p className="text-gray-200 mb-4">
                I'm a passionate and experienced web developer with a strong
                focus on front-end development. I love creating beautiful and
                functional websites that provide a great user experience.
              </p>
              <p className="text-gray-200 mb-4">
                I am highly skilled with HTML, CSS, Javascript,and have
                experience working with frameworks such as React. I have over
                one year of experience with each of these technologies, and I am
                eager to learn even more technologies to sharpen my skill set.
                In addition to web technologies, I do have a passion for mobile
                technologies and Basic Python Programming Language as well.
              </p>
              <p className="text-gray-200 mb-4">
                I am constantly learning and exploring new technologies to stay
                up-to-date with the latest trends in web development. I am also
                a strong advocate for clean and maintainable code, ensuring
                scalability and long-term success for projects.
              </p>
              <p className="text-gray-200 mb-4">
                Let's work together to bring your ideas to life and create
                exceptional web experiences!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
