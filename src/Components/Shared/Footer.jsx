
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-300">
      {/* <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-white text-sm">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div> */}
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 ml-5 gap-2 md:mb-0">
          <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1676688474.1687690117&semt=ais" alt="Your Image" className="w-32 h-32 mt-5 rounded-full mx-auto md:mx-0 md:mr-4" />
          <div>
            <h2 className="text-2xl font-bold text-white">MD Faysal Ahamed</h2>
            <p className="text-lg text-white">Frontend Developer | UI/UX Designer</p>
          </div>
        </div>
        <div className="flex space-x-4 mr-5">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
            <FaLinkedin size={32} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
            <FaInstagram size={32} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
