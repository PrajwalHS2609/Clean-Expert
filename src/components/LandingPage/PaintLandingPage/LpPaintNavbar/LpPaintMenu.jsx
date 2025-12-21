"use client";
import React from "react";
import "./LpPaintNavbar.css";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

const LpPaintMenu = () => {
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  return (
    <div className="lpPetsMenu-container">
      <div className="lpPetsMenu-content">
        <ul>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#why">Why Us</Link>
          </li>
          <li>
            <Link href="#testimonial">Testimonials</Link>
          </li>
          <li>
            <Link href="#contact-us">Contact Us</Link>
          </li>
        </ul>
        {/* <div className="navBtn-container">
          <a href="https://api.whatsapp.com/send?phone=916360226773">
            <button>
              <FaWhatsapp className="navBtn-icon" />
              Message Us
            </button>
          </a>
        </div> */}
      </div>
      <div className="respMenuBar">
        <IoMdMenu onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FaX className="closeX" onClick={hideSideBar} />
          <div className="innerMenu">
            <li className="">
              <Link
                id="menuNavLink"
                href="#home"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
                <FaChevronRight className="menuNavDropIcon" />
              </Link>{" "}
            </li>
            <li className="">
              <Link
                id="menuNavLink"
                href="#services"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
                <FaChevronRight className="menuNavDropIcon" />
              </Link>{" "}
            </li>
            <li className="">
              <Link
                id="menuNavLink"
                href="#why"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Why Us
                <FaChevronRight className="menuNavDropIcon" />
              </Link>{" "}
            </li>
            <li className="">
              <Link
                id="menuNavLink"
                href="#testimonial"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Testimonials
                <FaChevronRight className="menuNavDropIcon" />
              </Link>{" "}
            </li>

            <li className="">
              <Link
                id="menuNavLink"
                href="#contact-us"
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
                <FaChevronRight className="menuNavDropIcon" />
              </Link>{" "}
            </li>
            {/* <div className="respBtn-container">
              <a href="https://api.whatsapp.com/send?phone=916360226773">
                <button>
                  <FaWhatsapp className="respBtn-icon" />
                  Message Us
                </button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpPaintMenu;
