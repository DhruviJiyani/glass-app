import React, { useState } from "react";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white lg:mx-auto">
      <div className="container px-3 py-10 mx-auto lg:justify-center flex gap-8 md:items-center lg:items-start md:flex-col lg:flex-row lg:w-4/5 flex-col">
        <div className="flex flex-col md:flex-row w-full justify-between gap-8 md:px-4 lg:px-0">
          <div className="md:text-left md:w-1/2 gap-3">
            <a className="flex title-font font-medium items-center md:justify-start text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 p-2 rounded-full bg-indigo-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  className="text-white"
                ></path>
              </svg>
              <span className="ml-3 text-3xl font-bold text-gray-300">
                woodmart
              </span>
            </a>
            <div className="text-sm flex flex-col gap-3 text-neutral-300">
              <p className="mt-2 text-sm">
                Welcome to unique, your trusted partner for all
                glass-related services and products. With years of experience in
                the industry, we are dedicated to delivering top-quality glass
                solutions tailored to meet the unique needs of our clients.
              </p>
              <p className="mt-4 flex items-center">
                <FaLocationArrow />
                &nbsp;451 Wall Street, UK, London
              </p>
              <p>
                <a href="tel:+0643321233" className="flex items-center">
                  <FaMobileAlt /> &nbsp;Phone: (064) 332-1233{" "}
                </a>
              </p>
              <p className="flex items-center">
                <FiMail /> &nbsp;Fax: (099) 453-1357
              </p>
            </div>
          </div>
          {/* <div className="md:text-left md:w-1/2 gap-3">
            <p className="font-bold">RECENT POSTS</p>
            <div className="text-sm gap-3 flex felx-row mt-3 pb-6 border-b-2 border-gray-800">
              <img
                src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-12-75x65.jpg"
                alt=""
                className="mt-1 h-16 w-20"
              />
              <div className="text-sm flex flex-col gap-3 text-neutral-300">
                <p className="text-white hover:text-gray-300 font-semibold cursor-pointer">
                  A companion for extra sleeping
                </p>
                <p className="text-xs"> July 23, 2016 1 Comment</p>
              </div>
            </div>
            <div className="text-sm gap-3 flex felx-row mt-6 text-gray-300">
              <img
                src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-11-75x65.jpg"
                alt=""
                className="mt-1 h-16 w-20"
              />
              <div className="text-sm flex flex-col gap-3 text-neutral-300">
                <p className="text-white hover:text-gray-300 font-semibold cursor-pointer">
                  Outdoor seating collection inspiration
                </p>
                <p className="text-xs">July 23, 2016 1 Comment</p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex-grow flex flex-col sm:flex-row w-full gap-8 md:text-left justify-between">
          <div className="px-4 lg:w-1/3 md:w-1/2 w-full">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">
              OUR STORES
            </h2>
            <nav className="list-none">
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">New York</a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">London SF</a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">India</a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">Los Angeles</a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">Chicago</a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">Las Vegas</a>
              </li>
            </nav>
          </div>
          <div className="px-4 lg:w-1/3 md:w-1/2 w-full">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">
              USEFUL LINKS
            </h2>
            <nav className="list-none">
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">Contact Us</a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">Our Sitemap</a>
              </li>
            </nav>
          </div>
          <div className="px-4 lg:w-1/3 md:w-1/2 w-full">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-white">
              FOOTER MENU
            </h2>
            <nav className="list-none">
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">
                  Instagram profile
                </a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">
                  New Collection
                </a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">Contact Us</a>
              </li>
              <li className="mb-3">
                <a className="text-neutral-400 hover:text-white">
                  Purchase Theme
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black border-t-2 border-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
          <p className="text-xs lg:text-sm text-center sm:text-left text-white">
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              className="ml-1 font-bold text-white"
              target="_blank"
            >
              WOODMART
            </a>{" "}
            © 2024 CREATED BY
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              className="ml-1 font-bold text-white"
              target="_blank"
            >
              <span className="text-red-700 font-normal text-2xl">x</span>TEMOS
              STUDIO
            </a>
            . PREMIUM E-COMMERCE SOLUTIONS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
