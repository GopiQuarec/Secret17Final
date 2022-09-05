import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./header.css";

const HeaderRes = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav w-full">
        <div className="logo-container">
          <NavLink to="/">
            <img src={Logo} className="Logo" alt="logo" />
          </NavLink>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default HeaderRes;
