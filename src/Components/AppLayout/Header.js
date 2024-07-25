import React, { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl font-bold md:text-[35px]">
            woodmart.
          </span>
        </div>
        <nav className="hidden lg:flex space-x-4">
          <a href="/home" className="text-white pr-2">
            HOME
          </a>
          <a href="/about" className="text-white pr-2">
            ABOUT
          </a>
          <a href="/work" className="text-white pr-2">
            WORK
          </a>
          <a href="/contact" className="text-white pr-2">
            CONTACT
          </a>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-white text-black rounded py-1 px-3">
            <a href="/contact">INQUIRY</a>
          </button>
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path
              fill="white"
              d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 w-full h-full text-black bg-white transform transition-transform duration-300 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="top-1/2 transform translate-y-1/2">
          <nav className="flex flex-col space-y-4 px-4 py-4 text-center cursor-pointer">
            <a href="/home" className="text-black border-b-2 py-4 ">
              HOME
            </a>
            <a href="/about" className="text-black border-b-2 py-2">
              ABOUT
            </a>
            <a href="/work" className="text-black border-b-2 py-2">
              WORK
            </a>
            <a href="/contact" className="text-black border-b-2 py-2">
              CONTACT
            </a>
            <div className="flex justify-center pt-8">
              <button className="text-white bg-black rounded w-36 h-10">
                <a href="/contact">INQUIRY</a>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
