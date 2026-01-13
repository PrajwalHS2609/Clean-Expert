import React from "react";
import "./AboutUs.css";
const AboutUsKnowUs = () => {
  return (
    <section className="aboutUsKnowUs-container">
      {/* LEFT SIDE */}
      <div className="aboutUs-images">
        <div className="img-small">
          <img
            src="https://templates.hibootstrap.com/pentu/assets/images/get-to-know2.jpg"
            alt="Worker painting wall"
          />
        </div>

        <div className="aboutUs-imgLargeContainer">
          <div className="img-large">
            <img
              src="https://templates.hibootstrap.com/pentu/assets/images/get-to-know1.jpg"
              alt="Team painting wall"
            />
          </div>
          <div className="img-large">
            <img
              src="https://templates.hibootstrap.com/pentu/assets/images/get-to-know1.jpg"
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
          Perfect for business cards invitation packaging and promotional
          materials digital foiling enhances visual appeal and leaves a lasting
          impression with its elegant finish.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <h4>Our Mission</h4>
            <p>
              Our mission is to deliver painting solutions that enhance the
              character of every space we touch.
            </p>
          </div>

          <div className="info-card">
            <h4>Our Vision</h4>
            <p>
              We aim to inspire and transform through innovative, sustainable
              practices and dedication to every brushstroke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsKnowUs;
