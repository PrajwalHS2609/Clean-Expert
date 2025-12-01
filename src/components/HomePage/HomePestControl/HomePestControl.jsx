import React from "react";
import "./HomePestControl.css";
import HeadingProps from "../../HeadingProps/HeadingProps";
import paintBrush from "./../../../images/homePaintIcons/paint-brush.png";
import varnish from "./../../../images/homePaintIcons/varnish.png";
import home from "./../../../images/homePaintIcons/home-renovation.png";
import Link from "next/link";
import Image from "next/image";
const HomePestControl = () => {
  const card = [
    { id: 1, img: paintBrush, title: "General Pest Control", link: "/" },
    { id: 2, img: home, title: "Termite", link: "/" },
    { id: 3, img: varnish, title: "Bed Bugs", link: "/" },
    { id: 4, img: paintBrush, title: "Combo: Best value for money", link: "/" },
    { id: 5, img: home, title: "Mosquito", link: "/" },
  ];
  return (
    <div className="homePestControl-container">
      <HeadingProps title="Pest Control" para="" />
      <div className="homePestControl-content">
        {card.map((x) => (
          <Link href={"/"} key={x.id}>
            <div className="homePestControl-card">
              <span>
                <Image src={x.img} alt={x.title} />
              </span>
              <h5>{x.title}</h5>
              <Link href={x.link}>
                <button>Know the cost</button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePestControl;
