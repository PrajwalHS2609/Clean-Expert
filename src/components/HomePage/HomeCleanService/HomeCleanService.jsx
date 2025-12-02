"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import balcony from "./../../../images/serviceIcons/balcony.png";
import bathroom from "./../../../images/serviceIcons/bathroom.png";
import bed from "./../../../images/serviceIcons/bed.png";
import carpet from "./../../../images/serviceIcons/carpet.png";
import house from "./../../../images/serviceIcons/house.png";
import kitchen from "./../../../images/serviceIcons/kitchen.png";
import office from "./../../../images/serviceIcons/office-chair.png";
import sofa from "./../../../images/serviceIcons/sofa.png";
import windows from "./../../../images/serviceIcons/windows.png";
import work from "./../../../images/serviceIcons/workspace.png";
import hood from "./../../../images/serviceIcons/extractor-hood.png";
import "./HomeCleanService.css";
import HeadingProps from "@/components/HeadingProps/HeadingProps";
const HomeCleanService = () => {
  const card = [
    { id: 1, img: house, title: "Full-house Deep Cleaning", link: "/" },
    { id: 2, img: bathroom, title: "Bathroom", link: "/" },
    { id: 3, img: kitchen, title: "Kitchen", link: "/" },
    { id: 4, img: hood, title: "Chimney", link: "/" },
    { id: 5, img: carpet, title: "Carpet", link: "/" },
    { id: 6, img: sofa, title: "Sofa", link: "/" },
    { id: 7, img: bed, title: "Mattress", link: "/" },
    { id: 8, img: windows, title: "Window", link: "/" },
    { id: 9, img: balcony, title: "Balcony", link: "/" },
    { id: 10, img: office, title: "Chair", link: "/" },
    { id: 11, img: work, title: "Office Cleaning", link: "/" },
  ];
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="homeCleanService-container">
      <HeadingProps
        title="Cleaning Services Bangalore"
        para="Revitalize your space with our professional Cleaning Services in Bangalore. With deep cleaning tailored to your needs, discover the transformative power of unprecedented freshness!"
      />
      <div className="homeCleanService-content">
        {card.map((x) => (
          <div className="homeCleanService-card" key={x.id}>
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

export default HomeCleanService;
