import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";

function HomePage() {
  return (
    <div className="home-page-containers">
      <Navbar />
      <HomeIntro />
      <Sponsors/>
      

      <Footer />
    </div>
  );
}

export default HomePage;