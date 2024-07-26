import React from "react";
import workLanding from "../assets//work-landing2.jpg";
import workCard from "../assets/work-landing.webp";
import blackMirror from "../assets/black-mirror.jpg";
import toughenedGlass from "../assets/Toughened-Glass.webp";
import Bronge from "../assets/Bronge-Mirror.webp";
import Mirror from "../assets/Mirror.jpeg";
import temple from "../assets/templeglass.jpeg";
import PuDesign from "../assets/PU-Design.jpeg";
import PuGlass from "../assets/pu-profile-shutter.jpg";
import toughenedGlass2 from "../assets/Toughened-Glass2.webp";
import partetionSanitary from "../assets/Glass-Partetion-Sanitary.jpg";
import reelingGlass from "../assets/reeling-glass.avif";
import balconyGlass from "../assets/balcony-glass.avif";
import namePlate from "../assets/name-plate.jpg";

const Work = () => {
  const workData = [
    {
      name: "Black Mirror Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: blackMirror,
    },
    {
      name: "Toughened Glass with Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: toughenedGlass,
    },
    {
      name: "Bronge Mirror",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: Bronge,
    },
    {
      name: "Mirror",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: Mirror,
    },
    {
      name: "Temple Design Glass",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: temple,
    },
    {
      name: "PU Design (Door)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: PuDesign,
    },
    {
      name: "PU Glass Profile Shutter (Kitchen)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: PuGlass,
    },
    {
      name: "Toughened Glass Partetion",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: toughenedGlass2,
    },
    {
      name: "Glass Partetion(Sanitary)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: partetionSanitary,
    },
    {
      name: "Reeling Glass",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: reelingGlass,
    },
    {
      name: "Balcony Glass",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: balconyGlass,
    },
    {
      name: "Name Plate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      img: namePlate,
    },
  ];
  return (
    <>
      <div className="w-full relative">
        <div>
          <img
            src={workLanding}
            alt="work-landing"
            className=" w-screen  md:h-[500px]   object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white text-4xl font-bold">
          <div
            className={`mb-4 font-bold text-4xl md:text-7xl animate-slide-in`}
          >
            Our Work
          </div>
          <div className="mb-6 text-sm font-bold animate-slide-in">
            <h2>Home &gt; Work</h2>
          </div>
        </div>
      </div>
      <div className="work-card  w-full my-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
        {workData.map((data, index) => (
          <div
            key={index}
            className="relative h-[400px] my-10 w-[300px] md:w-[360px] lg:w-[380px] mx-auto rounded-lg"
          >
            <img
              src={data.img}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{data.name}</h1>
              <p className="mt-2 text-sm text-gray-300">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Work;
