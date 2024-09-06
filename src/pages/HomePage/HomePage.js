import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import Sponsors from "../../components/Sponsors/Sponsors";
import Stats from "../../components/Stats/Stats";
import AboutHomePage from "../../components/AboutHomePage/AboutHomePage";

function HomePage() {
  return (
    <div className="home-page-containers">
      <HomeIntro />
      <Stats />
      <Sponsors />
      <AboutHomePage />
    </div>
  );
}

export default HomePage;
