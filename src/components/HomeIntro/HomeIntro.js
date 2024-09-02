import React from "react";
import "./HomeIntro.css";
import { Link } from "react-router-dom";

function HomeIntro() {
  return (
    <div className="home-intro-container">
      <div className="home-intro-content">
        <h1 className="home-intro-header">Welcome to ITU ACM!</h1>
        <p className="home-intro-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          quisquam, rerum modi velit soluta necessitatibus.
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
      </div>
    </div>
  );
}

export default HomeIntro;
