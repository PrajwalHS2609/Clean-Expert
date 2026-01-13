import Link from "next/link";
import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const FooterTop = () => {
  return (
    <div className="footerTop-container">
      <div className="footerTop-content">
        <div className="footerTop-item">
          <h4>Contact US</h4>
          <button>Book Now</button>
        </div>
        <div className="footerTop-item">
          <h4>
            {" "}
            <a href="tel:8792446647">+91 8792446647</a>
          </h4>
          <h4>
            {" "}
            <a href="tel:7090234446">+91 7090234446</a>
          </h4>
          <a href="">
            <button>
              <FaWhatsapp className="footerTop-socialIco" />
              Chat With Us
            </button>
          </a>
        </div>
      </div>
      <div className="footerTop-content">
        <h4>Quick Links</h4>

        <ul>
          <li>
            <Link href={"/"}>Our Reviews</Link>
          </li>
          <li>
            <Link href={"/"}>Services</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/"}>All Things Cleaning</Link>
          </li>
          <li>
            <Link href={"/"}>Our Work</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/"}>Careers</Link>
          </li>
        </ul>
      </div>
      <div className="footerTop-content">
        <ul>
          <li>
            <Link href={"/"}>Terms of Service</Link>
          </li>
          <li>
            <Link href={"/"}>Cancellation & Refund Policy</Link>
          </li>
          <li>
            <Link href={"/"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"/"}>Refer a Friend</Link>
          </li>
        </ul>
      </div>
      <div className="footerTop-content">
        <h4>Follow Us On:</h4>
        <ul>
          <li>
            <FaInstagram className="footerTop-socialIco" />
          </li>
          <li>
            <FaYoutube className="footerTop-socialIco" />
          </li>
          <li>
            <FaFacebookF className="footerTop-socialIco" />
          </li>
          <li>
            <FaLinkedin className="footerTop-socialIco" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
