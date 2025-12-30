import React, { useState } from "react";
import ramesh from "@/images/TestimonialImg/Harish Nair.png";
import anitha from "@/images/TestimonialImg/Sneha Rao.png";
import suresh from "@/images/TestimonialImg/Amit S.png";
import mahesh from "@/images/TestimonialImg/Rohan Mehta.png";
import shobha from "@/images/TestimonialImg/Neha R.png";
import lakshmi from "@/images/TestimonialImg/Pooja K.png";
import venkatesh from "@/images/TestimonialImg/Rohit V.png";
import priya from "@/images/TestimonialImg/Shruti M.png";
import rating from "./../../../images/rating.png";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const CleaningServiceReview = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div className="serviceReviews-container">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="serviceReviews-carouselContainer"
        >
          <Carousel.Item className="serviceReviews-carouselItem">
            <div className="serviceReviews-content">
              <div className="serviceReviews-itemWrapper">
                <div className="serviceReviews-item">
                  <Image src={ramesh} alt="ramesh" />
                  <h5>Ramesh K</h5>
                  <h6>Whitefield</h6>
                </div>
                <div className="serviceReviews-rating">
                  <Image src={rating} alt="rating" />
                </div>
                <div className="serviceReviews-item">
                  <p>
                    Prime Clean Services did an excellent deep cleaning of our
                    home. The team was punctual, professional, and very
                    detail-oriented. Our house looked fresh and spotless!.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="serviceReviews-carouselItem">
            <div className="serviceReviews-content">
              <div className="serviceReviews-itemWrapper">
                <div className="serviceReviews-item">
                  <Image src={ramesh} alt="ramesh" />
                  <h5>Ramesh K</h5>
                  <h6>Whitefield</h6>
                </div>
                <div className="serviceReviews-rating">
                  <Image src={rating} alt="rating" />
                </div>
                <div className="serviceReviews-item">
                  <p>
                    Prime Clean Services did an excellent deep cleaning of our
                    home. The team was punctual, professional, and very
                    detail-oriented. Our house looked fresh and spotless!.
                    
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="serviceReviews-carouselItem">
            <div className="serviceReviews-content">
              <div className="serviceReviews-itemWrapper">
                <div className="serviceReviews-item">
                  <Image src={ramesh} alt="ramesh" />
                  <h5>Ramesh K</h5>
                  <h6>Whitefield</h6>
                </div>
                <div className="serviceReviews-rating">
                  <Image src={rating} alt="rating" />
                </div>
                <div className="serviceReviews-item">
                  <p>
                    Prime Clean Services did an excellent deep cleaning of our
                    home. The team was punctual, professional, and very
                    detail-oriented. Our house looked fresh and spotless!.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="serviceReviews-carouselItem">
            <div className="serviceReviews-content">
              <div className="serviceReviews-itemWrapper">
                <div className="serviceReviews-item">
                  <Image src={ramesh} alt="ramesh" />
                  <h5>Ramesh K</h5>
                  <h6>Whitefield</h6>
                </div>
                <div className="serviceReviews-rating">
                  <Image src={rating} alt="rating" />
                </div>
                <div className="serviceReviews-item">
                  <p>
                    Prime Clean Services did an excellent deep cleaning of our
                    home. The team was punctual, professional, and very
                    detail-oriented. Our house looked fresh and spotless!.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="serviceReviews-carouselItem">
            <div className="serviceReviews-content">
              <div className="serviceReviews-itemWrapper">
                <div className="serviceReviews-item">
                  <Image src={ramesh} alt="ramesh" />
                  <h5>Ramesh K</h5>
                  <h6>Whitefield</h6>
                </div>
                <div className="serviceReviews-rating">
                  <Image src={rating} alt="rating" />
                </div>
                <div className="serviceReviews-item">
                  <p>
                    Prime Clean Services did an excellent deep cleaning of our
                    home. The team was punctual, professional, and very
                    detail-oriented. Our house looked fresh and spotless!.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>{" "}
    </div>
  );
};

export default CleaningServiceReview;
