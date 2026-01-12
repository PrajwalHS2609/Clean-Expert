import React from "react";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import "./ServiceHerosite.css";
const ServiceHerosite = () => {
  return (
    <div className="serviceHero-container">
      <img
        src="https://images.pexels.com/photos/5493664/pexels-photo-5493664.jpeg"
        alt=""
      />
      <div className="serviceHero-cover">
        <div className="serviceHero-content">
          <h2>Contact Us</h2>
          <BreadCrumb text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default ServiceHerosite;
