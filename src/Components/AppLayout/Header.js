import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
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
          <span className="ml-3 text-2xl font-bold md:text-[35px]">woodmart.</span>
        </div>
        <nav className="hidden lg:flex space-x-4">
          <a href="#" className="text-white">HOME</a>
          <a href="#" className="text-white">SHOP</a>
          <a href="#" className="text-white">BLOG</a>
          <a href="#" className="text-white">PAGES</a>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-white text-black rounded py-1 px-3">Inquiry</button>
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
        className={`fixed top-0 right-0 w-64 h-full text-black bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
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
        <nav className="flex flex-col space-y-4 px-4 py-4 text-center cursor-pointer">
          <a href="#" className="text-black border-b-2 pt-4">HOME</a>
          <a href="#" className="text-black border-b-2">SHOP</a>
          <a href="#" className="text-black border-b-2">BLOG</a>
          <a href="#" className="text-black border-b-2">PAGES</a>
         <div className="flex justify-center"> <button className="text-white bg-black rounded w-36 h-10">INQUIRY</button></div>
        </nav>
      </div>
    </header>
  );
}

export default App;

