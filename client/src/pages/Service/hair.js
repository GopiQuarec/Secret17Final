import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import Contact from "../../assets/images/contactUs.png";
import Hair1 from "../../assets/images/hairs/hair1.jpg";
import Hair2 from "../../assets/images/hairs/hair2.jpg";

const Hairs = () => {
  const history = useHistory();

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
            <h2 className="w-100 position-absolute text-white my-auto text-5xl">
              Hairs
            </h2>
          </div>
        </section>
      </div>

      <div>
        <h3 className="text-black text-2xl px-12 py-10">
          Service Excellence and Creative Expertise defines <b>Secret17.</b>{" "}
          Since 2022, we have catered to more than 5000 clients with pure skill
          & passion. Owing to our highly skilled, reliable and experienced
          beauty therapists, hairstylists and nail technicians, <b>Secret17</b>{" "}
          has followed suit with more salons opening at various locations across
          Ahmedabad. We have an exhaustive range of services across all branches
          that include hair services such as haircut, hair-color, creative
          makeovers, keratin; bridal makeup services, and spa services using the
          brands of L’Oreal, OPI, QOD, Nashi, and many more internationally
          renowned brands
        </h3>
      </div>

      <div className="bg-gray-300 border-t-2 border-black ...">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense lg:grid-flow-col">
          <div className="bg-white w-full mb-2">
            <h3 className="italic text-2xl p-5 text-left">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services..great ambience and amazing staff and hospitality Loving
              my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </h3>
            <div className="flex justify-center  mb-8">
              <Button
                className="bg-black text-white"
                onClick={() => history.push("/blogs-detail")}
              >
                Read More...
              </Button>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <div>
              <h3 className="text-center text-xl mb-8 font-semibold uppercase">
                Black & Golden
              </h3>
              <img
                src={Hair1}
                alt="hairblog"
                width="300px"
                height="312px"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  // marginLeft: "100px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense lg:grid-flow-col">
          <div className="flex justify-center my-5">
            <div>
              <h3 className="text-center text-xl mb-8 font-semibold uppercase">
                Black & Golden
              </h3>
              <img
                src={Hair2}
                alt="hairblog"
                width="300px"
                height="312px"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "40px",
                  // marginLeft: "100px",
                }}
              />
            </div>
          </div>
          <div className="bg-white w-full mb-2">
            <h3 className="italic text-2xl p-5 text-left">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services..great ambience and amazing staff and hospitality Loving
              my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </h3>
            <div className="flex justify-center mb-8">
              <Button
                className="bg-black text-white"
                onClick={() => history.push("/blogs-detail")}
              >
                Read More...
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense lg:grid-flow-col">
          <div className="bg-white w-full mb-2">
            <h3 className="italic text-2xl p-5 text-left">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services..great ambience and amazing staff and hospitality Loving
              my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </h3>
            <div className="flex justify-center mb-8">
              <Button
                className="bg-black text-white"
                onClick={() => history.push("/blogs-detail")}
              >
                Read More...
              </Button>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <div>
              <h3 className="text-center text-xl mb-8 font-semibold uppercase">
                Black & Golden
              </h3>
              <img
                src={Hair1}
                alt="hairblog"
                width="300px"
                height="312px"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  // marginLeft: "100px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hairs;
