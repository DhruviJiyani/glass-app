import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import aboutLanding from "../assets/coverglass3.jpeg";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const PreviousButton = (props) => {
    const { onClick, disabled } = props;
    return (
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 -left-6 text-3xl ${
          disabled ? "text-gray-300" : "text-black hover:text-gray-400"
        } p-2 hidden group-hover:flex`}
        style={{ zIndex: "39" }}
      >
        <button
          className="flex justify-center items-center w-8 h-10"
          onClick={onClick}
          disabled={disabled}
        >
          <BsChevronLeft />
        </button>
      </div>
    );
  };

  const NextButton = (props) => {
    const { onClick, disabled } = props;
    return (
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 -right-6 text-3xl ${
          disabled ? "text-gray-300" : "text-black hover:text-gray-400"
        } p-2 hidden group-hover:flex`}
        style={{ zIndex: "39" }}
      >
        <button
          className="flex justify-center items-center w-8 h-10"
          onClick={onClick}
          disabled={disabled}
        >
          <BsChevronRight />
        </button>
      </div>
    );
  };

  const testimonials = [
    {
      imgSrc:
        "https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-me-t-1-opt.jpg.webp",
      review: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ),
      text: "I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever.",
      name: "Sarah Connor",
      company: "Google Inc.",
    },
    {
      imgSrc:
        "https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-me-t-2-opt.jpg.webp",
      review: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ),
      text: "Using dummy content or fake information in the Web design process can result in products with unrealistic assumptions and potentially serious design flaws.",
      name: "Sergey Brin",
      company: "Google Inc.",
    },
    {
      imgSrc:
        "https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-me-t-3-opt.jpg.webp",
      review: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ),
      text: "A seemingly elegant design can quickly begin to bloat with unexpected content or break under the weight of actual activity data can ensure a nice looking layout.",
      name: "Antony Stewart",
      company: "Google Inc.",
    },
    {
      imgSrc:
        "https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-me-t-2-opt-1-100x100.jpg",
      review: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      ),
      text: "I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever.",
      name: "Kyle Deleon",
      company: "Google Inc.",
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PreviousButton onClick={null} disabled={currentIndex === 0} />,
    nextArrow: (
      <NextButton
        onClick={null}
        disabled={currentIndex >= testimonials.length - 3}
      />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  return (
    <>
      <div className="w-full relative">
        <div>
          <img
            src={aboutLanding}
            alt="work-landing"
            className=" w-screen  md:h-[500px]   object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white text-4xl font-bold">
          <div
            className={`mb-4 font-bold text-4xl md:text-7xl animate-slide-in`}
          >
            About us
          </div>
          <div className="mb-6 text-sm font-bold animate-slide-in">
            <h2>Home &gt; About</h2>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:m-7 p-4 lg:w-[80%] lg:mx-auto">
        <div className="lg:px-4">
          <p className="text-sm font-semibold text-lime-500 mb-3">
            SOME WORDS ABOUT ME
          </p>
          <p className="text-xl lg:text-4xl font-bold mb-3">My work success</p>
          <p className="text-gray-500 text-sm mb-9">
            There are many variations of passages of lorem ipsum.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 mb-16">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="border-[1px] border-gray-200 p-6">
              <h1 className="text-5xl font-semibold text-lime-500 mb-6">7</h1>
              <h4 className="font-bold text-lg mb-3">Years in this field</h4>
              <p className="text-gray-500">
                Even if your less into design and more into content you strategy
                may find.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="border-[1px] border-gray-200 p-6">
              <h1 className="text-5xl font-semibold text-lime-500 mb-6">
                500+
              </h1>
              <h4 className="font-bold text-lg mb-3">Clients happy</h4>
              <p className="text-gray-500">
                Accept that it’s sometimes okay to focus just on the content or
                design.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="border-[1px] border-gray-200 p-6">
              <h1 className="text-5xl font-semibold text-lime-500 mb-6">
                650+
              </h1>
              <h4 className="font-bold text-lg mb-3">Finished works</h4>
              <p className="text-gray-500">
                Designers might want to ask them to provide style the sheets
                with copy.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="border-[1px] border-gray-200 p-6">
              <h1 className="text-5xl font-semibold text-lime-500 mb-6">4</h1>
              <h4 className="font-bold text-lg mb-3">Years work</h4>
              <p className="text-gray-500">
                Forswearing the use of Lorem Ipsum wouldn’t have helped, won’t
                help now.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 mb-8">
          <div className="relative bg-lime-600 xl:w-[70%] min-h-56 lg:min-h-40 w-full text-white p-10 flex flex-col justify-between">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <img src="https://woodmart.b-cdn.net/wp-content/uploads/2021/03/quotes-bg.png?id=35288" />
            </div>
            <div className="font-semibold text-md xl:text-xl xl:w-[55%]">
              There are no secrets to success. It is the result of preparation,
              hard work, and learning from failure.
            </div>
            <div className="flex flex-row gap-5 items-center">
              <p>By Robert Fox</p>
              <img src="https://woodmart.xtemos.com/wp-content/uploads/2021/03/w-autog.svg" />
            </div>
          </div>
          <div className="bg-slate-200 hidden lg:block">
            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-me-img-1-opt.jpg.webp" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 mb-16">
          <div>
            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-me-img-2-opt.jpg.webp" />
          </div>
          <div>
            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-me-img-3-opt.jpg.webp" />
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto text-center mb-8">
            <h5 className="text-lime-500 font-semibold mb-3">
              {" "}
              SEEMINGLY ELEGANT DESIGN
            </h5>
            <h2 className="text-2xl xl:text-4xl font-bold mb-3">
              Reviews about my work
            </h2>
            <p className="lg:w-[40%] mx-auto text-justify text-sm text-gray-500 leading-relaxed">
              A client that's unhappy for a reason is a problem, a client that's
              unhappy though he or her can't quite put a finger on it is worse.
            </p>
          </div>
          <div className="relative group">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 lg:w-1/3">
                  <div className="h-full flex flex-col items-center px-2 py-6 rounded-lg overflow-hidden text-center relative">
                    <img
                      src={testimonial.imgSrc}
                      alt="User Image"
                      className="rounded-full w-24 h-24 mb-4"
                    />
                    <div className="text-center">
                      <div className="text-yellow-500 mb-2 flex justify-center">
                        {testimonial.review}
                      </div>
                      <p className="text-sm text-gray-500 text-balance">
                        {testimonial.text}
                      </p>
                      <p className="mt-4 font-semibold">
                        {testimonial.name}
                        <span className="text-gray-500">
                          {" "}
                          - {testimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
