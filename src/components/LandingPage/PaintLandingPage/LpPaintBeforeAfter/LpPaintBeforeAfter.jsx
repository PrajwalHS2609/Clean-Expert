"use client";

import React from "react";
import "./LpPaintBeforeAfter.css";

import img1After from "../../../../images/BeforeAfter/Img1After.png";
import img1Before from "../../../../images/BeforeAfter/Img1Before.png";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const LpPaintBeforeAfter = () => {
  const images = [
    {
      id: 1,
      imgAfter: img1After.src,
      imgBefore: img1Before.src,
    },
  ];

  return (
    <div className="lpPaintBeforeAfter-container">
      <div className="lpPaintBeforeAfter-heading">
        <h2></h2>
        <p></p>
      </div>

      <div className="lpPaintBeforeAfter-content">
        {images.map((x) => (
          <div className="lpPaintBeforeAfter-item" key={x.id}>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={x.imgBefore}
                  alt="Image before"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={x.imgAfter}
                  alt="Image after"
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LpPaintBeforeAfter;
