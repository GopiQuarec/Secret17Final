import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Carousel from "react-bootstrap/Carousel";
import "./home.css";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const DownSlide = () => {
  const path = window.location.pathname;
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   centerMode: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   cssEase: "linear",
  // };

  const SliderData = [
    {
      line1: "Extremely happy with the services..",
      line2: " great ambience and amazing staff and hospitality!",
      line3:
        "Loving my nails done by Toka - she's one of the best nail artists in town!",
      by: "---Maanini shah",
    },
    {
      line1: "Extremely happy with the services..",
      line2: " great ambience and amazing staff and hospitality!",
      line3:
        "Loving my nails done by Toka - she's one of the best nail artists in town!",
      by: "---Maanini shah",
    },
    {
      line1: "Extremely happy with the services..",
      line2: " great ambience and amazing staff and hospitality!",
      line3:
        "Loving my nails done by Toka - she's one of the best nail artists in town!",
      by: "---Maanini shah",
    },
  ];
  return (
    <React.Fragment>
      <div
        // className="bg-red-500 my-10 py-10"
        className={`${
          path === "/" ? "bg-white my-10 py-10" : "bg-black my-10 py-10"
        }`}
        // style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <h3
          className={`${
            path === "/"
              ? "text-black text-4xl flex justify-center m-2"
              : "text-white text-4xl flex justify-center m-2"
          }`}
        >
          What Our Customer Says For Us.
        </h3>
        <Carousel centerMode infiniteLoop className="px-10">
          {SliderData.map((data, i) => {
            return (
              <Carousel.Item key={data.id}>
                <div className="mt-5">
                  <div
                    className={`${
                      path === "/"
                        ? "bg-black p-10 w-auto italic rounded-full"
                        : "bg-white p-10 w-auto italic rounded-full"
                    }`}
                  >
                    <div className="p-5">
                      <h4
                        className={`${
                          path === "/"
                            ? "text-white text-center flex justify-center text-2xl"
                            : "text-black text-center flex justify-center text-2xl"
                        }`}
                      >
                        {" "}
                        {data.line1}
                      </h4>
                      <h4
                        className={`${
                          path === "/"
                            ? "text-white text-center flex justify-center text-2xl"
                            : "text-black text-center flex justify-center text-2xl"
                        }`}
                      >
                        {" "}
                        {data.line2}
                      </h4>
                      <h4
                        className={`${
                          path === "/"
                            ? "text-white text-center flex justify-center text-2xl"
                            : "text-black text-center flex justify-center text-2xl"
                        }`}
                      >
                        {" "}
                        {data.line3}
                      </h4>
                      <h4
                        className={`${
                          path === "/"
                            ? "float-right text-white p-2"
                            : "float-right text-black p-2"
                        }`}
                      >
                        {data.by}
                      </h4>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default DownSlide;
