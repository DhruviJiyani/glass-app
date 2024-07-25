import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RightContainer = ({ title, subtitle, description, productImages }) => {
  const productSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center  pt-8 md:pt-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin mb-4 text-center">{title}</h2>
      <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-black mb-6 text-center">{subtitle}</h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <div className="slider-container relative w-full">
        <Slider {...productSliderSettings}>
          {productImages.map((product, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col items-center">
                <img
                  src={product.src}
                  alt={product.description}
                  className="w-full h-[300px] max-w-[280px] mb-4 object-cover"
                />
                <p className="text-gray-800 font-bold text-center">
                  <span className="line-through mr-2">{product.price}</span>
                  {product.discountPrice}
                </p>
                <p className="text-gray-600 text-center">{product.category}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-6 text-2xl text-black cursor-pointer transform -translate-y-1/2"
      style={{ zIndex: 39 }}
    >
      <button className="flex justify-center items-center w-8 h-8">
        <FaChevronLeft onClick={onClick} />
      </button>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-5 text-2xl text-black cursor-pointer transform -translate-y-1/2"
      style={{ zIndex: 39 }}
    >
      <button className="flex justify-center items-center w-8 h-8">
        <FaChevronRight onClick={onClick} />
      </button>
    </div>
  );
};

export default RightContainer;
