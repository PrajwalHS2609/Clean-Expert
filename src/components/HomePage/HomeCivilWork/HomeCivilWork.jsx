import React from "react";
import "./HomeCivilWork.css";
import HeadingProps from "../../HeadingProps/HeadingProps";
import paintBrush from "./../../../images/homePaintIcons/home-renovation.png";
import Image from "next/image";
import Link from "next/link";
const HomeCivilWork = () => {
  const card = [
    {
      id: 1,
      img: paintBrush,
      title: "Bathroom Remodeling/Renovation",
      link: "/",
    },
    { id: 2, img: paintBrush, title: "Tiles/Stones Replacement", link: "/" },
    { id: 3, img: paintBrush, title: "Replastering", link: "/" },
    { id: 4, img: paintBrush, title: "Wall Crack Filling", link: "/" },
    { id: 5, img: paintBrush, title: "Home Inspection", link: "/" },
    { id: 6, img: paintBrush, title: "Waterproofing​", link: "/" },
    { id: 7, img: paintBrush, title: "Grouting", link: "/" },
  ];
  return (
    <div className="homeCivicWork-container">
      <HeadingProps
        title="Civil Works"
        para="Are you looking to revitalize an existing space? Clean Fanatics bring you unrivaled expertise in civil works and renovation services. When you’re ready to embark on your next construction or renovation journey, we’re here to make it extraordinary."
      />
      <div className="homeCivicWork-content">
        {card.map((x) => (
          <Link href={"/"} key={x.id}>
            <div className="homeCivicWork-card">
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

export default HomeCivilWork;
