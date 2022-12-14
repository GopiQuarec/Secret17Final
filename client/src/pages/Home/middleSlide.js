import React from "react";
import Slide2 from "../../assets/images/slide2.png";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";

const MiddleSlide = () => {
  const Images = [
    {
      imageSrc: Slide2,
    },
    {
      imageSrc: Slide2,
    },
    {
      imageSrc: Slide2,
    },
  ];
  return (
    <React.Fragment>
      <div
        className="bg-black"
        // style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <h3 className="text-white text-4xl flex justify-center p-8">
          Luxury Experience at Secret 17
        </h3>
        {/* <div> */}
        <Carousel>
          {Images.map((review) => (
            <Carousel.Item key={review.id}>
              <div className="flex justify-center">
                <img className="pb-20" src={review.imageSrc} alt="salonImage" />
              </div>
              {/* <Carousel.Caption>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default MiddleSlide;
