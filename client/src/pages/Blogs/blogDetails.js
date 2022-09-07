import React from "react";
import HairBlog from "../../assets/images/hairBlog.png";
import NailBlog from "../../assets/images/nailBlog.png";

const BlogDetails = () => {
  return (
    <React.Fragment>
      <div className="bg-gray-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense lg:grid-flow-col">
          {/* <Row> */}
          <div className="bg-white w-full mb-2 ">
            <h3 className="italic text-2xl p-5 text-left">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services.. great ambience and amazing staff and hospitality!
              Loving my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </h3>
          </div>
          <div className="flex justify-center my-5">
            <div>
              <h3 className="text-center text-xl mb-8 font-semibold uppercase">
                Black & Golden
              </h3>
              <img
                src={HairBlog}
                alt="nailblog"
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
          {/* </Row> */}
        </div>
        {/* <Row> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense lg:grid-flow-col">
          <div className="flex justify-center my-5 col-span-1 ...">
            <div>
              <h3 className="text-center text-xl mb-8 font-semibold uppercase">
                Black & Golden
              </h3>
              <img
                src={NailBlog}
                alt="nailblog"
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
          <div className="bg-white w-full mb-2">
            <h3 className="italic text-2xl p-5 text-left">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services.. great ambience and amazing staff and hospitality!
              Loving my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </h3>
          </div>
        </div>
        {/* </Row> */}
      </div>
    </React.Fragment>
  );
};
export default BlogDetails;
