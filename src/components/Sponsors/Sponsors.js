import React from "react";
import "../Sponsors/Sponsors.css";
import AcmWhite from "../../assets/acm-white.png";

function Sponsors() {
  return (
    <div class="sponsors-container">
      <div class="logos-slide">
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
      </div>

      <div class="logos-slide">
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
      </div>
    </div>
  );
}

export default Sponsors;
