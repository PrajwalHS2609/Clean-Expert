"use client";

import React from "react";
import "./HomePaintingService.css";
import HeadingProps from "../../HeadingProps/HeadingProps";
import dayone from "./../../../images/homePaintIcons/dayone.png";
import home from "./../../../images/homePaintIcons/home-renovation.png";
import waterProof from "./../../../images/civilWork/water-proof.png";
import spray from "./../../../images/homePaintIcons/spray.png";
import apartment from "./../../../images/homePaintIcons/apartment.png";
import wall from "./../../../images/homePaintIcons/wall.png";

import Image from "next/image";
import Link from "next/link";

const HomePaintingService = () => {
  const card = [
    // { id: 1, img: paintBrush, title: "Interior Painting", link: "/" },
    { id: 1, img: home, title: "Home Painting", link: "/best-home-painting-in-bangalore" },
    { id: 2, img: apartment, title: "Apartment Painting", link: "/apartment-painting-services-in-bangalore" },
    { id: 3, img: spray, title: "Spray Painting", link: "/spray-painting-services-in-bangalore" },
    { id: 4, img: dayone, title: " 1 Day Express Painting", link: "/1-day-express-painting-services-in-bangalore" },
    { id: 5, img: wall, title: "Texture & Designer Walls", link: "/texture-and-designer-walls-service-in-bangalore" },
    { id: 6, img: waterProof, title: "Waterproofing​", link: "/waterproofing-service-in-bangalore" },
  ];
  // const handlePop = () => {
  //   document.querySelector(".popup-container").style.display = "flex";
  // };
  return (
    <div className="homePaintingService-container">
      <HeadingProps
        title="Painting Services in Bangalore"
        para="Give your home a renewed charm with a perfectly applied coat of paint. Our skilled professionals are available across Bangalore to restore beauty and vibrance to your walls."
      />

      <div className="homePaintingService-content">
        {card.map((x) => (
          <div className="homePaintingService-card" key={x.id}>
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

export default HomePaintingService;
