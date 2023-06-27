import React from "react";
import {
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Get in Touch
        </h2>
        <div className="flex flex-col sm:flex-row mt-8">
          <div className="w-full sm:w-1/2 pr-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send me a message
            </h3>
            <form
              action="https://formsubmit.co/mdfaysalahamed898@gmail.com"
              method="POST"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-gray-100 text-gray-800 px-4 py-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-100 text-gray-800 px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md bg-gray-100 text-gray-800 px-4 py-2"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-purple-500 py-2 px-6 rounded-md text-base font-medium hover:bg-purple-100"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-start items-start sm:mt-0">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-lg text-white">
                Feel free to contact me via phone, email, or follow me on social
                media.
              </p>
            </div>
            <div className="flex flex-col space-y-4 text-start">
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-6 w-6 text-white mr-2" />
                <p className="text-white">Thakurgaon 5100 Bangladesh</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="h-6 w-6 text-white mr-2" />
                <a
                  href="tel:+1234567890"
                  className="text-white hover:underline"
                >
                  +8801797657407
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-6 w-6 text-white mr-2" />
                <a
                  href="mailto:yourname@gmail.com"
                  className="text-white hover:underline"
                >
                  mdfaysalahamed898@gmail.com
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6 text-white hover:text-purple-200 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-6 w-6 text-white hover:text-purple-200 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
