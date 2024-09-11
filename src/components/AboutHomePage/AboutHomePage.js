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
        startRange = viewHeight * 1.8;
      } else if (viewHeight <= 750) {
        startRange = viewHeight * 1.55;
      } else {
        startRange = viewHeight * 1.25;
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
          ITU ACM Student Chapter is the largest computer science and software
          club at Istanbul Technical University. We provide students with
          opportunities to enhance their technical skills, build projects, and
          connect with the industry. Hosting prestigious events like AlgoComp,
          we also offer hackathons, technical workshops, and social activities
          to prepare students for both academic and professional success. Join
          the ITU ACM family and accelerate your growth as part of our vibrant
          community!
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
