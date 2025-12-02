"use client";

import React from "react";
import "./HomePaintingService.css";
import HeadingProps from "../../HeadingProps/HeadingProps";
import paintBrush from "./../../../images/homePaintIcons/paint-brush.png";
import varnish from "./../../../images/homePaintIcons/varnish.png";
import home from "./../../../images/homePaintIcons/home-renovation.png";

import Image from "next/image";
import Link from "next/link";

const HomePaintingService = () => {
  const card = [
    { id: 1, img: paintBrush, title: "Interior Painting", link: "/" },
    { id: 2, img: home, title: "Exterior Painting", link: "/" },
    { id: 3, img: varnish, title: "Wood Polishing", link: "/" },
  ];
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="homePaintingService-container">
      <HeadingProps
        title="Painting Services in Bangalore"
        para="Give your home a renewed charm with a perfectly applied coat of paint. Our skilled professionals are available across Bangalore to restore beauty and vibrance to your walls."
      />

      <div className="homePaintingService-content">
        {card.map((x) => (
          <div className="homePaintingService-card" key={x.id}>
            <span>
              <Image src={x.img} alt={x.title} />
            </span>

            <h5>{x.title}</h5>

            <div className="button-group">
              <Link href={x.link}>
                <button className="btn-primary">Details</button>
              </Link>

              <button className="btn-secondary" onClick={handlePop}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePaintingService;
