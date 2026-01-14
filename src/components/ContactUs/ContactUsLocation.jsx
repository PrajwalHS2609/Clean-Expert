"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactUsLocation = () => {
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
        <form className="popup-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" name="Name" required />
          <input type="tel" placeholder="Phone Number" name="Phone" required />
          <input type="email" placeholder="Email Address" name="Email" required />

          {/* First Select */}
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            name="Service"
          >
            <option value="" name="Service">
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
            <option value="Pest Control Services" name="Pest Control Services">
              Pest Control Services
            </option>
            <option value="Office Cleaning" name="Office Cleaning">
              Office Cleaning
            </option>
          </select>

          {/* Dynamic Second Select */}
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
  );
};

export default ContactUsLocation;
