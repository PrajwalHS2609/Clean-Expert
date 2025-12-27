import React from "react";
import "./HomeHeroSite.css";
import Image from "next/image";
import bannerImg from "@/images/LpBannerImg.png";
import { LuSearchCheck } from "react-icons/lu";
import { GiPaintRoller } from "react-icons/gi";
import { RxTimer } from "react-icons/rx";
import { MdPhone } from "react-icons/md";

const HomeHeroSite = () => {
  return (
    <div className="hero2-container">
      {/* HERO */}
      <div className="hero2-banner">
        <Image src={bannerImg} alt="banner" fill priority />

        <div className="hero2-content">
          {/* LEFT */}
          <div className="hero2-text">
            <span className="hero2-badge">Trusted by 5,000+ Homeowners</span>

            <h1>Beautiful Homes Start With Perfect Painting</h1>

            <p>
              Premium painting services with expert supervision and guaranteed
              on-time delivery — designed for homes that deserve excellence.
            </p>
            <div className="hero2-buttonContainer">
              <a href="">
                <button className="button1" >
                  Browse Services
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </a>
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

            <form>
              <input type="text" placeholder="Your Name*" required />
              <input type="tel" placeholder="Phone Number*" required />
              <input type="text" placeholder="Pincode*" required />

              <select required>
                <option>Select Service</option>
                <option>Home Painting</option>
                <option>Apartment Painting</option>
                <option>Waterproofing</option>
              </select>

              <button type="submit">Request Callback</button>
              <span>No spam • 100% privacy</span>
            </form>
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="hero2-trust">
        <div className="trust-card">
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
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSite;
