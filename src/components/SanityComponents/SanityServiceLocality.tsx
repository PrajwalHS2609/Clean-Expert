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
// import HomeFaq from "../HomePage/HomeFaq/HomeFaq";
import civilWork from "../../images/serviceImgs/Civil Works.png";
import bathroom from "../../images/serviceImgs/Bathroom Renovation.png";
import marble from "../../images/serviceImgs/Marbles Polishing.png";
import painting from "../../images/serviceImgs/Painting Services.png";
import pest from "../../images/serviceImgs/Pest Control.png";
import shower from "../../images/serviceImgs/Shower Cubicle.png";
import waterProofing from "../../images/serviceImgs/Water Proofing.png";
import cleaningService from "../../images/serviceImgs/Cleaning Service.png";
import { urlFor } from "../../../sanity/lib/image";
import SanityEssentials from "./SanityEssentials";
import SanitySeoContent from "./SanitySeoContent";
import SanitySeoKeywords from "./SanitySeoKeyword";
import ServiceHeaderCarousel from './../ServiceComponents/ServiceHeaderCarousel';

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
export type ServiceFAQItem = {
  question: string
  answer: PortableTextBlock[];
}
export type SanityServiceEssentialsType = {
  description?: PortableTextBlock[];
  benefits?: PortableTextBlock[];
  faq?: ServiceFAQItem[];
  reviews?: {
    name?: string;
    location?: string;
    rating?: number;
    image?: SanityImage;
    comment?: PortableTextBlock[];
  }[];
};

export type ServicePricing = {
  originalPrice?: string;
  discountPrice?: string;
  offerLabel?: string;
  monthlyBookings?: string;
  unit?: string;
};

export type SanityServiceContentType = {
  title: string;
  mainImage?: SanityImage;
  description?: PortableTextBlock[];
  services?: ServiceItem[];
  metaTitle?: string;
  metaDescription?: string;
  subServices?: SubServiceItem[];
  subServicesLabel?: string;
  essentials?: SanityServiceEssentialsType;
  seoKeywords?: {
    keywords?: string[];
  };
  pricing?: ServicePricing; // ✅ ADD THIS

  seoContent?: {
    intro?: PortableTextBlock[],
    expanded?: PortableTextBlock[],
  },
};

const adImg = [{ id: 1, img: offerImg1, alt: "adImg1" },
{ id: 2, img: offerImg2, alt: "adImg2" },
{ id: 3, img: offerImg3, alt: "adImg3" }];

const serviceImg = [
  { id: 1, img: civilWork, title: "Civil Work", link: "/civil-works-service-in-bangalore" },
  { id: 2, img: bathroom, title: "Bathroom Renovation", link: "/bathroom-remodeling-service-in-bangalore" },
  { id: 3, img: marble, title: "Marbles Polishing", link: "/marble-polishing-services-in-bangalore" },
  { id: 4, img: painting, title: "Painting Services", link: "/home-painting-services-in-bangalore" },
  { id: 5, img: pest, title: "Pest Control", link: "/pest-control-service-in-bangalore" },
  { id: 6, img: shower, title: "Shower Cubical", link: "/shower-enclosure-installation-in-bangalore" },
  { id: 7, img: waterProofing, title: "Water Proofing", link: "/waterproofing-service-in-bangalore" },
  { id: 8, img: cleaningService, title: "Cleaning Services", link: "/home-cleaning-services-in-bangalore" },

]
/* ---------------- COMPONENT ---------------- */

export default function SanityServiceLocality({
  content,
}: {
  content: SanityServiceContentType;
}) {

  console.log("MAIN Image:", content.mainImage);
  console.log("SERVICE Img:", content.services);
  console.log("REVIEWS img:", content.essentials?.reviews)
  const subServices = content.subServices ?? [];
  const handlePop = () => {
    const popup = document.querySelector(".popup-container") as HTMLElement | null;

    if (popup) {
      popup.style.display = "flex";
    }
  }

  return (
    <div>
      <div className="serviceHeader-container">

        {/* SERVICES */}
        <div className="serviceHeader-wrapper">
          <div className="serviceHeader-servicesContent">
            {serviceImg.map((x) => (
              <div className="serviceHeader-servicesItem" key={x.id}>
                <Link href={x.link}>
                  <Image src={x.img} alt={x.title} />
                  <div className="serviceHeader-servicesItemCover">
                    <p>{x.title}</p>
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
            <div className="serviceHeader-contentPrice" id="serviceHeader-booking">
              <b>{content.pricing?.monthlyBookings} Bookings in the Past Month</b>
            </div>
            {content.pricing?.offerLabel && (
              <div className="serviceHeader-contentOffer">
                <b>{content.pricing.offerLabel}</b>
              </div>
            )}
            <div className="serviceHeader-contentPrice">
              <h5>{content.pricing?.originalPrice}</h5>
              <h3>{content.pricing?.discountPrice}{" "}<b className="serviceHeader-unit">{content.pricing?.unit}</b> </h3>
            </div>
            <div className="serviceHeader-contentBtn">
              <button className="serviceHeader-btn" onClick={handlePop}>Book Now</button>
              <a href="https://api.whatsapp.com/send?phone=917090234446">
                <button className="serviceHeader-btn">
                  Chat with Us <FaWhatsapp className="serviceHeader-btnIco" />
                </button>
              </a>

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
            <a href="tel:8792446647">
              <FiPhone className="serviceHeader-iconAdd" />
              91 8792446647
            </a>
          </div>

          {/* SOCIAL */}
          <div className="serviceHeader-content">
            <ServiceHeaderCarousel />
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
      {content.seoKeywords?.keywords && (
        <SanitySeoKeywords keywords={content.seoKeywords.keywords} />
      )}
      {content.seoContent && (
        <SanitySeoContent data={content.seoContent} />
      )}
      {/* <HomeFaq /> */}
    </div>
  );
}
