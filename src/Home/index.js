import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeImg from "../assets/home.png";
import homeImg1 from "../assets/home2.jpg";
import homeImg2 from "../assets/home3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: homeImg,
    text: "NEW COLLECTION\nLOFT & TRENDS\nIpsum ad in quisque dignissim habitant massads condimentum ligula\nscelerisque non parturient nibh dolor massa.",
  },
  {
    src: homeImg1,
    text: "BEST INSPIRATION LIST\nFURNITURE BRANDS\nIpsum ad in quisque dignissim habitant massads condimentum ligula\nscelerisque non parturient nibh dolor massa.",
  },
  {
    src: homeImg2,
    text: "NEW COLLECTION\nINTERIOR DESIGN\nIpsum ad in quisque dignissim habitant massads condimentum ligula\nscelerisque non parturient nibh dolor massa.",
  },
];

const PreviousButton = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 text-2xl text-white p-2 hover:text-gray-200"
      style={{ zIndex: "39" }}
    >
      <button className="bg-opacity-90 flex justify-center items-center w-8 h-10">
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
      <button className="bg-opacity-90 flex justify-center items-center w-8 h-10">
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
    <div className="relative w-screen h-screen overflow-hidden">
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
  );
};

export default Home;
