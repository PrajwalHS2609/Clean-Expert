"use client";
import React, { useState } from "react";
import "./../PopupForm/PopupForm.css";
import { HiMiniXMark } from "react-icons/hi2";
import Swal from "sweetalert2";
import Image from "next/image";
import popUpImg from "@/images/popFormImg.jpeg";

const PopupFormCareer = ({ onClose }) => {
  const [service, setService] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "2e63432e-e411-4617-8563-fa5f8bb00932");

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire("Success!", "Application submitted", "success");
      form.reset();
      onClose(); // ✅ close popup
    } else {
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  return (
    <div className="careerPopup">
      <div className="popup-wrapper">
        {/* Image */}
        <div className="popup-content">
          <Image src={popUpImg} alt="popup" />
        </div>

        {/* Form */}
        <div className="popup-content form-side">
          <div className="popup-exit">
            <HiMiniXMark className="popup-exitIcon" onClick={onClose} />
          </div>

          <h2>Apply Now</h2>

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

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              name="Position"
            >
              <option value="">Select Position</option>
              <option value="Customer Support Executive">
                Customer Support Executive
              </option>
            </select>

            <textarea name="Message" placeholder="Your Message" rows="4" />

            <button type="submit">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupFormCareer;
