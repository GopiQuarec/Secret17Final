import React, { useState } from "react";
import { TabPane, TabContent, Nav, NavItem, NavLink } from "reactstrap";

import NailArt from "./nailArt";
import Womens from "./women";
import Men from "./men";
import HairSpa from "./hairspa";
import HairStyle from "./hairstyle";
import Products from "./products";

import "../../../index.css";
const OurBlog = () => {
  const [blogActiveTab, setBlogActiveTab] = useState(1);

  const toggle = (tab) => {
    if (blogActiveTab !== tab) {
      setBlogActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="blog-texture">
        <div className="flex justify-center">
          <h2 className="text-white bg-black px-8 py-2 m-10 uppercase text-3xl">
            Our Blogs
          </h2>
        </div>
        <div className="flex justify-center mt-10">
          <Nav fill pills className="flex flex-row">
            <NavItem className="text-white mx-2 text-xl m-2">
              <NavLink
                className={{ active: blogActiveTab === 1 }}
                onClick={() => toggle(1)}
                style={{
                  cursor: "pointer",
                  backgroundColor: blogActiveTab === 1 ? "white" : "black",
                  color: blogActiveTab === 1 ? "black" : "white",
                  border: "2px solid black",
                }}
              >
                Women
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2 text-xl m-2">
              <NavLink
                className={{ active: blogActiveTab === 2 }}
                onClick={() => toggle(2)}
                style={{
                  cursor: "pointer",
                  backgroundColor: blogActiveTab === 2 ? "white" : "black",
                  color: blogActiveTab === 2 ? "black" : "white",
                  border: "2px solid black",
                }}
              >
                Men
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2 text-xl m-2">
              <NavLink
                className={{ active: blogActiveTab === 3 }}
                onClick={() => toggle(3)}
                style={{
                  cursor: "pointer",
                  backgroundColor: blogActiveTab === 3 ? "white" : "black",
                  color: blogActiveTab === 3 ? "black" : "white",
                  border: "2px solid black",
                }}
              >
                Products
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2 text-xl m-2">
              <NavLink
                className={{ active: blogActiveTab === 4 }}
                onClick={() => toggle(4)}
                style={{
                  cursor: "pointer",
                  backgroundColor: blogActiveTab === 4 ? "white" : "black",
                  color: blogActiveTab === 4 ? "black" : "white",
                  border: "2px solid black",
                }}
              >
                Nailarts
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2 text-xl m-2">
              <NavLink
                className={{ active: blogActiveTab === 5 }}
                onClick={() => toggle(5)}
                style={{
                  cursor: "pointer",
                  backgroundColor: blogActiveTab === 5 ? "white" : "black",
                  color: blogActiveTab === 5 ? "black" : "white",
                  border: "2px solid black",
                }}
              >
                Hairstyles
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2 text-xl m-2">
              <NavLink
                className={{ active: blogActiveTab === 6 }}
                onClick={() => toggle(6)}
                style={{
                  cursor: "pointer",
                  backgroundColor: blogActiveTab === 6 ? "white" : "black",
                  color: blogActiveTab === 6 ? "black" : "white",
                  border: "2px solid black",
                }}
              >
                Hair Spa
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div>
          <TabContent activeTab={blogActiveTab}>
            <TabPane tabId={1}>
              <Womens />
            </TabPane>
            <TabPane tabId={2}>
              <Men />
            </TabPane>
            <TabPane tabId={3}>
              <Products />
            </TabPane>
            <TabPane tabId={4}>
              <NailArt />
            </TabPane>
            <TabPane tabId={5}>
              <HairStyle />
            </TabPane>
            <TabPane tabId={6}>
              <HairSpa />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </React.Fragment>
  );
};
export default OurBlog;
