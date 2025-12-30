import React from "react";
import "./HomeHow.css";
import HeadingProps from "@/components/HeadingProps/HeadingProps";
import { FaCog, FaHome } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import Image from "next/image";

export default function HomeHow() {
  return (
    <div className="infographic-container">
      <HeadingProps title="How it Works" para="" />{" "}
      <div className="infographic-wrapper">
        <div className="info-step ">
          <span className="step-number">1</span>
          <div className="icon-how">
            <FaCog />
          </div>
          <h3>Choose a Service</h3>
          <p>Select the service you need quickly and easily.</p>
        </div>

        <div className="connector"></div>

        <div className="info-step ">
          <span className="step-number">2</span>
          <div className="icon-how">
            <IoCallSharp />
          </div>
          <h3>Book Online / Call / WhatsApp</h3>
          <p>Contact us instantly via call or WhatsApp for quick assistance.</p>
        </div>

        <div className="connector"></div>

        <div className="info-step ">
          <span className="step-number">3</span>
          <div className="icon-how">
            <FaIndianRupeeSign />
          </div>
          <h3>Get Price Confirmation</h3>
          <p>
            Receive clear pricing details instantly before service confirmation.
          </p>
        </div>

        <div className="connector"></div>

        <div className="info-step">
          <span className="step-number">4</span>
          <div className="icon-how">
            <FaHome />
          </div>
          <h3>Professionals Visit Your Home</h3>
          <p>Verified professionals arrive at your home as scheduled.</p>
        </div>

        <div className="connector"></div>

        <div className="info-step ">
          <span className="step-number">5</span>
          <div className="icon-how">
            <LuBadgeCheck />
          </div>
          <h3>Cleaning & Quality Check</h3>
          <p>Thorough cleaning completed with strict quality inspection.</p>
        </div>
      </div>
      <div className="infographic-PayContainer">
        <div className="infographic-PayContent">
          <img
            src="https://img.freepik.com/free-photo/person-paying-with-its-smartphone-wallet-app_23-2149167295.jpg?t=st=1767083498~exp=1767087098~hmac=d5ba7b6ae54f60b3fc2cee92bfd31db3b96e12d080facf8b49e7c43992787bfc&w=740"
            alt="call"
          />
        </div>
        <div className="infographic-PayContent">
          <div className="infographic-payItem">
            <h3>Pay After Service Completion</h3>
          </div>
          <div className="infographic-payItem">
            <p>Pay securely only after service is fully completed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
