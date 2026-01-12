"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import balcony from "./../../../images/serviceIcons/balcony.png";
import bathroom from "./../../../images/serviceIcons/bathroom.png";
import beds from "./../../../images/serviceIcons/bed.png";
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
    { id: 1, img: house, title: "Full-house Deep Cleaning", link: "/full-house-deep-cleaning-services-in-bangalore" },
    { id: 2, img: bathroom, title: "Bathroom", link: "/bathroom-cleaning-services-in-bangalore" },
    { id: 3, img: kitchen, title: "Kitchen", link: "/kitchen-cleaning-services-in-bangalore" },
    { id: 4, img: hood, title: "Chimney", link: "/chimney-cleaning-services-in-bangalore" },
    { id: 5, img: carpet, title: "Carpet", link: "/carpet-cleaning-services-in-bangalore" },
    { id: 6, img: sofa, title: "Sofa", link: "/sofa-cleaning-services-in-bangalore" },
    { id: 7, img: beds, title: "Mattress", link: "/mattress-cleaning-services-in-bangalore" },
    { id: 8, img: windows, title: "Window", link: "/window-cleaning-services-in-bangalore" },
    { id: 9, img: balcony, title: "Balcony", link: "/balcony-cleaning-services-in-bangalore" },
    { id: 10, img: office, title: "Chair", link: "/chair-cleaning-services-in-bangalore" },
  ];
  // const handlePop = () => {
  //   document.querySelector(".popup-container").style.display = "flex";
  // };
  return (
    <div className="homeCleanService-container">
      <HeadingProps
        title="Cleaning Services Bangalore"
        para="Revitalize your space with our professional Cleaning Services in Bangalore. With deep cleaning tailored to your needs, discover the transformative power of unprecedented freshness!"
      />
      <div className="homeCleanService-content">
        {card.map((x) => (
          <div className="homeCleanService-card" key={x.id}>
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

export default HomeCleanService;
