"use client";
import React, { useState } from "react";
import "./LpPaintTestimonial.css";
import Carousel from "react-bootstrap/Carousel";
import testimonial from "@/images/testimonial.png";
import Image from "next/image";
import rating from "@/images/rating.png";

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
                <Image src={testimonial} alt="" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo vitae modi illum cumque sint delectus sit dolorem
                    expedita! Commodi ullam, ipsam debitis corporis quae
                    consequuntur tempore id repellat iste alias!
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
                <Image src={testimonial} alt="" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo vitae modi illum cumque sint delectus sit dolorem
                    expedita! Commodi ullam, ipsam debitis corporis quae
                    consequuntur tempore id repellat iste alias!
                  </p>
                  <h3>- Mr Ramesh</h3>
                  <h4>Bangalore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="lpPaintTestimonial-carouselItem">
            <div className="lpPaintTestimonial-wrapper">
              <div className="lpPaintTestimonial-content">
                <Image src={testimonial} alt="" />
                <div className="lpPaintTestimonial-text">
                  <Image src={rating} alt="rating" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo vitae modi illum cumque sint delectus sit dolorem
                    expedita! Commodi ullam, ipsam debitis corporis quae
                    consequuntur tempore id repellat iste alias!
                  </p>
                  <h3>- Sneha Rao</h3>
                  <h4>Bangalore</h4>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default LpPaintTestimonial;
