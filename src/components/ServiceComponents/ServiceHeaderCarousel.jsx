"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { LuBadgeCheck, LuPaintbrush } from "react-icons/lu";
import { RxTimer } from "react-icons/rx";
import { MdCurrencyRupee } from "react-icons/md";
import { ImLeaf } from "react-icons/im";
import { GrPlan } from "react-icons/gr";
import { FaEye } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";

const ServiceHeaderCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // ⬅️ reduced from 10 (10 breaks layout)
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const items = [
    { icon: <FaUsersCog />, text: "Trained Cleaning Experts" },
    { icon: <LuPaintbrush />, text: "Deep Hygienic Cleaning" },
    { icon: <RxTimer />, text: "On-Time Service Promise" },
    { icon: <BsTools />, text: "Professional Tools" },
    { icon: <FaEye />, text: "Expert Supervision" },
    { icon: <ImLeaf />, text: "Eco-Safe Cleaning Products" },
    { icon: <GrPlan />, text: "Custom Cleaning Plans" },
    { icon: <LuPaintbrush />, text: "Safe & Secure Service" },
    { icon: <MdCurrencyRupee />, text: "Clear & Transparent Pricing" },
    { icon: <LuBadgeCheck />, text: "Guaranteed Satisfaction" },
  ];

  return (
    <div className="serviceHeaderCarousel-container">
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots={false}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={2500}
        keyBoardControl
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        itemClass="serviceHeaderCarousel-item"
      >
        {items.map((item, index) => (
          <div className="serviceHeaderCarousel-wrapper" key={index}>
            <span className="serviceHeaderCarousel-icon">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceHeaderCarousel;
