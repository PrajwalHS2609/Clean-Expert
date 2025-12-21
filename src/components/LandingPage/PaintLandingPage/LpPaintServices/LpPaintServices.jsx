import React from "react";
import "./LpPaintServices.css";
import {
  GiEmptyMetalBucketHandle,
  GiLargePaintBrush,
  GiSpray,
} from "react-icons/gi";
import Link from "next/link";
import apartment from "@/images/LppaintServiceImgs/Apartment Painting.png";
import home from "@/images/LppaintServiceImgs/Home Painting.png";
import spray from "@/images/LppaintServiceImgs/Spray Painting.png";
import day1 from "@/images/LppaintServiceImgs/1 Day Express Painting.png";
import texture from "@/images/LppaintServiceImgs/Designer Walls.png";
import waterproofing from "@/images/LppaintServiceImgs/Waterproofing.png";
import Image from "next/image";
import { IoWater } from "react-icons/io5";
import { TbTexture } from "react-icons/tb";

const LpPaintServices = () => {
  const card = [
    {
      id: 1,
      img: home,
      title: "Home Painting",
      desc: [
        "Transform your interiors with our expert painting services, delivering superior finish, lasting quality, and modern style tailored to your space.",
        "Our trained and certified painters bring precision, care, and craftsmanship to enhance the beauty and life of your interiors.",
      ],
      icon: <GiLargePaintBrush />,
    },
    {
      id: 2,
      img: apartment,
      title: "Apartment Painting",
      desc: [
        "Transform your interiors with our expert painting services, delivering superior finish, lasting quality, and modern style tailored to your space.",
        "Our trained and certified painters bring precision, care, and craftsmanship to enhance the beauty and life of your interiors.",
      ],
      icon: <GiEmptyMetalBucketHandle />,
    },
    {
      id: 3,
      img: spray,
      title: "Spray Painting",
      desc: [
        "Spray painting delivers a smooth, even, and seamless finish, ensuring faster coverage and a premium look compared to traditional brush or roller methods.",
        "Ideal for large surfaces and modern interiors, spray painting reduces drying time and ensures uniform color consistency with minimal wastage.",
      ],
      icon: <GiSpray />,
    },
    {
      id: 4,
      img: day1,
      title: "1 Day Express Painting",
      desc: [
        "Complete home painting in just one day with a fast, efficient process that delivers high-quality finishes without disrupting your daily routine.",
        "Ideal for quick makeovers and urgent timelines, 1 Day Express Painting combines speed, precision, and professional execution for instant transformation.",
      ],
      icon: <GiEmptyMetalBucketHandle />,
    },
    {
      id: 5,
      img: texture,
      title: "Texture & Designer Walls",
      desc: [
        "Texture and designer walls add depth, character, and a premium aesthetic, transforming plain walls into stylish focal points for modern interiors.",
        "Customized patterns, finishes, and color combinations are expertly crafted to match your décor, enhancing elegance and long-lasting visual appeal.",
      ],
      icon: <TbTexture />,
    },
    {
      id: 6,
      img: waterproofing,
      title: "Waterproofing",
      desc: [
        "Waterproofing protects your home from leaks, dampness, and structural damage, ensuring long-term durability and a healthier living environment.",
        "Professional waterproofing solutions prevent costly repairs by creating a strong moisture barrier for terraces, walls, and bathrooms.",
      ],
      icon: <IoWater />,
    },
  ];
  return (
    <div className="lpPaintService-container">
      <div className="lpPaintService-heading">
        <h2>Trusted & Fast Home Painting Solutions</h2>
        <p>Experience Renovation That’s Quick, Neat, and Worry-Free</p>
      </div>
      <div className="lpPaintService-cardWrapper">
        {card.map((x) => (
          <Link href={"/"} key={x.id}>
            <div className="lpPaintService-card">
              <div className="lpPaintService-cardImg">
                <Image src={x.img} alt={x.title} />
              </div>
              <div className="lpPaintService-cardContent">
                <div className="lpPaintService-cardTitle">
                  <h3>{x.title}</h3>
                </div>
                <div className="lpPaintService-cardPara">
                  <ul>
                    {x.desc.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lpPaintService-cardIcon">
                <span>{x.icon}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <span id="why"></span>
    </div>
  );
};

export default LpPaintServices;
