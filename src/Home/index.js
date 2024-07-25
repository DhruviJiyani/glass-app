import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coverGlassImg from "../assets/coverglass.jpeg";
import coverGlass2Img from "../assets/coverglass2.jpg";
import coverGlass3Img from "../assets/coverglass3.jpeg";
import glassImg from "../assets/glassimage.jpg";
import interiorGlassImg from "../assets/interiorglass.jpeg";
import glass1Img from "../assets/glass1.jpeg";
import stairsGlassImg from "../assets/stairsglass.jpg";
import livingroomGlass from "../assets/livingroomglass.jpeg";
import livingroom2Glass from "../assets/living2glass.jpeg";
import studyroomGlass from "../assets/studyroomglass.jpeg";
import studyroom1Glass from "../assets/studyroomglass2.jpeg";
import studyroom2Glass from "../assets/studyroomglass3.jpeg";
import templeGlass from "../assets/templeglass.jpeg";
import temple2Glass from "../assets/templeglass2.jpg";
import temple3Glass from "../assets/tampleglass3.jpeg";
import simpleGlass from "../assets/simpleglass.jpeg";
import simple2Glass from "../assets/simpleglass2.jpeg";
import simple3Glass from "../assets/simpleglass3.jpeg";
import mirrorGlassImg from "../assets/mirrorglass.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LeftContainer from "../Common/homeLeftContainer";
import RightContainer from "../Common/homeRightContaner";

const images = [
  {
    src: coverGlassImg,
    text: "NEW COLLECTION\nLOFT & TRENDS\nIpsum ad in quisque dignissim habitant massads condimentum ligula\nscelerisque non parturient nibh dolor massa.",
  },
  {
    src: coverGlass2Img,
    text: "BEST INSPIRATION LIST\nFURNITURE BRANDS\nIpsum ad in quisque dignissim habitant massads condimentum ligula\nscelerisque non parturient nibh dolor massa.",
  },
  {
    src: coverGlass3Img,
    text: "NEW COLLECTION\nINTERIOR DESIGN\nIpsum ad in quisque dignissim habitant massads condimentum ligula\nscelerisque non parturient nibh dolor massa.",
  },
];

const livingRoomImages = [
  {
    src: livingroomGlass,
    price: "$399.00",
    discountPrice: "$299.00",
    description: "Knife Set",
    category: "Cooking",
  },
  {
    src: stairsGlassImg,
    price: "$29.00",
    discountPrice: "$19.00",
    description: "Mortar and Pestle",
    category: "Cooking",
  },
  {
    src: livingroom2Glass,
    price: "$399.00",
    discountPrice: "$299.00",
    description: "Knife Set",
    category: "Cooking",
  },
];

const studyRoomImages = [
  {
    src: studyroomGlass,
    price: "$399.00",
    discountPrice: "$299.00",
    description: "Knife Set",
    category: "Cooking",
  },
  {
    src: studyroom1Glass,
    price: "$29.00",
    discountPrice: "$19.00",
    description: "Mortar and Pestle",
    category: "Cooking",
  },
  {
    src: studyroom2Glass,
    price: "$399.00",
    discountPrice: "$299.00",
    description: "Knife Set",
    category: "Cooking",
  },
];

const templeGlassImages = [
  {
    src: templeGlass,
    price: "$399.00",
    discountPrice: "$299.00",
    description: "Knife Set",
    category: "Cooking",
  },
  {
    src: temple2Glass,
    price: "$29.00",
    discountPrice: "$19.00",
    description: "Mortar and Pestle",
    category: "Cooking",
  },
  {
    src: temple3Glass,
    price: "$399.00",
    discountPrice: "$299.00",
    description: "Knife Set",
    category: "Cooking",
  },
];

