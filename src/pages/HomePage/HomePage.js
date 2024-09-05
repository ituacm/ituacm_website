import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";
import Stats from "../../components/Stats/Stats";

function HomePage() {
  return (
    <div className="home-page-containers">
      <HomeIntro />
      <Stats/>
      <Sponsors />
      
    </div>
  );
}

export default HomePage;