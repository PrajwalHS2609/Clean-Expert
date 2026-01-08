"use client";

import Image from "next/image";
import "./../ServiceComponents/ServiceHeader/ServiceHeader.css";
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
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { portableTextComponents } from "../PortableTextComponents";

import offerImg1 from "@/images/offerImgs/Professional-Cleaning-Service.png";
import offerImg2 from "@/images/offerImgs/Pest-Control-Offer.png";
import offerImg3 from "@/images/offerImgs/Painting-Offer.png";

/* ---------------- TYPES ---------------- */

export type SanityImage = {
  asset?: { url?: string };
};

export type ServiceItem = {
  title: string;
  link?: string;
  image?: SanityImage;
};

export type SubServiceItem = {
  name: string;
  link?: string;
};

export type SanityServiceContentType = {
  title: string;
  banner?: {
    asset?: {
      url?: string;
    };
  };
  description?: PortableTextBlock[];
  services?: ServiceItem[];
  subServices?: SubServiceItem[];
  location?: string;
  phone?: string;
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    facebook?: string;
    linkedin?: string;
  };
};

const adImg = [offerImg1, offerImg2, offerImg3];

/* ---------------- COMPONENT ---------------- */

export default function SanityServiceContent({
  content,
}: {
  content: SanityServiceContentType;
}) {
  const bannerUrl = content.banner?.asset?.url;
  const services = content.services ?? [];
  const subServices = content.subServices ?? [];

  return (
    <div className="serviceHeader-container">

      {/* SERVICES */}
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-servicesContent">
          {services.map((service, index) => (
            <div className="serviceHeader-servicesItem" key={index}>
              <Link href={service.link || ""}>
                {service.image?.asset?.url && (
                  <img
                    src={service.image.asset.url}
                    alt={service.title}
                  />
                )}
                <div className="serviceHeader-servicesItemCover">
                  <p>{service.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* BANNER */}
      {bannerUrl && (
        <div className="serviceHeader-wrapper">
          <img
            src={bannerUrl}
            alt={content.title}
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-content">
          <h3>{content.title}</h3>

          {content.description && (
            <PortableText
              value={content.description}
              components={portableTextComponents}
            />
          )}

          <div className="serviceHeader-contentBtn">
            <button className="serviceHeader-btn">Book Now</button>
            <button className="serviceHeader-btn">
              Chat with Us <FaWhatsapp className="serviceHeader-btnIco" />
            </button>
          </div>
        </div>

        {/* SUB SERVICES */}
        {subServices.length > 0 && (
          <div className="serviceHeader-content">
            <strong>Cleaning Sub Services :</strong>{" "}
            {subServices.map((item, index) => (
              <span key={index}>
                <Link href={item.link || "/"}>{item.name}</Link>
                {index < subServices.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}

        {/* CONTACT */}
        <div className="serviceHeader-content">
          <a href="">
            <IoLocationOutline className="serviceHeader-iconAdd" />
            {content.location || " Bangalore, India"}
          </a>
          <a href="">
            <FiPhone className="serviceHeader-iconAdd" />
            {content.phone || " 91 9876543210"}
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

      {/* ADS (PLACED EXACTLY LIKE ORIGINAL) */}
      <div className="serviceHeader-wrapper">
        <div className="serviceHeader-adsContent">
          {adImg.map((img, i) => (
            <div className="serviceHeader-adsItem" key={i}>
              <Image src={img} alt="offer" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
