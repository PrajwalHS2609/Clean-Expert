"use client";
import React, { useState } from "react";
import "./LpPaintTestimonial.css";
import Carousel from "react-bootstrap/Carousel";
import testimonial from "@/images/testimonial.png";
import Image from "next/image";
import rating from "@/images/rating.png";
import img1 from "@/images/TestimonialImg/img1.png";
import img2 from "@/images/TestimonialImg/img2.png";
import img3 from "@/images/TestimonialImg/img3.png";

const LpPaintTestimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="lpPaintTestimonial-container">
      <div className="lpPaintTestimonial-heading">
        <h2>Our Satisfied Customers</h2>
        <p>Hear Their Stories and Experiences</p>
      </div>
      <div className="lpPaintTestimonial-carouselWrapper">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="lpPaintTestimonial-carouselContainer"
        >
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={img2} alt="img2" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    Paintkraft completely transformed our 3BHK apartment in
                    Indiranagar. Their team was punctual, professional, and
                    super clean. We loved the color recommendations, and the
                    final finish was exactly what we envisioned. The no-mess
                    promise was real—we moved in the very next day! Highly
                    recommended.
                  </p>
                  <h3>- Priya</h3>
                  <h4>Bangalore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={img1} alt="img1" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    We hired Paintkraft for our home renovation in Whitefield,
                    and they exceeded expectations. Great attention to detail,
                    minimal noise, and thorough cleanup after painting. The
                    supervisor kept us updated regularly. Will definitely use
                    them again for future projects.
                  </p>
                  <h3>- Ramesh</h3>
                  <h4>Bangalore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={img3} alt="img3" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    From color consultation to execution, Paintkraft made the
                    whole process smooth and stress-free. Their express painting
                    service saved us days of work. The painters were courteous
                    and well-supervised. Best painting experience we've had so
                    far in Bangalore.
                  </p>
                  <h3>- Sneha Rao</h3>
                  <h4>Bangalore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <span id="contact-us"></span>
      </div>
    </div>
  );
};

export default LpPaintTestimonial;
