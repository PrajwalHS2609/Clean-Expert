import React from "react";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import "./ServiceHerosite.css";
import Image from "next/image";
const ServiceHerosite = (props) => {
  return (
    <div className="serviceHero-container">
      <Image
        src={props.banner}
        alt={props.title}
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
