import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Stats from "../../components/Stats/Stats";

function HomePage() {
  return (
    <div className="home-page-containers">
      <Navbar />
      <HomeIntro />
      <Stats/>
      <Footer />
    </div>
  );
}

export default HomePage;
