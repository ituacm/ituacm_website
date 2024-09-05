import React, { useState, useEffect } from "react";
import blueLogo from "../../assets/ituacm-logo-blue.png";
import whiteLogo from "../../assets/ituacm-logo-white.png";
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
  // this is for position:fixed navbar. if window.scrollY===0, there will be different styling
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  //responsive, for mobile users there will be a hamburger-dropdown menu
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  //dropdown menu state
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className={
        isAtTop ? "navbar-container  " : "navbar-container navbar-scroll"
      }
    >
      {windowWidth > 768 ? (
        <div className="navbar">
          <img className="logo" src={isAtTop ? blueLogo : whiteLogo} />
          <div className="navbar-link-container">
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
            <NavLink to="/events" className="navbar-link">
              Events
            </NavLink>
            <NavLink to="/courses" className="navbar-link">
              Courses
            </NavLink>
            <NavLink to="/calendar" className="navbar-link">
              Calendar
            </NavLink>
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </div>
        </div>
      ) : (
        //above is html for computer users
        //below is html for mobile users
        <>
          <img className="logo" src={isAtTop ? blueLogo : whiteLogo} />
          <div className="navbar-drowpdown">
            <div
              onClick={() => {
                setDropdown((dropdown) => !dropdown);
              }}
              className={dropdown ? "toggle toggle-active" : "toggle"}
            >
              <span className="top_line common"></span>
              <span className="middle_line common"></span>
              <span className="bottom_line common"></span>
            </div>
          </div>

          <div
            className={
              dropdown
                ? "navbar-dropdown-menu dropdown-active"
                : "navbar-dropdown-menu"
            }
          >
            <div className="navbar-link-container">
              <NavLink to="/" className="navbar-link">
                {" "}
                Home
              </NavLink>
              <NavLink to="/about" className="navbar-link">
                About
              </NavLink>
              <NavLink to="/events" className="navbar-link">
                Events
              </NavLink>
              <NavLink to="/contact" className="navbar-link">
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
