"use client";
import React from "react";
import "./LpPaintHeader.css";
import bannerImg from "./../../../../images/LpBannerImg.png";
import mobileBannerImg from "./../../../../images/lpMobileBannerImg.jpg";

import Image from "next/image";
import {
  MdCurrencyRupee,
  MdOutlineCleaningServices,
  MdOutlineShield,
} from "react-icons/md";
import { LuBadgeCheck, LuPaintbrush } from "react-icons/lu";
import Link from "next/link";
import Swal from "sweetalert2";
const LpPaintHeader = () => {
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
      icon: <LuBadgeCheck />,
      text: "Quality of Materials Used",
    },
    {
      id: 2,
      icon: <MdOutlineShield />,
      text: "Surface Preparation & Protection",
    },
    {
      id: 3,
      icon: <LuPaintbrush />,
      text: "Skilled & Professional Painters",
    },
    { id: 4, icon: <MdCurrencyRupee />, text: "Clear Pricing & Timeline" },
    {
      id: 5,
      icon: <MdOutlineCleaningServices />,
      text: "Clean Finish & Post-Service Cleanup",
    },
  ];
  return (
    <div className="lpPaintHeader-container">
      <div className="lpPaintHeader-content">
        <Image
          src={bannerImg}
          alt="Paintkraft Banner"
          className="lpPaintHeader-desktopImg"
          priority
        />

        <Image
          src={mobileBannerImg}
          alt="Paintkraft Mobile Banner"
          className="lpPaintHeader-mobileImg"
          priority
        />

        <div className="lpPaintHeader-cover">
          <div className="lpPaintHeader-heading">
            <h2>No Body Does Spray Painting Like Us! </h2>
            <p>
              Seamless finish, Flawless shine. The PaintKraft spray painting
              difference.
            </p>
            <div className="lpPaintHeader-btn">
              <Link href="#services">
                <button>Explore Now</button>
              </Link>
              <a href="tel:8792446647">
                <button>Contact Us</button>
              </a>
            </div>
          </div>
          <div className="lpPaintHeader-formCard">
            <div className="lpPaintHeader-formHeader">
              <h3>Book Expert Advice in Minutes</h3>
            </div>
            <form className="lpPaintHeader-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name*"
                required
              />

              <input
                type="tel"
                name="Phone No"
                placeholder="Enter Your Phone No*"
                required
              />

              <input
                type="text"
                name="Pincode"
                placeholder="Pincode*"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Your Email Address*"
                required
              />

              <select name="Service">
                <option>Select Your Service</option>
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

              {/* <div className="lpPaintHeader-checkbox">
                <input type="checkbox" id="whatsapp" defaultChecked />
                <label htmlFor="whatsapp">Get updates on WhatsApp</label>
              </div>

              <div className="lpPaintHeader-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I Agree To All <span>Terms And Conditions*</span>
                </label>
              </div> */}

              <button type="submit" className="lpPaintHeader-submit">
                Submit
              </button>

              <div className="lpPaintHeader-checkbox">
                <label htmlFor="terms">
                  Your information is safe with us. We respect your privacy and
                  will only use your details to respond to your inquiry. No
                  spam, ever.{" "}
                </label>
              </div>
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
