import React from "react";
import "../Sponsors/Sponsors.css";
import AcmWhite from "../../assets/acm-white.png";
import BtcTurkLogo from "../../assets/btcturk-logo-light.png"
import SoftTechLogo from "../../assets/Softtech_white_logo.png"
import TurkishAerospaceLogo from "../../assets/Turkish Aerospace Beyaz.png"
import PixeryLogo from "../../assets/pixery.jpeg"
import HondaLogo from "../../assets/Honda-Logo-PNG-White@.png"
import DefinexLogo from "../../assets/definex.png"
import TarentumLogo from "../../assets/tarentum.png"
import BilgeAdamTeknolojiLogo from "../../assets/technologies-logo.png"
import CommencisLogo from "../../assets/BackgroundEraser_20240904_173332082.png"
import ArçelikLogo from "../../assets/arçelik.png"
import InventAnalyticsLogo from "../../assets/invent-main-og-Photoroom.png"

function Sponsors() {
  return (
    <div class="sponsors-container">
      <div class="logos-slide">
        <img src={BtcTurkLogo} />
        <img src={SoftTechLogo} />
        <img src={TurkishAerospaceLogo} />
        <img src={HondaLogo} />
        <img src={BilgeAdamTeknolojiLogo} />
        <img src={DefinexLogo} />
        <img src={TarentumLogo} />
      
        <img src={CommencisLogo} />
        <img src={ArçelikLogo} />
        <img src={InventAnalyticsLogo} />

       
      </div>

      <div class="logos-slide">
      <img src={BtcTurkLogo} />
        <img src={SoftTechLogo} />
        <img src={TurkishAerospaceLogo} />
        <img src={HondaLogo} />
        <img src={BilgeAdamTeknolojiLogo} />
        <img src={DefinexLogo} />
        <img src={TarentumLogo} />
        <img src={CommencisLogo} />
        <img src={ArçelikLogo} />
        <img src={InventAnalyticsLogo} />
      </div>
    </div>
  );
}

export default Sponsors;
