import Image from "next/image";
import "./ServiceHeader.css";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

import offerImg1 from "./../../../images/offerImgs/Professional-Cleaning-Service.png";
import offerImg2 from "./../../../images/offerImgs/Pest-Control-Offer.png";
import offerImg3 from "./../../../images/offerImgs/Painting-Offer.png";

const ServiceHeader = ({
  banner,
  title,
  para,
  services = [],
  subServices = [],
}) => {
  return (
    <div className="serviceHeader-container">
      {/* SERVICES */}
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-servicesContent">
          {services.map((service, index) => (
            <div className="serviceHeader-servicesItem" key={index}>
              <Link href={service.link || ""}>
                <Image src={service.img} alt={service.title} />
                <div className="serviceHeader-servicesItemCover">
                  <p>{service.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* BANNER */}
      <div className="serviceHeader-wrapper">
        <Image src={banner} alt={title} />
      </div>

      {/* CONTENT */}
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-content">
          <h3>{title}</h3>
          <p>{para}</p>

          <div className="serviceHeader-contentBtn">
            <button className="serviceHeader-btn">Book Now</button>
            <button className="serviceHeader-btn">
              Chat with Us <FaWhatsapp className="serviceHeader-btnIco" />
            </button>
          </div>
        </div>

        {/* SUB SERVICES */}
        <div className="serviceHeader-content">
          <strong>Cleaning Sub Services :</strong>{" "}
          {subServices.map((item, index) => (
            <span key={index}>
              <Link href={item.link || "/"}>{item.name}</Link>
              {index < subServices.length - 1 && ", "}
            </span>
          ))}
        </div>

        {/* CONTACT */}
        <div className="serviceHeader-content">
          <a href="">
            <IoLocationOutline className="serviceHeader-iconAdd" /> Bangalore,
            India
          </a>
          <a href="">
            <FiPhone className="serviceHeader-iconAdd" /> 91 9876543210
          </a>
        </div>

        {/* SOCIAL */}
        <div className="serviceHeader-content">
          <a href="">
            <FaInstagram className="serviceHeader-socialIco" />
          </a>
          <a href="">
            <FaYoutube className="serviceHeader-socialIco" />
          </a>
          <a href="">
            <FaFacebookF className="serviceHeader-socialIco" />
          </a>
          <a href="">
            <FaLinkedin className="serviceHeader-socialIco" />
          </a>
        </div>
      </div>

      {/* ADS */}
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-adsContent">
          {[offerImg1, offerImg2, offerImg3].map((img, i) => (
            <div className="serviceHeader-adsItem" key={i}>
              <Image src={img} alt="offer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
