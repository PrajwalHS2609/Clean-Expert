"use client"
import React, { useState } from "react";

const ContactUsLocation = () => {
  const [service, setService] = useState("");

  const cleaningOptions = [
    "Full-House",
    "Bathroom ",
    "Kitchen ",
    "Carpet",
    "Sofa ",
    "Mattress",
    "Window",
    "Balcony",
    "Chair",
  ];
  const paintingOptions = [
    "Interior Painting",
    "Textured Painting ",
    "Exterior Painting ",
    "Wood Polishing",
  ];
  const renovationOptions = [
    "Bathroom Remodelling/Renovation ",
    "Shower Enclosure ",
    "Tiles/Stone Replacement",
    "Replastering ",
    "Wall Crack Filling",
    "Window",
    "Balcony",
    "Chair",
  ];
  const pestControlOptions = [
    "General Pest Control",
    "Bed Bugs",
    "Mosquito ",
    "Combo: Best value for money",
    "Termites",
  ];
  return (
    <div className="contactUsLocation-container">
      <div className="contactUsLocation-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.083305379993!2d77.65841807454457!3d12.837893217796735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d60143d6cc1%3A0xf4d9aedb9b82d3b8!2sPaintkraft!5e0!3m2!1sen!2sin!4v1766326411539!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
      <div className="contactUsLocation-wrapper">
        <h2>BOOK NOW</h2>
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
          {service === "Painting Services" && (
            <select required>
              <option value="">Select Cleaning Type</option>
              {paintingOptions.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
          {service === "House Renovation0" && (
            <select required>
              <option value="">Select Cleaning Type</option>
              {renovationOptions.map((item, idx) => (
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
  );
};

export default ContactUsLocation;
