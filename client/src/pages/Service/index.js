import React from "react";
import Contact from "../../assets/images/contactUs.png";
import Services from "../Home/services";

const Service = () => {
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
            <h3 className="w-100 position-absolute text-white my-auto text-5xl">
              Services
            </h3>
          </div>
        </section>
      </div>

      <div>
        <h3 className="text-black text-2xl px-12 py-10">
          Service Excellence and Creative Expertise defines <b>Secret17.</b> Since
          2022, we have catered to more than 5000 clients with pure skill &
          passion. Owing to our highly skilled, reliable and experienced beauty
          therapists, hairstylists and nail technicians, <b>Secret17</b> has followed
          suit with more salons opening at various locations across Ahmedabad.
          We have an exhaustive range of services across all branches that
          include hair services such as haircut, hair-color, creative makeovers,
          keratin; bridal makeup services, and spa services using the brands of
          L’Oreal, OPI, QOD, Nashi, and many more internationally renowned
          brands
        </h3>
      </div>

      <Services />
    </React.Fragment>
  );
};

export default Service;
