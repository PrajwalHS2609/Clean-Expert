import React from "react";
import "./LpPaintServices.css";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import Link from "next/link";
const LpPaintServices = () => {
  const card = [
    {
      id: 1,
      img: "https://images.bergerpaints.com/s3fs-public/2023-11/Interior.png?format=webp&width=1080&quality=75",
      title: "Interior Painting",
      desc: [
        "Renovate your space with our expert Interior Painting Services. Quality and style guaranteed!",
        "Our trained and certified painters will add more life to your interiors.",
      ],
      icon: <GiEmptyMetalBucketHandle />,
    },
    {
      id: 2,
      img: "https://images.bergerpaints.com/s3fs-public/2023-11/Interior.png?format=webp&width=1080&quality=75",
      title: "Interior Painting",
      desc: [
        "Renovate your space with our expert Interior Painting Services. Quality and style guaranteed!",
        "Our trained and certified painters will add more life to your interiors.",
      ],
      icon: <GiEmptyMetalBucketHandle />,
    },
    {
      id: 3,
      img: "https://images.bergerpaints.com/s3fs-public/2023-11/Interior.png?format=webp&width=1080&quality=75",
      title: "Interior Painting",
      desc: [
        "Renovate your space with our expert Interior Painting Services. Quality and style guaranteed!",
        "Our trained and certified painters will add more life to your interiors.",
      ],
      icon: <GiEmptyMetalBucketHandle />,
    },
    {
      id: 4,
      img: "https://images.bergerpaints.com/s3fs-public/2023-11/Interior.png?format=webp&width=1080&quality=75",
      title: "Interior Painting",
      desc: [
        "Renovate your space with our expert Interior Painting Services. Quality and style guaranteed!",
        "Our trained and certified painters will add more life to your interiors.",
      ],
      icon: <GiEmptyMetalBucketHandle />,
    },
    {
      id: 5,
      img: "https://images.bergerpaints.com/s3fs-public/2023-11/Interior.png?format=webp&width=1080&quality=75",
      title: "Interior Painting",
      desc: [
        "Renovate your space with our expert Interior Painting Services. Quality and style guaranteed!",
        "Our trained and certified painters will add more life to your interiors.",
      ],
      icon: <GiEmptyMetalBucketHandle />,
    },
    {
      id: 6,
      img: "https://images.bergerpaints.com/s3fs-public/2023-11/Interior.png?format=webp&width=1080&quality=75",
      title: "Interior Painting",
      desc: [
        "Renovate your space with our expert Interior Painting Services. Quality and style guaranteed!",
        "Our trained and certified painters will add more life to your interiors.",
      ],
      icon: <GiEmptyMetalBucketHandle />,
    },
  ];
  return (
    <div className="lpPaintService-container">
      <div className="lpPaintService-heading">
        <h2>Safe Express Home Painting Services</h2>
        <p>Renovate Your Home Cleaner, Faster and Safer!</p>
      </div>
      <div className="lpPaintService-cardWrapper">
        {card.map((x) => (
          <Link href={"/"} key={x.id}>
            <div className="lpPaintService-card">
              <div className="lpPaintService-cardImg">
                <img src={x.img} alt={x.title} />
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
    </div>
  );
};

export default LpPaintServices;
