import React, { useState } from "react";
import Slider from "react-slick";

//import slick_1
import Slick1 from "../../carousel/slick_1.jpg";
import Slick2 from "../../carousel/slick_2.jpg";
import Slick3 from "../../carousel/slick_3.jpg";
import Slick4 from "../../carousel/slick_4.jpg";
import Slick5 from "../../carousel/slick_5.jpg";
import Slick6 from "../../carousel/slick_6.jpg";
import Slick7 from "../../carousel/slick_7.jpg";
import Slick8 from "../../carousel/slick_8.jpg";
import Slick9 from "../../carousel/slick_9.jpg";
import Slick10 from "../../carousel/slick_10.jpg";

const images = [
  Slick1,
  Slick2,
  Slick3,
  Slick4,
  Slick5,
  Slick6,
  Slick7,
  Slick8,
  Slick9,
  Slick10,
];

const HomePageSlider = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   appendDots: (dots) => (
  //     <div>
  //       <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
  //     </div>
  //   ),
  //   customPaging: (i) => (
  //     <div className="w-4 h-4 bg-gray-400 rounded-full hover:bg-gray-600 transition-all"></div>
  //   ),
  // };
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300
        ${
          i === activeIndex
            ? "bg-green-500 border-green-500"
            : "bg-gray-200 border-gray-400 hover:bg-green-500"
        }
        `}
      ></div>
    ),
    dotsClass: "!bottom-[-50px] slick-dots flex justify-center gap-1",
  };

  return (
    <div className="max-w-full w-full flex flex-col bg-carousel-bg py-18">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="p-2">
            <a href="#" className="focus:outline-none focus:ring-0">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-contain rounded-sm"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePageSlider;
