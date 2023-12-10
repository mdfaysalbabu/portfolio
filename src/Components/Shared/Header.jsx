import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-gradient-to-r bg-opacity-30     from-gray-900 to-blue-400 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-red-400  font-bold text-2xl">Faysal.ME</div>
          <nav className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link
                to="#"
                className="text-gray-300 hover:bg-purple-700 px-3 py-2 rounded-md text-xl font-bold"
              >
                Home
              </Link>
              <Link
                to="#projects"
                className="text-gray-300 hover:bg-purple-700 px-3 py-2 rounded-md text-xl font-bold"
              >
                Projects
              </Link>
              <Link
                to="#contact"
                className="text-gray-300 hover:bg-purple-700 px-3 py-2 rounded-md text-xl font-bold"
              >
                Contact
              </Link>
              <Link
                to="#skill"
                className="text-gray-300 hover:bg-purple-700 px-3 py-2 rounded-md text-xl font-bold"
              >
                Skill
              </Link>
            </ul>
          </nav>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              )}
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
