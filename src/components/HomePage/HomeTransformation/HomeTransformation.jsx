"use client";
import React from "react";
import "./HomeTransformation.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeTransformation = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="homeTransformation-container">
      <h2>Transformations You’ll Love</h2>

      <p>
        Experience stunning makeovers that refresh your space and
        elevate your lifestyle.
      </p>
      <div className="homeTransformation-wrapper">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="homeTransformation-content">
            <img
              src="https://cleanfanatics.com/wp-content/uploads/2025/02/Before-and-After-All-Services.webp"
              alt=""
            />
          </div>
          <div className="homeTransformation-content">
            <img
              src="https://cleanfanatics.com/wp-content/uploads/2025/02/Before-and-After-All-Services-24.webp"
              alt=""
            />
          </div>
          <div className="homeTransformation-content">
            <img
              src="https://cleanfanatics.com/wp-content/uploads/2025/02/Before-and-After-All-Services-23.webp"
              alt=""
            />
          </div>
          <div className="homeTransformation-content">
            <img
              src="https://cleanfanatics.com/wp-content/uploads/2025/02/Before-and-After-All-Services-22.webp"
              alt=""
            />
          </div>
          <div className="homeTransformation-content">
            <img
              src="https://cleanfanatics.com/wp-content/uploads/2025/02/Before-and-After-All-Services.webp"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeTransformation;
