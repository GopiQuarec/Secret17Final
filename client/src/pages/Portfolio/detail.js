import React from "react";
import moment from "moment";

const BlogDetail = (props) => {
  const Data = props.location.state;
  console.log("--------Data-------", Data);
  return (
    <React.Fragment>
      {/* <Tabcomponent /> */}
      <div className="container px-10"></div>
      <div className="container p-10">
        <div className="float-left ...">
          <h3 className="mx-10 mb-0">
            {moment(
              Data && Data.createdAt ? Data && Data.createdAt : null
            ).format("DD/MM/YYYY")}
          </h3>
          <div>
            <img
              width="400px"
              height="400px"
              className="mx-10"
              src={Data && Data.articleImage}
              alt="Nails"
            />
          </div>
        </div>

        <p> {Data && Data.article ? Data && Data.article : null}</p>
        <div className="flex justify-end">
          <h3 className="font-bold text-lg">
            ~ {Data && Data.authorname ? Data && Data.authorname : null}
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BlogDetail;
