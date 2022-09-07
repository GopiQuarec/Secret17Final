import React from "react";
import Contact from "../../assets/images/contactUs.png";
import AboutNail from "../../assets/images/nails/aboutnail.png";
import DownSlide from "../Home/downSlide";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <section className="row no-gutter align-items-center">
          <div className="col-lg-12 text-center p-0 d-flex align-items-center">
            <img
              className="img-fluid position-relative col-lg-12"
              src={Contact}
              alt="contact"
            />
            <h6 className="w-100 position-absolute text-white my-auto text-5xl">
              About Us
            </h6>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-20 container-fluid">
        <div className="w-fit">
          <h3 className="text-4xl">Who We Are?</h3>
          <h4 className="mt-5 lg:mt-20 text-md lg:text-2xl">
            With a view to providing a Luxurious experience for one’s styling
            needs-for Best Hair and Best Nail Art, we have stepped into this
            industry where we cater Premium Salon services in Ahmedabad for
            Nails and Hair. One will love to have Our Luxurious Nail and Hair
            Salon Services in Ahmedabad. Our Hair and Nail Expert always try
            their best so that our client can cherish their “Me Time” with our
            Studio Experts and get the best Salon service in Ahmedabad.
          </h4>
        </div>

        <div className="flex justify-center  ml-2 lg:ml-44 mt-2">
          <img src={AboutNail} alt="nail" width="447px" height="439px" />
        </div>

        <div className="flex justify-center mt-5 lg:mt-10 mr-2 lg:mr-44 ">
          <img src={AboutNail} alt="nail" width="447px" height="439px" />
        </div>

        <div className="w-fit">
          <h3 className="text-4xl flex justify-center lg:justify-end mt-5 lg:mt-10">
            Our Story
          </h3>
          <h4 className="mt-10 lg:mt-20 text-sm lg:text-2xl">
            With a view to providing a Luxurious experience for one’s styling
            needs-for Best Hair and Best Nail Art, we have stepped into this
            industry where we cater Premium Salon services in Ahmedabad for
            Nails and Hair. One will love to have Our Luxurious Nail and Hair
            Salon Services in Ahmedabad. Our Hair and Nail Expert always try
            their best so that our client can cherish their “Me Time” with our
            Studio Experts and get the best Salon service in Ahmedabad.
          </h4>
        </div>
      </div>

      <DownSlide />
    </React.Fragment>
  );
};

export default AboutUs;
