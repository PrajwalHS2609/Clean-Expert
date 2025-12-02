"use client";
import React, { useState } from "react";
import "./PopupForm.css";
import { HiMiniXMark } from "react-icons/hi2";

const PopupForm = () => {
  const [service, setService] = useState("");

  const cleaningOptions = [
    "House Cleaning",
    "Bathroom Cleaning",
    "Kitchen Cleaning",
    "Sofa Cleaning",
    "Deep Cleaning",
  ];

  const pestControlOptions = [
    "Bedbug Control",
    "Mosquito Control",
    "Termite Control",
    "Cockroach Control",
    "Rodent Control",
  ];

  const handleExit = () => {
    document.querySelector(".popup-container").style.display = "none";
  };

  return (
    <div className="popup-container">
      <div className="popup-wrapper">
        
        {/* Left Side Image */}
        <div className="popup-content">
          <img
            src="https://images.pexels.com/photos/4440521/pexels-photo-4440521.jpeg"
            alt="popup"
          />
        </div>

        {/* Right Side Form */}
        <div className="popup-content form-side">
          <div className="popup-exit">
            <HiMiniXMark className="popup-exitIcon" onClick={handleExit} />
          </div>

          <h2>Book Now</h2>

          <form className="popup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />

            {/* First Select */}
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select Service </option>
              <option value="Cleaning Services">Cleaning Services</option>
              <option value="Marble Polishing">Marble Polishing</option>
              <option value="Painting Services">Painting Services</option>
              <option value="Waterproofing">Waterproofing</option>
              <option value="House Renovation">House Renovation</option>
              <option value="Shower Enclosure">Shower Enclosure</option>
              <option value="Grouting">Grouting</option>
              <option value="Pest Control Services">Pest Control Services</option>
              <option value="Office Cleaning">Office Cleaning</option>
            </select>

            {/* Dynamic Second Select */}
            {service === "Cleaning Services" && (
              <select required>
                <option value="">Select Cleaning Type</option>
                {cleaningOptions.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}

            {service === "Pest Control Services" && (
              <select required>
                <option value="">Select Pest Control Type</option>
                {pestControlOptions.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}

            <textarea placeholder="Your Message" rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default PopupForm;
