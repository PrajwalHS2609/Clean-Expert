"use client";
import React, { useState } from "react";
import "./PopupForm.css";
import { HiMiniXMark } from "react-icons/hi2";
import Swal from "sweetalert2";

const PopupForm = () => {
  const [service, setService] = useState("");

  const cleaningOptions = [
    "Full House Cleaning",
    "Bathroom ",
    "Kitchen ",
    "Chimney",
    "Carpet",
    "Sofa ",
    "Mattress",
    "Window",
    "Balcony",
    "Chair",
  ];
  const paintingOptions = [
    "Home Painting",
    "Apartment Painting ",
    "Spray Painting ",
    "1 Day Express Polishing",
    "Texture & Designer Walls",
    "Waterproofing",
  ];
  const renovationOptions = [
    "Bathroom Remodelling ",
    "Shower Enclosure ",
    "Tiles/Stone Replacement",
    "Replastering ",
    "Wall Crack Filling",
    "Home Inspection",
    "Kitchen Renovation",
    "False Ceiling",
    "Grouting",
  ];
  const pestControlOptions = [
    "General Pest Control",
    "Bed Bugs Control",
    "Mosquito Control ",
    "Termite Control",
  ];
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

          <form className="popup-form" onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Full Name" required />
            <input
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              required
            />

            {/* First Select */}
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              name="Service"
            >
              <option value="" name>
                Select Service{" "}
              </option>
              <option value="Cleaning Services" name="Cleaning Services">
                Cleaning Services
              </option>
              <option value="Marble Polishing" name="Marble Polishing">
                Marble Polishing
              </option>
              <option value="Painting Services" name="Painting Services">
                Painting Services
              </option>
              <option value="Civil Works" name="Civil Works">
                Civil Works
              </option>
              <option
                value="Pest Control Services"
                name="Pest Control Services"
              >
                Pest Control Services
              </option>
              <option value="Office Cleaning" name="Office Cleaning">
                Office Cleaning
              </option>
            </select>

            {/* Dynamic Second Select */}
            {service === "Cleaning Services" && (
              <select required name="Sub Service">
                <option value="">Select Cleaning Type</option>
                {cleaningOptions.map((item, idx) => (
                  <option key={idx} value={item} name={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}
            {service === "Painting Services" && (
              <select required name="Sub Service">
                <option value="">Select Cleaning Type</option>
                {paintingOptions.map((item, idx) => (
                  <option key={idx} value={item} name={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}
            {service === "Civil Works" && (
              <select required name="Sub Service">
                <option value="">Select Cleaning Type</option>
                {renovationOptions.map((item, idx) => (
                  <option key={idx} value={item} name={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}
            {service === "Pest Control Services" && (
              <select required name="Sub Service">
                <option value="">Select Pest Control Type</option>
                {pestControlOptions.map((item, idx) => (
                  <option key={idx} value={item} name={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}

            <textarea
              placeholder="Your Message"
              rows="4"
              name="Message"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
