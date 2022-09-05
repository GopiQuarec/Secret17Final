/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import MenuIcon from "../../assets/icons/menu.png";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <NavLink to="/">
        <img src={Logo} className="Logo" alt="logo" />
      </NavLink>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>

          {/* <div className="dropdown" href="/services">
            <button className="dropbtn">Services</button>

            <div className="dropdown-content">
              <a href="/">Break My Lease</a>
              <a href="/">Sell My Machine</a>
            </div>
          </div> */}
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <img src={MenuIcon} alt="menu" width={20} height={20} />
        {/* <span>D</span> */}
      </button>
    </header>
  );
}
