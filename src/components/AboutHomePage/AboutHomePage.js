import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutHomePage.css";

const AboutHomePage = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  const [isBetween, setIsBetween] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewHeight = window.innerHeight;

      let startRange;

      if (viewHeight <= 630) {
        startRange = viewHeight * 2.1;
      } else if (viewHeight <= 750) {
        startRange = viewHeight * 1.9;
      } else {
        startRange = viewHeight * 1.45;
      }

      if (scrollPosition >= startRange) {
        setIsBetween(true);
      } else {
        setIsBetween(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const combinedClasses = `image-card ${isBetween ? "scrolled" : ""}`;

  return (
    <div className={combinedClasses}>
      <img
        src="https://images.pexels.com/photos/7551762/pexels-photo-7551762.jpeg"
        alt="ReplaceImage"
        className="image"
      />
      <div className="overlay">
        <h2 className="header">Who are we?</h2>
        <p className="paragraph">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Enim morbi nunc
          turpis hendrerit accumsan, ultricies magna finibus. Eleifend molestie
          efficitur vulputate porttitor natoque quisque adipiscing. Erat
          condimentum aenean tempor sagittis sem pharetra pellentesque. Etiam
          proin metus nisl maecenas inceptos metus. Nostra dui iaculis hendrerit
          nisi nam netus.
        </p>
        <button className="learn-more" onClick={handleLearnMore}>
          {" "}
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutHomePage;
