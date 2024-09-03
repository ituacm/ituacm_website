import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div className="home-page-containers">
      <Navbar />
      <HomeIntro />
      <Footer />
    </div>
  );
}

export default HomePage;
