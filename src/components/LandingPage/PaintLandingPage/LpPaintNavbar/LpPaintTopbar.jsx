import React from "react";
import "./LpPaintNavbar.css";
import { FaWhatsapp } from "react-icons/fa6";
const LpPaintTopbar = () => {
  return (
    <div className="lpPaintTop-container">
      <div className="lpPaintTop-content"></div>
      <div className="lpPaintTop-content">
        <h6>Get a Home Painting Estimate on WhatsApp in Just 30 Minutes!</h6>
      </div>
      <div className="lpPaintTop-content">
        <a href="https://api.whatsapp.com/send?phone=917090234446">
          <FaWhatsapp className="lpPaintTop-icon" />
        </a>
      </div>
    </div>
  );
};

export default LpPaintTopbar;
