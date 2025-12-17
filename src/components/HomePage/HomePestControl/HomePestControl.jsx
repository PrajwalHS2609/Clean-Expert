"use client";
import React from "react";
import "./HomePestControl.css";
import HeadingProps from "../../HeadingProps/HeadingProps";
import pestControl from "./../../../images/pestIcons/pest-control.png";
import termite from "./../../../images/pestIcons/termite.png";
import bedbug from "./../../../images/pestIcons/bedbug.png";
import pesticide from "./../../../images/pestIcons/pesticide.png";
import mosquito from "./../../../images/pestIcons/mosquito.png";

import Link from "next/link";
import Image from "next/image";
const HomePestControl = () => {
  const card = [
    { id: 1, img: pestControl, title: "General Pest Control", link: "/" },
    { id: 2, img: termite, title: "Termite", link: "/" },
    { id: 3, img: bedbug, title: "Bed Bugs", link: "/" },
    { id: 4, img: pesticide, title: "Combo: Best value for money", link: "/" },
    { id: 5, img: mosquito, title: "Mosquito", link: "/" },
  ];
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="homePestControl-container">
      <HeadingProps
        title="Pest Control Service in Bangalore"
        para="Protect your space with Prime Clean’ advanced pest control service — safe, eco-friendly, and guaranteed results across Bangalore."
      />
      <div className="homePestControl-content">
        {card.map((x) => (
          <div className="homePestControl-card" key={x.id}>
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

export default HomePestControl;
