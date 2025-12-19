"use client";
import React from "react";
import "./LpPaintWhy.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LpPaintWhy = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
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
    <div className="lpPaintWhy-container">
      <div className="lpPaintWhy-heading">
        <h2>Why Choose Prime Clean Painting?</h2>
        <p>
          We at Prime Clean Painting are trusted by thousands of families to
          complete their home painting projects and renovation services with our
          experts.
        </p>
      </div>
      <div className="lpPaintWhy-wrapper">
        <Carousel
          swipeable={true}
          draggable={true}
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
          <div className="lpPaintWhy-content">
            <div className="lpPaintWhy-item">
              {" "}
              <img
                src="https://images.bergerpaints.com/s3fs-public/2023-10/Mechanised%20Tools.png?format=webp&width=640&quality=75"
                alt=""
              />
            </div>
            <div className="lpPaintWhy-item">
              <h5>Mechanised Tools</h5>
              <p>
                We use Mechanised and Automated tools to provide a low-noise,
                faster, safer and cleaner painting experience for your home.
              </p>
            </div>
          </div>
          <div className="lpPaintWhy-content">
            <div className="lpPaintWhy-item">
              {" "}
              <img
                src="https://images.bergerpaints.com/s3fs-public/2025-02/Furniture%20%26%20Floor%20Covering_0.png?VersionId=B0XdGByDuVpTMU7bIKHCedJ6BFLthl.s&format=webp&width=640&quality=75"
                alt=""
              />
            </div>
            <div className="lpPaintWhy-item">
              <h5>Furniture & Floor Covering</h5>
              <p>
                We ensure that all your furniture, floor surface, and valuables
                are covered to protect them against paint spills and damage.
              </p>
            </div>
          </div>
          <div className="lpPaintWhy-content">
            <div className="lpPaintWhy-item">
              {" "}
              <img
                src="https://images.bergerpaints.com/s3fs-public/2023-10/Mechanised%20Tools.png?format=webp&width=640&quality=75"
                alt=""
              />
            </div>
            <div className="lpPaintWhy-item">
              <h5>Mechanised Tools</h5>
              <p>
                We use Mechanised and Automated tools to provide a low-noise,
                faster, safer and cleaner painting experience for your home.
              </p>
            </div>
          </div>
          <div className="lpPaintWhy-content">
            <div className="lpPaintWhy-item">
              {" "}
              <img
                src="https://images.bergerpaints.com/s3fs-public/2025-02/Furniture%20%26%20Floor%20Covering_0.png?VersionId=B0XdGByDuVpTMU7bIKHCedJ6BFLthl.s&format=webp&width=640&quality=75"
                alt=""
              />
            </div>
            <div className="lpPaintWhy-item">
              <h5>Furniture & Floor Covering</h5>
              <p>
                We ensure that all your furniture, floor surface, and valuables
                are covered to protect them against paint spills and damage.
              </p>
            </div>
          </div>
          <div className="lpPaintWhy-content">
            <div className="lpPaintWhy-item">
              {" "}
              <img
                src="https://images.bergerpaints.com/s3fs-public/2023-10/Mechanised%20Tools.png?format=webp&width=640&quality=75"
                alt=""
              />
            </div>
            <div className="lpPaintWhy-item">
              <h5>Mechanised Tools</h5>
              <p>
                We use Mechanised and Automated tools to provide a low-noise,
                faster, safer and cleaner painting experience for your home.
              </p>
            </div>
          </div>
          <div className="lpPaintWhy-content">
            <div className="lpPaintWhy-item">
              {" "}
              <img
                src="https://images.bergerpaints.com/s3fs-public/2025-02/Furniture%20%26%20Floor%20Covering_0.png?VersionId=B0XdGByDuVpTMU7bIKHCedJ6BFLthl.s&format=webp&width=640&quality=75"
                alt=""
              />
            </div>
            <div className="lpPaintWhy-item">
              <h5>Furniture & Floor Covering</h5>
              <p>
                We ensure that all your furniture, floor surface, and valuables
                are covered to protect them against paint spills and damage.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default LpPaintWhy;
