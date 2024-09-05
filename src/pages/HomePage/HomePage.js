import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";
import Stats from "../../components/Stats/Stats";
import AboutHomePage from "../../components/AboutHomePage/AboutHomePage"

function HomePage() {
  return (
    <div className="home-page-containers">
      <HomeIntro />
      <Stats/>
      <Sponsors />
      <Stats />
      <AboutHomePage />
    </div>
  );
}

export default HomePage;