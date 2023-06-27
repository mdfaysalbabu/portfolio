import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleNavbar = () => {
  //     setIsOpen(!isOpen);
  //   };
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
    // <nav className="bg-gradient-to-r bg-opacity-30     from-gray-900 to-blue-400">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex-shrink-0">
    //         <h1 className="text-white font-bold">My Portfolio</h1>
    //       </div>
    //       <div className="block md:hidden">
    //         <button
    //           className="text-white hover:bg-purple-700 focus:outline-none focus:bg-purple-700 px-3 py-2 rounded-md"
    //           onClick={toggleNavbar}
    //         >
    //           <svg
    //             className="h-6 w-6 fill-current"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //           >
    //             {isOpen ? (
    //               <path
    //                 fillRule="evenodd"
    //                 clipRule="evenodd"
    //                 d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
    //               />
    //             ) : (
    //               <path
    //                 fillRule="evenodd"
    //                 clipRule="evenodd"
    //                 d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16ZM4 21H20V23H4V21Z"
    //               />
    //             )}
    //           </svg>
    //         </button>
    //       </div>
    //       <div
    //         className={`${
    //           isOpen ? "block" : "hidden"
    //         } md:block md:flex md:items-center md:w-auto`}
    //       >
    //         <div className="ml-10 flex items-baseline space-x-4">
    //           <Link
    //             to="#"
    //             className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             to="#projects"
    //             className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
    //           >
    //             Projects
    //           </Link>
    //           <Link
    //             to="#contact"
    //             className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
    //           >
    //             Contact
    //           </Link>
    //           <Link
    //             to="#skill"
    //             className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
    //           >
    //             Skill
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-gradient-to-r bg-opacity-30     from-gray-900 to-blue-400 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-white text-xl font-bold">Your Logo</div>
          <nav className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link
                to="#"
                className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="#projects"
                className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                to="#contact"
                className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                to="#skill"
                className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
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
