import React from "react";
import "./LpPaintContact.css";
import { GiFist } from "react-icons/gi";
const LpPaintContact = () => {
  return (
    <div className="lpPaintContact-container">
      <div className="lpPaintContact-wrapper">
        <div className="lpPaintContact-content">
          <ul>
            <li>
              <div className="lpPaintContact-icon">
                <GiFist />
              </div>
              <div className="lpPaintContact-list">
                <h4>Power in Your Hands</h4>
                <p>
                  Enjoy zero contact service with Express Painting App at your
                  fingertips.
                </p>
              </div>
            </li>
            <li>
              <div className="lpPaintContact-icon">
                <GiFist />
              </div>
              <div className="">
                <h4>Supervised Painting</h4>
                <p>
                  Trained and certified painters with expert supervision for a
                  safe and faster painting service.
                </p>
              </div>
            </li>
            <li>
              <div className="lpPaintContact-icon">
                <GiFist />
              </div>
              <div className="">
                <h4>Time-Saving Tools</h4>
                <p>
                  Power painting tools that saves time and speeds up On-Time
                  delivery.
                </p>
              </div>
            </li>
            <li>
              <div className="lpPaintContact-icon">
                <GiFist />
              </div>
              <div className="">
                <h4>Low-Noise and Cleaner Painting</h4>
                <p>
                  Our mechanised tools and expert team ensures a smooth and
                  pleasant painting and renovation experience with additional
                  clean-up services help protect your valuables from paint
                  spills.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lpPaintContact-content">
          <form className="lpPaintContact-form">
            <h3>Let Our Experts Help You</h3>

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

            <div className="lpPaintContact-checkbox">
              <input type="checkbox" id="whatsapp" />
              <label htmlFor="whatsapp">Get updates on WhatsApp</label>
            </div>

            <div className="lpPaintContact-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I Agree To All <span>Terms And Conditions*</span>
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default LpPaintContact;
