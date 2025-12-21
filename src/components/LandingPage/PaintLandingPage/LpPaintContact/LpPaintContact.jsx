import React from "react";
import "./LpPaintContact.css";
import { GiFist } from "react-icons/gi";
import { AiFillSound } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { MdFormatPaint } from "react-icons/md";
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
                <h4>Complete Control at Your Fingertips</h4>
                <p>
                  Experience hassle-free, zero-contact painting services with
                  the Express Painting App—simple, safe, and convenient.
                </p>
              </div>
            </li>
            <li>
              <div className="lpPaintContact-icon">
                <MdFormatPaint />
              </div>
              <div className="">
                <h4>Professionally Supervised Painting</h4>
                <p>
                  Our trained and certified painters work under expert
                  supervision to ensure faster, safer, and flawless results.
                </p>
              </div>
            </li>
            <li>
              <div className="lpPaintContact-icon">
                <IoMdTimer />
              </div>
              <div className="">
                <h4>Time-Saving Technology</h4>
                <p>
                  Advanced power painting tools accelerate the process, ensuring
                  precise finishes and guaranteed on-time completion.
                </p>
              </div>
            </li>
            <li>
              <div className="lpPaintContact-icon">
                <AiFillSound />
              </div>
              <div className="">
                <h4>Low-Noise, Clean & Careful Execution</h4>
                <p>
                  Mechanized equipment and skilled professionals deliver a
                  smooth, low-noise painting experience. Added clean-up services
                  keep your space protected and spotless, safeguarding your
                  valuables from paint spills.
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
      <span id="faq"></span>
    </div>
  );
};

export default LpPaintContact;
