"use client";
import React, { useState } from "react";
import "./HomeTestimonial.css";
import Carousel from "react-bootstrap/Carousel";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import ramesh from "@/images/TestimonialImg/Harish Nair.png";
import anitha from "@/images/TestimonialImg/Sneha Rao.png";
import suresh from "@/images/TestimonialImg/Amit S.png";
import mahesh from "@/images/TestimonialImg/Rohan Mehta.png";
import shobha from "@/images/TestimonialImg/Neha R.png";
import lakshmi from "@/images/TestimonialImg/Pooja K.png";
import venkatesh from "@/images/TestimonialImg/Rohit V.png";
import priya from "@/images/TestimonialImg/Shruti M.png";


const HomeTestimonialMain = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homeTestimonialMain-container">
      <Carousel activeIndex={index} onSelect={handleSelect} className="homeTestimonialMain-carouselContainer">
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={ramesh} alt="ramesh" />
                <h5>Ramesh K</h5>
                <h6>Whitefield</h6>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteLeft className="homeTestimonial-icon1" />
                <p>
                  Prime Clean Services did an excellent deep cleaning of our home. The team was punctual, professional, and very detail-oriented. Our house looked fresh and spotless!.

                </p>
                <FaQuoteRight className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={anitha} alt="anitha" />
                <h5>Anitha</h5>
                <h6>Jayanagar</h6>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteLeft className="homeTestimonial-icon1" />

                <p>
                  We hired Prime Clean Services for interior painting, and the results were outstanding. Clean finish, quality paint, and on-time delivery. Highly recommended.
                </p>
                <FaQuoteRight className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={suresh} alt="suresh" />
                <h5>Suresh</h5>
                <h6>Banashankari</h6>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteLeft className="homeTestimonial-icon1" />

                <p>
                  The pest control service was very effective and safe for our family. The team explained everything clearly and the problem was resolved completely.

                </p>
                <FaQuoteRight className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={priya} alt="priya" />
                <h5>Priya </h5>
                <h6>Rajajinagar</h6>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteLeft className="homeTestimonial-icon1" />

                <p>
                  The pest control service was very effective and safe for our family. The team explained everything clearly and the problem was resolved completely.

                </p>
                <FaQuoteRight className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={venkatesh} alt="venkatesh" />
                <h5>Venkatesh R.</h5>
                <h6>Basavanagudi</h6>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteLeft className="homeTestimonial-icon1" />

                <p>
                  I’m extremely happy with their house cleaning service. They used eco-friendly products and paid attention to every corner. Great value for money!
                </p>
                <FaQuoteRight className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={lakshmi} alt="lakshmi" />
                <h5>Lakshmi P.</h5>
                <h6>Vijayanagar</h6>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteLeft className="homeTestimonial-icon1" />
                <p>
                  The painting team was well-trained and finished the job on time without any mess. The walls look brand new. Excellent service quality!.
                </p>
                <FaQuoteRight className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={mahesh} alt="mahesh" />
                <h5>Mahesh</h5>
                <h6>Nagarbhavi</h6>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteLeft className="homeTestimonial-icon1" />

                <p>
                  Very professional pest control service. The technicians were polite, punctual, and the treatment was effective. No issues since then.
                </p>
                <FaQuoteRight className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="homeTestimonialMain-carouselItem">
          <div className="homeTestimonial-content">
            <div className="homeTestimonial-itemWrapper">
              <div className="homeTestimonial-item">
                <Image src={shobha} alt="shobha" />
                <h5>Shobha </h5>
                <h6> HSR Layout</h6>
              </div>
              <div className="homeTestimonial-item">
                <FaQuoteLeft className="homeTestimonial-icon1" />

                <p>
                  Prime Clean Services is our go-to for cleaning, painting, and maintenance work. Reliable, skilled, and customer-focused. Truly trustworthy service providers.</p>
                <FaQuoteRight className="homeTestimonial-icon2" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeTestimonialMain;
