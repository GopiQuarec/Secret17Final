import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { GetBlogDetail } from "../../../services/services";

const NailArt = () => {
  const [nailsData, setNailsdata] = useState([]);
  // const [isReadMore, setIsReadMore] = useState(true);

  // const toggleReadMore = () => {
  //   setIsReadMore(!isReadMore);
  // };

  const getBlogData = () => {
    GetBlogDetail()
      .then((response) => {
        const result =
          response &&
          response.data.filter((item) => item.category === "nailarts");
        setNailsdata(result);
      })
      .catch((err) => {
        console.log("----err----", err);
      });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  const blogArtical = (article) => {
    if (article !== undefined) {
      let Blogarticle = article.slice(0, 150) + "....";
      return Blogarticle;
    }
    return article;
    // console.log("--------Article-------",article)
  };

  return (
    <React.Fragment>
      <div className="m-10">
        <Row>
          {nailsData &&
            nailsData.map((data, key) => {
              return (
                <Col>
                  <div className="drop-shadow-lg flex justify-center">
                    <img
                      src={data && data.articleImage}
                      alt="nails"
                      className="w-96 h-96 object-cover"
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-96 p-2  my-3 drop-shadow-lg bg-gradient-to-b from-black via-stone-800 to-stone-400 ...">
                      <h3 className="text-xl flex justify-center text-white">
                        {data.title.slice(0, 20)}
                      </h3>
                      <h4 className="flex justify-center text-white">
                        {data && data.article && blogArtical(data.article)}
                      </h4>
                      <div className="flex justify-center">
                        <Link to={{ pathname: "/blogs-detail", state: data }}>
                          <Button
                            className="bg-black"
                            // onClick={() => history.push("/blogs-detail")}
                          >
                            Read More...
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </React.Fragment>
  );
};
export default NailArt;
