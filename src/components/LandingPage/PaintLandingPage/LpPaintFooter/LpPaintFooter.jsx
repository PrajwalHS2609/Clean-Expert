import React from "react";
import "./LpPaintFooter.css";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const LpPaintFooter = () => {
  return (
    <footer className="lpPaintFooter-container">
      <div className="lpPaintFooter-wrapper">
        {/* Services */}
        <div className="lpPaintFooter-column">
          <h3>Services</h3>
          <ul className="lpPaintFooter-list">
            <li>
              <Link href={"#services"}>Home Painting</Link>
            </li>
            <li>
              <Link href={"#services"}>Apartment Painting</Link>
            </li>
            <li>
              <Link href={"#services"}>Spray Painting</Link>
            </li>
            <li>
              <Link href={"#services"}>1 Day Express Painting</Link>
            </li>
            <li>
              <Link href={"#services"}>Texture & Designer Walls</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lpPaintFooter-column">
          <h3>Contact Us</h3>

          <div className="lpPaintFooter-item">
            <strong>Phone</strong>
            <p>
              <a href="tel:8792446647">8792446647</a>
            </p>
          </div>

          <div className="lpPaintFooter-item">
            <strong>Email</strong>
            <p>
              <a href="mailto:info@paintkraft.in">info@paintkraft.in</a>
            </p>
          </div>

          <div className="lpPaintFooter-item">
            <strong>Location</strong>
            <p>
              3RD FLOOR, 1669, 27th Main Rd,
              <br />
              PWD Quarters, Sector 2,
              <br />
              HSR Layout, Bengaluru,
              <br />
              Karnataka 560102
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="lpPaintFooter-column">
          <h3>Social Media</h3>

          <ul className="lpPaintFooter-social">
            <li>
              <a href="#" target="_blank">
                <FaFacebook className="lpPaintFooter-socialIco" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaInstagram className="lpPaintFooter-socialIco" />
              </a>
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="lpPaintFooter-column lpPaintFooter-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.083305379993!2d77.65841807454457!3d12.837893217796735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d60143d6cc1%3A0xf4d9aedb9b82d3b8!2sPaintkraft!5e0!3m2!1sen!2sin!4v1766326411539!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* <p>© Copyright 2025 primecleanCo.in</p> */}
    </footer>
  );
};

export default LpPaintFooter;
