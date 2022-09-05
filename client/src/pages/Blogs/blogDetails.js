import React from "react";
import { Label } from "reactstrap";
import HairBlog from "../../assets/images/hairBlog.png";
import NailBlog from "../../assets/images/nailBlog.png";

const BlogDetails = () => {
  return (
    <React.Fragment>
      <div className="bg-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense lg:grid-flow-col">
          {/* <Row> */}
          <div className="bg-white w-full mb-2 ">
            <Label className="italic text-lg p-5  font-bold text-left">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services.. great ambience and amazing staff and hospitality!
              Loving my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </Label>
          </div>
          <div className="flex justify-center my-5">
            <img src={HairBlog} alt="hairblog" />
          </div>
          {/* </Row> */}
        </div>
        {/* <Row> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense lg:grid-flow-col">
          <div className="flex justify-center my-5 col-span-1 ...">
            <img src={NailBlog} alt="hairblog" />
          </div>
          <div className="bg-white w-full mb-2">
            <Label className="italic text-lg p-5 font-bold text-left">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services.. great ambience and amazing staff and hospitality!
              Loving my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </Label>
          </div>
        </div>
        {/* </Row> */}
      </div>
    </React.Fragment>
  );
};
export default BlogDetails;
