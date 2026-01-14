"use client";
import React, { useState } from "react";
import "./HomeHeroSite.css";
import Image from "next/image";
import bannerImg from "@/images/Banner Image.png";
import { LuBadgeCheck, LuPaintbrush } from "react-icons/lu";
import { RxTimer } from "react-icons/rx";
import { MdCurrencyRupee, MdPhone } from "react-icons/md";
import { ImLeaf } from "react-icons/im";
import { GrPlan } from "react-icons/gr";
import { FaEye } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";

const HomeHeroSite = () => {
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
  const content = [
    {
      id: 1,
      icon: <FaUsersCog />,
      text: "Trained Cleaning Experts",
    },
    {
      id: 2,
      icon: <RxTimer />,
      text: "On-Time Service Promise",
    },
    {
      id: 3,
      icon: <LuPaintbrush />,
      text: "Deep Hygienic Cleaning",
    },
    { id: 4, icon: <BsTools />, text: "Professional Tools" },
    {
      id: 5,
      icon: <FaEye />,
      text: "Expert Supervision",
    },
    {
      id: 6,
      icon: <ImLeaf />,
      text: "Eco-Safe Cleaning Products",
    },
    {
      id: 7,
      icon: <GrPlan />,
      text: "Custom Cleaning Plans",
    },
    {
      id: 8,
      icon: <LuPaintbrush />,
      text: "Safe & Secure Service",
    },
    { id: 9, icon: <MdCurrencyRupee />, text: "Clear & Transparent Pricing" },
    {
      id: 10,
      icon: <LuBadgeCheck />,
      text: "Guaranteed Satisfaction",
    },
  ];
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="hero2-container">
      {/* HERO */}
      <div className="hero2-banner">
        <Image src={bannerImg} alt="banner" fill priority />

        <div className="hero2-content">
          {/* LEFT */}
          <div className="hero2-text">
            <span className="hero2-badge">Trusted by 5,000+ Homeowners</span>

            <h1>Professional Cleaning You Can Trust</h1>

            <p>
              High-quality cleaning services, expertly managed and delivered on
              time, for homes that demand superior standards.
            </p>
            <div className="hero2-buttonContainer">
              <button className="button1" onClick={handlePop}>
                Browse Services
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
              <a href="">
                <button>
                  Contact Us <MdPhone />
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="hero2-formGlass">
            <h3>Get Free Expert Advice</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name*"
                name="Name"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                name="Phone"
                required
              />
              <input type="email" placeholder="Email*" name="Email" required />

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

              <button type="submit">Request Callback</button>
              <span>No spam • 100% privacy</span>
            </form>
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="hero2-trust">
        {content.map((x) => (
          <div className="hero2-trustItem" key={x.id}>
            <span className="hero2-trustItemIcon">{x.icon}</span>
            <p id="services">{x.text}</p>
          </div>
        ))}
        {/* <div className="trust-card">
          <LuSearchCheck />
          <b>Site Supervision</b>
        </div>
        <div className="trust-card">
          <GiPaintRoller />
          <b>Expert Painters</b>
        </div>
        <div className="trust-card">
          <RxTimer />
          <b>On-Time Delivery</b>
        </div> */}
      </div>
    </div>
  );
};

export default HomeHeroSite;
