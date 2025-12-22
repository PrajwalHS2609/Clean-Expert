"use client"
import React from "react";
import "./LpPaintContact.css";
import { GiFist } from "react-icons/gi";
import { AiFillSound } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { MdFormatPaint } from "react-icons/md";
import Swal from "sweetalert2";
const LpPaintContact = () => {
    const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "2e63432e-e411-4617-8563-fa5f8bb00932");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };
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
          <form className="lpPaintContact-form" onSubmit={handleSubmit}>
            <h3>Let Our Experts Help You</h3>

            <input type="text" name="Name" placeholder="Enter Your Name*" required />
            <input type="tel" name="Phone" placeholder="Enter Your Phone No*" required />
            <input type="text" name="Pincode" placeholder="Pincode*" required />
            <input type="email" name="Email" placeholder="Your Email Address*" required />

            <select name="Service">
              <option value="">Select Your Service</option>
              <option value="Home Painting">Home Painting</option>
              <option value="Apartment Painting">Apartment Painting</option>
              <option value="Spray Painting">Spray Painting</option>
              <option value="1 Day Express Painting">
                1 Day Express Painting
              </option>
              <option value="Texture & Designer Wall<">
                Texture & Designer Walls
              </option>
              <option value="Waterproofing">Waterproofing</option>
            </select>

            <button type="submit">Submit</button>

            <div className="lpPaintContact-checkbox">
              <label htmlFor="terms">
                Your information is safe with us. We respect your privacy and
                will only use your details to respond to your inquiry. No spam,
                ever.{" "}
              </label>
            </div>
          </form>{" "}
        </div>
      </div>
      <span id="faq"></span>
    </div>
  );
};

export default LpPaintContact;
