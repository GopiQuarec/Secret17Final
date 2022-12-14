import React from "react";
import { Button } from "reactstrap";

import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import Slide1Image from "../../assets/images/slide1.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const UpperSlide = () => {
  const Images = [
    {
      imageSrc: Slide1Image,
    },
    {
      imageSrc: Slide1Image,
    },
    {
      imageSrc: Slide1Image,
    },
  ];
  return (
    <React.Fragment>
      <div>
        <Carousel indicators={false}>
          {Images.map((review) => (
            <Carousel.Item key={review.id}>
              <div className="container-fluid">
                <section className="row no-gutter align-items-center">
                  <div className="text-center p-0 d-flex align-items-center justify-end">
                    <img
                      className="img-fluid position-relative col-lg-12"
                      src={review.imageSrc}
                      alt="salonImage"
                    />
                    <a href="/contact" className="position-absolute">
                      <Button className=" text-white text-2xl mt-64 mr-80 bg-black">
                        Book Appointment
                      </Button>
                    </a>
                  </div>
                </section>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <h1 className=" text-3xl lg:text-5xl font-medium flex justify-center text-center p-8">
          Secret 17 - One Step Solution For Your Hairs & Nails
        </h1>

        <div className="flex justify-center">
          <p className="text-2xl w-auto text-center mx-10">
            With a view to providing a Luxurious experience for one’s styling
            needs-for Best Hair and Best Nail Art, <br /> we have stepped into
            this industry where we cater Premium Salon services in Ahmedabad for
            Nails and Hair. <br /> One will love to have Our Luxurious Nail and
            Hair Salon Services in Ahmedabad <br /> Our Hair and Nail Expert
            always try their best <br /> Salon service in Ahmedabad.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UpperSlide;
