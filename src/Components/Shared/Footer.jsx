
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-300">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 ml-5 gap-2 md:mb-0">
          <img src="https://i.ibb.co/7jv6dgP/1685692815451.jpg" alt="Your Image" className="w-32 h-40 mt-5 rounded-full mx-auto md:mx-0 md:mr-4" />
          <div>
            <h2 className="text-2xl font-bold text-white">MD Faysal Ahamed</h2>
            <p className="text-lg text-white">MERN Stack Developer | UI/UX Designer</p>
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
          &copy; {new Date().getFullYear()} Faysal Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
