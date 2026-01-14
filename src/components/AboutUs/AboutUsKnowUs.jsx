import React from "react";
import "./AboutUs.css";
import largeImg from "./../../images/AboutUs/aboutImg1.jpg"
import smallImg1 from "./../../images/AboutUs/aboutImg2.jpg"
import smallImg2 from "./../../images/AboutUs/aboutImg3.jpg"
import Image from "next/image";

const AboutUsKnowUs = () => {
  return (
    <section className="aboutUsKnowUs-container">
      {/* LEFT SIDE */}
      <div className="aboutUs-images">
        <div className="img-small">
          <Image
            src={largeImg}
            alt="Worker painting wall"
          />
        </div>

        <div className="aboutUs-imgLargeContainer">
          <div className="img-large">
            <Image
              src={smallImg1}
              alt="Team painting wall"
            />
          </div>
          <div className="img-large">
            <Image
              src={smallImg2}
              alt="Team painting wall"
            />
          </div>
        </div>

        {/* Progress Card */}
        {/* <div className="progress-card">
          <h4>Company Progress</h4>

          <div className="progress-item">
            <span>Satisfaction</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "90%" }} />
            </div>
            <strong>90%</strong>
          </div>

          <div className="progress-item">
            <span>Revenue</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "80%" }} />
            </div>
            <strong>80%</strong>
          </div>
        </div> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="aboutUs-content">
        {/* <span className="tag">GET TO KNOW US</span> */}

        <h2>
          Transform Your Space With <br />
          Our Skilled Full Members
        </h2>

        <p>
          Prime Clean is a trusted professional service provider dedicated to
          enhancing homes and commercial spaces with quality-driven solutions.
          From cleaning and maintenance to renovation and specialized services,
          we focus on skilled workmanship, reliable processes, and customer
          satisfaction. Our team delivers efficient, transparent, and
          hassle-free services designed to keep your spaces clean, functional,
          and beautifully maintained.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <h4>Our Mission</h4>
            <p>
              Is to deliver reliable, high-quality cleaning and maintenance
              services with professionalism, transparency, and customer
              satisfaction, creating cleaner, safer, and better living spaces.
            </p>
          </div>

          <div className="info-card">
            <h4>Our Vision</h4>
            <p>
              Is to become a trusted leader in professional cleaning and
              maintenance services, setting standards for quality, reliability,
              and long-term customer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsKnowUs;
