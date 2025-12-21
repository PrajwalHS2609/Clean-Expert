import React from "react";
import "./LpPaintHeader.css";
import bannerImg from "./../../../../images/LpBannerImg.png";
import Image from "next/image";
import { IoChatbubblesOutline } from "react-icons/io5";
const LpPaintHeader = () => {
  const content = [
    { id: 1, icon: <IoChatbubblesOutline />, text: "On Site Consultation" },
    { id: 2, icon: <IoChatbubblesOutline />, text: "On Site Consultation" },
    { id: 3, icon: <IoChatbubblesOutline />, text: "On Site Consultation" },
    { id: 4, icon: <IoChatbubblesOutline />, text: "On Site Consultation" },
    { id: 5, icon: <IoChatbubblesOutline />, text: "On Site Consultation" },
  ];
  return (
    <div className="lpPaintHeader-container">
      <div className="lpPaintHeader-content">
        <Image src={bannerImg} alt="bannerImg" />
        <div className="lpPaintHeader-cover">
          <div className="lpPaintHeader-heading">
            <h2>No Body Does Spray Painting Like Us! </h2>
            <p>
              Seamless finish, Flawless shine. The PaintKraft spray painting
              difference.
            </p>
            <button>Explore Now</button>
          </div>
          <div className="lpPaintHeader-formCard">
            <div className="lpPaintHeader-formHeader">
              <h3>Let Our Experts Help You</h3>
            </div>

            <form className="lpPaintHeader-form">
              <input type="text" placeholder="Enter Your Name*" required />

              <input type="tel" placeholder="Enter Your Phone No*" required />

              <input type="text" placeholder="Pincode*" required />

              <input type="email" placeholder="Your Email Address*" required />

              <select>
                <option value="">Select Your Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="kannada">Kannada</option>
                <option value="tamil">Tamil</option>
              </select>

              <div className="lpPaintHeader-checkbox">
                <input type="checkbox" id="whatsapp" defaultChecked />
                <label htmlFor="whatsapp">Get updates on WhatsApp</label>
              </div>

              <div className="lpPaintHeader-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I Agree To All <span>Terms And Conditions*</span>
                </label>
              </div>

              <button type="submit" className="lpPaintHeader-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="lpPaintHeader-wrapper">
        <div className="lpPaintHeader-itemContent">
          {content.map((x) => (
            <div className="lpPaintHeader-item">
              <span className="lpPaintHeader-icon">{x.icon}</span>
              <p id="services">{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LpPaintHeader;
