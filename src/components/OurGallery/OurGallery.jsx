"use client";
import React from "react";
import "./OurGallery.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imgBefore1 from "@/images/BeforeAfter/Img1Before.png";
import imgAfter1 from "@/images/BeforeAfter/Img1After.png";
import imgBefore2 from "@/images/BeforeAfter/Img2Before.png";
import imgAfter2 from "@/images/BeforeAfter/Img2After.png";
import imgBefore3 from "@/images/BeforeAfter/Img3Before.png";
import imgAfter3 from "@/images/BeforeAfter/Img3After.png";
import imgBefore4 from "@/images/BeforeAfter/Img4Before.png";
import imgAfter4 from "@/images/BeforeAfter/Img4After.png";
import imgBefore5 from "@/images/BeforeAfter/Img5Before.png";
import imgAfter5 from "@/images/BeforeAfter/Img5After.png";
import imgBefore6 from "@/images/BeforeAfter/Img6Before.png";
import imgAfter6 from "@/images/BeforeAfter/Img6After.png";
import imgBefore7 from "@/images/BeforeAfter/Img7Before.png";
import imgAfter7 from "@/images/BeforeAfter/Img7After.png";
import imgBefore8 from "@/images/BeforeAfter/Img8Before.png";
import imgAfter8 from "@/images/BeforeAfter/Img8After.png";
import imgBefore9 from "@/images/BeforeAfter/Img9Before.png";
import imgAfter9 from "@/images/BeforeAfter/Img9After.png";
import imgBefore10 from "@/images/BeforeAfter/Img10Before.png";
import imgAfter10 from "@/images/BeforeAfter/Img10After.png";
import imgBefore11 from "@/images/BeforeAfter/Img11Before.png";
import imgAfter11 from "@/images/BeforeAfter/Img11After.png";
import imgBefore12 from "@/images/BeforeAfter/Img12Before.png";
import imgAfter12 from "@/images/BeforeAfter/Img12After.png";
import imgBefore13 from "@/images/BeforeAfter/Img13Before.png";
import imgAfter13 from "@/images/BeforeAfter/Img13After.png";
import imgBefore14 from "@/images/BeforeAfter/Img14Before.png";
import imgAfter14 from "@/images/BeforeAfter/Img14After.png";
import imgBefore15 from "@/images/BeforeAfter/Img15Before.png";
import imgAfter15 from "@/images/BeforeAfter/Img15After.png";
const OurGallery = () => {
  const images = [
    {
      id: 1,
      imgAfter: imgBefore1.src,
      imgBefore: imgAfter1.src,
    },
    {
      id: 2,
      imgAfter: imgBefore2.src,
      imgBefore: imgAfter2.src,
    },
    {
      id: 3,
      imgAfter: imgBefore3.src,
      imgBefore: imgAfter3.src,
    },
    {
      id: 4,
      imgAfter: imgBefore4.src,
      imgBefore: imgAfter4.src,
    },
    {
      id: 5,
      imgAfter: imgBefore5.src,
      imgBefore: imgAfter5.src,
    },
    {
      id: 6,
      imgAfter: imgBefore6.src,
      imgBefore: imgAfter6.src,
    },
    {
      id: 7,
      imgAfter: imgBefore7.src,
      imgBefore: imgAfter7.src,
    },
    {
      id: 8,
      imgAfter: imgBefore8.src,
      imgBefore: imgAfter8.src,
    },
    {
      id: 9,
      imgAfter: imgBefore9.src,
      imgBefore: imgAfter9.src,
    },
    {
      id: 10,
      imgAfter: imgBefore10.src,
      imgBefore: imgAfter10.src,
    },
    {
      id: 11,
      imgAfter: imgBefore11.src,
      imgBefore: imgAfter11.src,
    },
    {
      id: 12,
      imgAfter: imgBefore12.src,
      imgBefore: imgAfter12.src,
    },
    {
      id: 13,
      imgAfter: imgBefore13.src,
      imgBefore: imgAfter13.src,
    },
    {
      id: 14,
      imgAfter: imgBefore14.src,
      imgBefore: imgAfter14.src,
    },
    {
      id: 15,
      imgAfter: imgBefore15.src,
      imgBefore: imgAfter15.src,
    },
  ];
  return (
    <div className="ourGallery-container">
      <div className="ourGallery-content">
        {images.map((x) => (
          <div className="ourGallery-item" key={x.id}>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src={x.imgBefore} alt="Image before" />
              }
              itemTwo={
                <ReactCompareSliderImage src={x.imgAfter} alt="Image after" />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGallery;
