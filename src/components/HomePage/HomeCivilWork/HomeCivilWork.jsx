"use client";
import React from "react";
import "./HomeCivilWork.css";
import HeadingProps from "../../HeadingProps/HeadingProps";
import crack from "./../../../images/civilWork/crack.png";
import inspection from "./../../../images/civilWork/inspection.png";
import bathroom from "./../../../images/civilWork/sink.png";
import replastering from "./../../../images/civilWork/replastering.png";
import tile from "./../../../images/civilWork/tile.png";
import grouting from "./../../../images/civilWork/grouting.png";

import Image from "next/image";
import Link from "next/link";
const HomeCivilWork = () => {
  const card = [
    {
      id: 1,
      img: bathroom,
      title: "Bathroom Remodeling",
      link: "/bathroom-remodeling-service-in-bangalore",
    },
    {
      id: 2,
      img: tile,
      title: "Tiles/Stones Replacement",
      link: "/tiles-and-stones-replacement-service-in-bangalore",
    },
    {
      id: 3,
      img: replastering,
      title: "Replastering",
      link: "/re-plastering-service-in-bangalore",
    },
    {
      id: 4,
      img: crack,
      title: "Wall Crack Filling",
      link: "/wall-crack-filling-in-bangalore",
    },
    {
      id: 5,
      img: inspection,
      title: "Home Inspection",
      link: "/home-inspection-services-in-bangalore",
    },
    {
      id: 6,
      img: grouting,
      title: "Grouting",
      link: "/grouting-services-in-bangalore",
    },
  ];
  // const handlePop = () => {
  //   document.querySelector(".popup-container").style.display = "flex";
  // };
  return (
    <div className="homeCivicWork-container">
      <HeadingProps
        title="Civil Works in Bangalore"
        para="Ready to give your space a fresh new look? Prime Clean provide top-quality civil works and renovation services across Bangalore. From minor fixes to complete transformations, we make your renovation journey smooth and extraordinary."
      />
      <div className="homeCivicWork-content">
        {card.map((x) => (
          <div className="homeCivicWork-card" key={x.id}>
            <Link href={x.link}>
              {" "}
              <span>
                <Image src={x.img} alt={x.title} />
              </span>
              <h5>{x.title}</h5>
            </Link>
            {/* <div className="button-group">
              <Link href={x.link}>
                <button className="btn-primary">Details</button>
              </Link>

              <button className="btn-secondary" onClick={handlePop}>
                Book Now
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCivilWork;
