import React, { useState, useEffect } from "react";
import blueLogo from "./assets/ituacm-logo-blue.png";
import whiteLogo from "./assets/ituacm-logo-white.png";
import "./Navbar.css";
import "../../App.css";
import { NavLink } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

function Navbar() {
  // this is for position:fixed navbar
  // const [isAtTop, setIsAtTop] = useState(true);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsAtTop(window.scrollY === 0);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  // }, []);

  //responsive
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  //dropdown menu
  const [dropdown, setDropdown] = useState(false);
  console.log(dropdown);

  //active navbar link styling
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    fontSize: windowWidth > 768 ? "1rem" : "2.5rem",
  };

  return (
    <div className="navbar-container">
      {windowWidth > 768 ? (
        <>
          <div className="navbar-link-container">
            <NavLink to="/">
              {/* <img className={isAtTop ? 'logo' : 'logo no-display'} src={blueLogo} /> */}
              <img className={"logo"} src={whiteLogo} />
            </NavLink>

            <NavLink
              to="/"
              className="navbar-link"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              {" "}
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="navbar-link"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              About
            </NavLink>
            <NavLink
              to="/events"
              className="navbar-link"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Events
            </NavLink>
            <NavLink
              to="/contact"
              className="navbar-link"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Contact
            </NavLink>
          </div>

          <div className="navbar-icon-container">
            <a
              className="navbar-icon-anchor"
              href="https://www.instagram.com/ituacmsc"
              target="_blank"
            >
              <AiFillInstagram className="navbar-icon" />
            </a>
            <a
              className="navbar-icon-anchor"
              href="https://www.youtube.com/channel/UCCjjmsgFh5lRWhwoRH6p3tA"
              target="_blank"
            >
              <AiFillYoutube className="navbar-icon" />
            </a>
          </div>
        </>
      ) : (
        <>
          <img className={"logo"} src={whiteLogo} />
          <div className="navbar-drowpdown">
            <input type="checkbox" checked={dropdown} />
            <div
              onClick={() => {
                setDropdown((dropdown) => !dropdown);
              }}
              className="toggle"
            >
              <span className="top_line common"></span>
              <span className="middle_line common"></span>
              <span className="bottom_line common"></span>
            </div>
          </div>

          <input type="checkbox" checked={dropdown} />
          <div className="navbar-dropdown-menu">
            <div className="navbar-link-container">
              <NavLink
                to="/"
                className="navbar-link"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                {" "}
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="navbar-link"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                About
              </NavLink>
              <NavLink
                to="/events"
                className="navbar-link"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Events
              </NavLink>
              <NavLink
                to="/contact"
                className="navbar-link"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Contact
              </NavLink>
            </div>

            <div className="navbar-icon-container">
              <a href="https://www.instagram.com/ituacm" target="_blank">
                <AiFillInstagram className="navbar-icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCCjjmsgFh5lRWhwoRH6p3tA"
                target="_blank"
              >
                <AiFillYoutube className="navbar-icon" />
              </a>
              <a
                href="https://tr.linkedin.com/company/ituacmsc"
                target="_blank"
              >
                <AiFillLinkedin className="navbar-icon" />
              </a>
              <a href="https://x.com/ituacmsc" target="_blank">
                <AiFillTwitterCircle className="navbar-icon" />
              </a>
              <a href="https://github.com/ituacm" target="_blank">
                <AiFillGithub className="navbar-icon" />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
