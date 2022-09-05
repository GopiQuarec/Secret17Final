import React from "react";
import Slide2 from "../../assets/images/slide2.png";
import { Label } from "reactstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import  Carousel from "react-bootstrap/Carousel"
import "./home.css"

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
        <Label className="text-white text-3xl flex justify-center p-8">
          Luxury Experience at Secret 17
        </Label>
        {/* <div> */}
        <Carousel >
        {Images.map(review => (
          <Carousel.Item key={review.id}>
            <img
              className="p-20"
              src={review.imageSrc}
              alt="salonImage"
            />
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
