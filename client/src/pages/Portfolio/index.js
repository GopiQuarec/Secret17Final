import React from "react";
import { Button } from "reactstrap";
import Contact from "../../assets/images/contactUs.png";
import portfolio from "../../assets/images/portfolio/portfolio.png";
import portfolio1 from "../../assets/images/portfolio/portfolio1.png";
import portfolio2 from "../../assets/images/portfolio/portfolio2.png";
import portfolio3 from "../../assets/images/portfolio/portfolio3.png";
import portfolio4 from "../../assets/images/portfolio/portfolio4.png";
import portfolio5 from "../../assets/images/portfolio/portfolio5.png";
import portfolio6 from "../../assets/images/portfolio/portfolio6.png";


const Portfolio = () => {
  const poltfolioImg = [
    {
      img: portfolio,
    },
    {
      img: portfolio1,
    },
    {
      img: portfolio2,
    },
    {
      img: portfolio3,
    },
    {
      img: portfolio4,
    },
    {
      img: portfolio5,
    },
    {
      img: portfolio6,
    },
  ];
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
              Portfolio
            </h3>
          </div>
        </section>
      </div>
      <div className="bg-black p-10">
        <div className="container grid grid-cols-4 gap-2 mx-auto rounded">
          {poltfolioImg &&
            poltfolioImg.map((data) => {
              return (
                <div className="w-full rounded">
                  <img
                    src={data.img}
                    alt="portfolio"
                    className="rounded-lg w-80 h-full"
                  />
                </div>
              );
            })}
        </div>
        <div className="flex justify-center mt-10">
        <Button className="bg-white text-black text-2xl">See More...</Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Portfolio;
