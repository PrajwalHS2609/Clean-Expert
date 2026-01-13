import React from "react";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import "./ServiceHerosite.css";
const ServiceHerosite = (props) => {
  return (
    <div className="serviceHero-container">
      <img
        src="https://images.pexels.com/photos/5493664/pexels-photo-5493664.jpeg"
        alt=""
      />
      <div className="serviceHero-cover">
        <div className="serviceHero-content">
          <h2>{props.title}</h2>
          <BreadCrumb text={props.title} />
        </div>
      </div>
    </div>
  );
};

export default ServiceHerosite;
