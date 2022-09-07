import React from "react";
import { Button, Card, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import Hair from "../../assets/images/hair.png";
import Nail from "../../assets/images/nail.png";

const Services = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="bg-gray-300 mt-10 pb-40">
        <h2 className="flex justify-center text-4xl font-medium p-8">
          Our Services
        </h2>
        <div className="container">
          <Row className="col-sm-12">
            <Col>
              <div className="flex justify-center relative">
                <img src={Hair} alt="hair" width="auto" height="auto" />
                <div className="absolute">
                  <Card className="bg-gradient-to-t from-gray-300 to-transparent opacity-70 ...  flex flex-col w-36 md:w-60 lg:w-80 mt-20 lg:mt-96 md:mt-48">
                    <h3
                      className="text-sm md:text-3xl lg:text-3xl mx-5 pt-2 lg:my-5 md:pt-10 flex justify-center text-black font-medium"
                    >
                      Hairstyles
                    </h3>
                    <h4 className="text-sm md:text-xl lg:text-2xl m-2 flex justify-center text-center text-black">
                      A hairstyle is the way hair is cut and styled. A haircut
                      may be just practical, but a hairdo suggests professional
                      styling
                    </h4>
                    <div className="my-3 lg:my-8 mx-2 lg:mx-4 ">
                      <Button
                        className="bg-black text-white  w-full   "
                        onClick={() => history.push("/hairs")}
                      >
                        {" "}
                        See More...
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>

            <Col>
              <div className="flex justify-center relative">
                <img src={Nail} alt="nail" width="auto" height="auto" />
                <div className="absolute">
                  <Card className="bg-gradient-to-t from-gray-300 to-transparent opacity-70 ...  flex flex-col w-36 md:w-60 lg:w-80  mt-20 lg:mt-96 md:mt-48">
                    <h3 className="text-sm md:text-3xl lg:text-3xl mx-5 pt-2 lg:my-5 md:pt-10 flex justify-center text-black font-medium">
                      Nailarts
                    </h3>
                    <h4 className="text-sm md:text-xl lg:text-2xl m-2 flex justify-center text-center text-black">
                      A hairstyle is the way hair is cut and styled. A haircut
                      may be just practical, but a hairdo suggests professional
                      styling
                    </h4>
                    <div className="my-3 lg:my-10 mx-2 lg:mx-4 ">
                      <Button
                        className="bg-black text-white w-full"
                        onClick={() => history.push("/nails")}
                      >
                        {" "}
                        See More...
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Services;
