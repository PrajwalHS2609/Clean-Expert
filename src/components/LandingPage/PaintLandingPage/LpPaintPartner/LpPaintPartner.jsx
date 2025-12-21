import React from "react";
import nippon from "../../../../images/nippon.png";
import berger from "../../../../images/berger.png";
import opus from "../../../../images/opus.png";
import yulu from "../../../../images/yulu.png";
import Image from "next/image";
import "./LpPaintPartner.css"
const LpPaintPartner = () => {
  return (
    <div className="lpPaintPartner-container">
      <div className="lpPaintPartner-content">
        <h2>Exclusive Painting Partners Trusted Across Bangalore</h2>
        <p>
          As exclusive partners of India’s leading painting brand, we deliver
          professional painting services to Bangalore homeowners. With 5,000+
          homes completed, PaintKraft’s trusted painters ensure quality,
          reliability, and flawless finishes every time.
        </p>
      </div>
      <div className="lpPaintPartner-content">
        <div className="lpPaintPartner-item">
          <Image src={nippon} alt="nippon" />
        </div>
        <div className="lpPaintPartner-item">
          <Image src={berger} alt="berger" />
        </div>
        <div className="lpPaintPartner-item">
          <Image src={opus} alt="opus" />
        </div>
        <div className="lpPaintPartner-item">
          <Image src={yulu} alt="yulu" />
        </div>
      </div>
    </div>
  );
};

export default LpPaintPartner;
