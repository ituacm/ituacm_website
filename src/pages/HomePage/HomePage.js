import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import Sponsors from "../../components/Sponsors/Sponsors";
import Stats from "../../components/Stats/Stats";
import AboutHomePage from "../../components/AboutHomePage/AboutHomePage";
import WhatsNext from "../../components/WhatsNext/WhatsNext";
import { useLoaderData } from "react-router-dom";

function HomePage() {
  const homeData = useLoaderData();
  return (
    <div className="home-page-containers">
      <HomeIntro />
      <Stats />
      <Sponsors />
      <WhatsNext events={homeData} />
      <AboutHomePage />
    </div>
  );
}

export default HomePage;