const GlassImages = [
  {
    src: simpleGlass,
    price: "$399.00",
    discountPrice: "$299.00",
    description: "Knife Set",
    category: "Cooking",
  },
  {
    src: simple2Glass,
    price: "$29.00",
    discountPrice: "$19.00",
    description: "Mortar and Pestle",
    category: "Cooking",
  },
  {
    src: simple3Glass,
    price: "$399.00",
    discountPrice: "$299.00",
    description: "Knife Set",
    category: "Cooking",
  },
];

const PreviousButton = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 text-2xl text-white p-2 hover:text-gray-200"
      style={{ zIndex: "39" }}
    >
      <button className="flex justify-center items-center w-8 h-10">
        <FaChevronLeft onClick={onClick} />
      </button>
    </div>
  );
};

const NextButton = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 text-2xl text-white p-2 hover:text-gray-200"
      style={{ zIndex: "39" }}
    >
      <button className="flex justify-center items-center w-8 h-10">
        <FaChevronRight onClick={onClick} />
      </button>
    </div>
  );
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    setShowText(false);
    setAnimationKey(Date.now());

    const imageDisplayTimeout = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(imageDisplayTimeout);
  }, [currentIndex]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => {
      setCurrentIndex(next);
    },
    arrows: true,
    prevArrow: <PreviousButton />,
    nextArrow: <NextButton />,
  };

  const animationStyles = `
    @keyframes slideInFromTop {
      from {
        transform: translateY(-160%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .animate-slide-in {
      animation: slideInFromTop 0.8s ease-out;
    }
  `;

  const currentImage = images[currentIndex];

  return (
    <div>
      <div className="relative w-screen h-screen">
        <style>{animationStyles}</style>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={`Slide ${index}`}
                className="w-screen h-screen object-cover"
              />
            </div>
          ))}
        </Slider>
        <div
          key={animationKey}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white text-4xl font-bold"
        >
          {showText && (
            <>
              <div className={`mb-4 font-thin text-6xl animate-slide-in`}>
                {currentImage.text.split("\n")[0]}
              </div>
              <div className={`mb-4 text-7xl animate-slide-in`}>
                {currentImage.text.split("\n")[1]}
              </div>
              <p className={`mb-6 text-sm font-bold animate-slide-in`}>
                {currentImage.text
                  .split("\n")
                  .slice(2)
                  .map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
              </p>
              <button className="bg-green-500 text-white font-light text-sm py-2 px-4 border-green-500 border-2 animate-slide-in">
                READ MORE
              </button>
              <button className="bg-transparent text-white border-2 border-white font-light text-sm py-2 px-4 ml-4 animate-slide-in">
                ADD TO CART
              </button>
            </>
          )}
        </div>
      </div>
      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="lg:flex">
            <LeftContainer imageSrc={glassImg} />
            <RightContainer
              title="SAGITTIS ULLAMCOR"
              subtitle="KITCHEN ACCESSORIES"
              description="Condimentum risus feugiat molestie condimentum ad gravida aucibus ante mi est amet a et urna fringilla facilisis netus."
              productImages={livingRoomImages}
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="lg:flex">
            <RightContainer
              title="SAGITTIS ULLAMCOR"
              subtitle="LOFT DECORATION"
              description="Condimentum risus feugiat molestie condimentum ad gravida aucibus ante mi est amet a et urna fringilla facilisis netus."
              productImages={studyRoomImages}
            />
            <LeftContainer imageSrc={interiorGlassImg} />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="lg:flex">
            <LeftContainer imageSrc={glass1Img} />
            <RightContainer
              title="SAGITTIS ULLAMCOR"
              subtitle="TRENDING FURNITURE"
              description="Condimentum risus feugiat molestie condimentum ad gravida aucibus ante mi est amet a et urna fringilla facilisis netus."
              productImages={templeGlassImages}
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto">
          <div className="lg:flex">
            <RightContainer
              title="SAGITTIS ULLAMCOR"
              subtitle="WOODEN DECOR"
              description="Condimentum risus feugiat molestie condimentum ad gravida aucibus ante mi est amet a et urna fringilla facilisis netus."
              productImages={GlassImages}
            />
            <LeftContainer imageSrc={mirrorGlassImg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
