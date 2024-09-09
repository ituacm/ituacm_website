import React, { useEffect, useState } from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "./HomeIntro.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function HomeIntro() {
  const [headerText, setHeaderText] = useState("");
  const text = "Welcome to ITU ACM!";
  const typingSpeed = 100;
  let index = 0;

  return (
    <div className="home-intro-container">
      <div className="home-intro-content">
        <h1 className="home-intro-header">
          {"W"}
          <Typewriter words={["elcome to ITU ACM!"]} loop={1} typeSpeed={100} />
        </h1>
        <p className="home-intro-text">
          Your Place for Skill-Building Opportunities, Engaging Events, and
          Thrilling Tech Experiences
        </p>
        <ul className="home-intro-button-group">
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/1w4bAkhqatXXPSXyMjv_jzYFv9eZU2h0hLvLjhFA2yVc/viewform?edit_requested=true"
            >
              <button className="primary-button home-intro-join-us-button">
                Join us now
              </button>
            </a>
          </li>
          <li>
            <button className="primary-button home-intro-join-us-button">
              Contact Us
            </button>
          </li>
        </ul>
        <ul className="home-intro-links">
          <li className="home-intro-link">
            <a href="/">
              <FaInstagram className="home-intro-link-icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaYoutube className="home-intro-link-icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaGithub className="home-intro-link-icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedin className="home-intro-link-icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaXTwitter className="home-intro-link-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeIntro;
