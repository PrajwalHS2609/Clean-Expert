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
      items: 1,
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
        <h2>Why Choose PaintKraft Painting Service?</h2>
        <p>
          We at PaintKraft are trusted by thousands of families to complete
          their home painting projects and renovation services with our experts.
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
              <h5>Free On-Site Consultation</h5>
              <p>
                Request a complimentary on-site consultation with our experts
                for personalized, professional recommendations.
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
              <h5>Accurate & Specific Quotation</h5>
              <p>
                Receive precise quotations and advice about the finish that’ll
                brighten up your walls with our home painting services.
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
              <h5>Certified Painters</h5>
              <p>
                Our certified painting professionals are equipped to provide
                reliable guidance and tailored solutions for every painting
                requirement.
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
              <h5>Colour Consultation</h5>
              <p>
                Our certified painting professionals are equipped to provide
                reliable guidance and tailored solutions for every painting
                requirement.
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
              <h5>On-Time Job Completion</h5>
              <p>
                Our certified experts deliver reliable guidance and tailored
                painting solutions to meet all requirements.
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
              <h5>Post Painting Clean-Up</h5>
              <p>
                Our professional home painting services ensure complete site
                cleanup once the work is finished.
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
              <h5>After Sales Services</h5>
              <p>
                We provide top-notch home painting solutions along with
                efficient customer assistance. Call or write to us – our team is
                available 24x7/365 days
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
              <h5>Eco-Friendly Produts</h5>
              <p>
                We safeguard your health and environment by using
                low-VOC-certified products during the job.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default LpPaintWhy;
