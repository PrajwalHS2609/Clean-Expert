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

import HomeCleanService from "../HomePage/HomeCleanService/HomeCleanService";
import HomeHow from "../HomePage/HomeHow/HomeHow";
import HomePaintingService from "../HomePage/HomePaintingService/HomePaintingService";
import HomeCivilWork from "../HomePage/HomeCivilWork/HomeCivilWork";
import HomePestControl from "../HomePage/HomePestControl/HomePestControl";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import HomeFaq from "../HomePage/HomeFaq/HomeFaq";

import { urlFor } from "../../../sanity/lib/image";
import SanityEssentials from "./SanityEssentials";

/* ---------------- TYPES ---------------- */

export type SanityImage = {
  _type: "image";
  asset?: {
    _ref: string;
    _type: "reference";
  };
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

export type SanityServiceEssentialsType = {
  description?: PortableTextBlock[];
  benefits?: PortableTextBlock[];
  reviews?: {
    name?: string;
    location?: string;
    rating?: number;
    image?: SanityImage;
    comment?: PortableTextBlock[];
  }[];
};

export type SanityServiceContentType = {
  title: string;
  mainImage?: SanityImage;
  description?: PortableTextBlock[];
  services?: ServiceItem[];
  subServices?: SubServiceItem[];
  subServicesLabel?: string;
  essentials?: SanityServiceEssentialsType;
};

const adImg = [{ id: 1, img: offerImg1, alt: "adImg1" },
{ id: 2, img: offerImg2, alt: "adImg2" },
{ id: 3, img: offerImg3, alt: "adImg3" }];

/* ---------------- COMPONENT ---------------- */

export default function SanityServiceContent({
  content,
}: {
  content: SanityServiceContentType;
}) {
  const services = content.services ?? [];
  const subServices = content.subServices ?? [];

  return (
    <div>
      <div className="serviceHeader-container">

        {/* SERVICES */}
        <div className="serviceHeader-wrapper">
          <div className="serviceHeader-servicesContent">
            {services.map((service, index) => (
              <div className="serviceHeader-servicesItem" key={index}>
                <Link href={service.link || "/"}>
                  {service.image && (
                    <img src={urlFor(service.image)?.url()} alt={service.title} />
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

        <div className="serviceHeader-wrapper">
          {content.mainImage && (
            <img
              src={urlFor(content.mainImage)?.url()}
              alt={content.title}
            />
          )}
        </div>

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
              <strong>{content.subServicesLabel || "Sub Services"}:</strong>{" "}
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
            <a href="#">
              <IoLocationOutline className="serviceHeader-iconAdd" />
              Bangalore, India
            </a>
            <a href="#">
              <FiPhone className="serviceHeader-iconAdd" />
              91 9876543210
            </a>
          </div>

          {/* SOCIAL */}
          <div className="serviceHeader-content">
            <a href="#"><FaInstagram className="serviceHeader-socialIco" /></a>
            <a href="#"><FaYoutube className="serviceHeader-socialIco" /></a>
            <a href="#"><FaFacebookF className="serviceHeader-socialIco" /></a>
            <a href="#"><FaLinkedin className="serviceHeader-socialIco" /></a>
          </div>
        </div>

        {/* ADS */}
        <div className="serviceHeader-wrapper">
          <div className="serviceHeader-adsContent">
            {adImg.map((x) => (
              <div className="serviceHeader-adsItem" key={x.id}>
                <Image src={x.img} alt={x.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <HomeCleanService />
      {content.essentials && <SanityEssentials data={content.essentials} />}
      <HomeHow />
      <HomePaintingService />
      <HomeCivilWork />
      <HomePestControl />
      <HomeTestimonial />
      <HomeFaq />
    </div>
  );
}
