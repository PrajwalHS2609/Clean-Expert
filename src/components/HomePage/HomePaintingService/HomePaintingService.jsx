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
  return (
    <div className="homePaintingService-container">
      <HeadingProps
        title="Painting Services Bangalore"
        para="Sometimes, a new coat of paint is all it takes to add some creativity to your lovely home! Book a service anywhere in Bangalore so that the home service specialists can come over and bring your walls back to life."
      />
      <div className="homePaintingService-content">
        {card.map((x) => (
          <Link href={"/"} key={x.id}>
            <div className="homePaintingService-card" >
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

export default HomePaintingService;
