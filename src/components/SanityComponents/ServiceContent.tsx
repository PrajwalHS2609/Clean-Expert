"use client";
import React, { useState } from "react";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import type { PortableTextBlock } from "@portabletext/types";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import SanityHeroSection from './SanityHeroSection';
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
  headers?: string[];
  rows?: { cells: string[] }[];
};
export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};
export type TableContentItem = {
  title: string;
};
export type ServiceContentType = {
  _id: string;
  title: string;
  slug: string;
  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  customTable?: CustomTable;
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
  tableOfContent?: TableContentItem[];
};

const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
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
export default function ServiceContent({
  content,
}: {
  content: ServiceContentType;
}) {
  const [service, setService] = useState("");

  const cleaningOptions = [
    "Full House Cleaning",
    "Bathroom ",
    "Kitchen ",
    "Chimney",
    "Carpet",
    "Sofa ",
    "Mattress",
    "Window",
    "Balcony",
    "Chair",
  ];
  const paintingOptions = [
    "Home Painting",
    "Apartment Painting ",
    "Spray Painting ",
    "1 Day Express Polishing",
    "Texture & Designer Walls",
    "Waterproofing",
  ];
  const renovationOptions = [
    "Bathroom Remodelling ",
    "Shower Enclosure ",
    "Tiles/Stone Replacement",
    "Replastering ",
    "Wall Crack Filling",
    "Home Inspection",
    "Kitchen Renovation",
    "False Ceiling",
    "Grouting",
  ];
  const pestControlOptions = [
    "General Pest Control",
    "Bed Bugs Control",
    "Mosquito Control ",
    "Termite Control",
  ];
  const imageUrl = content?.mainImage?.asset?.url;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);
  return (
    <div className="main-container service-wrapper1">
      {imageUrl && <SanityHeroSection title={content.title} bannerImg={imageUrl} />}

      <div className="componentDivider-container">
        <div className="componentDivider-content">
          {/* {content.tableOfContent?.length && (
            <div className="tableOfContent-container">
              <h3>Table of Content</h3>
              <ul>
                {content.tableOfContent.map((item, i) => (
                  <li key={i}>📖 {item.title}</li>
                ))}
              </ul>
            </div>
          )}
          <h1 className="service-heading">{content.title}</h1> */}

          {content.body1 && (
            <div className="slugContent-wrapper">
              <div className="head-container">
                <PortableText
                  value={content.body1}
                  components={portableTextComponents}
                />
                {/* ✅ Carousel Section */}
                {content.carouselBlock?.images?.length ? (
                  <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    className="carouselContainer"
                  >
                    {content.carouselBlock.images.map((img, i) => (
                      <Carousel.Item key={i} className="carouselItem">
                        {img.link ? (
                          <a
                            href={img.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={img.asset?.url}
                              alt={img.alt || `Slide ${i + 1}`}
                            />
                          </a>
                        ) : (
                          <img
                            src={img.asset?.url}
                            alt={img.alt || `Slide ${i + 1}`}
                          />
                        )}
                        {img.caption && (
                          <Carousel.Caption>
                            <h3>{img.caption}</h3>
                          </Carousel.Caption>
                        )}
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : null}
              </div>
            </div>
          )}

          {/* <div className="head-container">
        <HomeSpecialization />
        <UniversitiesMarquee />
        <UniversitiesFees />
        <HomeWhyMain />

        {youtubeUrl && (
          <div className="youtube-container">
            <iframe
              width="100%"
              height="500"
              src={
                youtubeUrl.includes("youtu.be")
                  ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                  : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
              }
              title={content.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
       </div> */}

          {content.body2 && (
            <div className="slugContent-wrapper">
              <div className="slugContent-container">
                <PortableText
                  value={content.body2}
                  components={portableTextComponents}
                />

                {content.customTable && (
                  <div className="custom-table">
                    {content.customTable.title && (
                      <h3>{content.customTable.title}</h3>
                    )}
                    <table>
                      <thead>
                        <tr>
                          {content.customTable.headers?.map((header, idx) => (
                            <th key={idx}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {content.customTable.rows?.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.cells.map((cell, cellIndex) => (
                              <td key={cellIndex}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* {Array.isArray(content?.faq) && content.faq.length > 0 && (
            <FaqComponent faqs={content.faq} />
          )} */}
            </div>
          )}
        </div>
        <div className="componentDivider-content">
          <div className="componentDivider-item">
            <div className="componentDivider-formContainer">
              <div className="componentDivider-formContent">
                <h2>Get in Touch</h2>
                <form className="componentDivider-form" onSubmit={onSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />

                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    name="Service"
                  >
                    <option value="">Select Service</option>

                    <option value="Cleaning Services">Cleaning Services</option>
                    <option value="Marble Polishing">Marble Polishing</option>
                    <option value="Painting Services">Painting Services</option>
                    <option value="Civil Works">Civil Works</option>
                    <option value="Pest Control Services">Pest Control Services</option>
                    <option value="Office Cleaning">Office Cleaning</option>
                  </select>


                  {/* Dynamic Second Select */}
                  {service === "Cleaning Services" && (
                    <select required name="Sub Service">
                      <option value="">Select Cleaning Type</option>
                      {cleaningOptions.map((item, idx) => (
                        <option key={idx} value={item} >
                          {item}
                        </option>
                      ))}
                    </select>
                  )}
                  {service === "Painting Services" && (
                    <select required name="Sub Service">
                      <option value="">Select Cleaning Type</option>
                      {paintingOptions.map((item, idx) => (
                        <option key={idx} value={item} >
                          {item}
                        </option>
                      ))}
                    </select>
                  )}
                  {service === "Civil Works" && (
                    <select required name="Sub Service">
                      <option value="">Select Cleaning Type</option>
                      {renovationOptions.map((item, idx) => (
                        <option key={idx} value={item} >
                          {item}
                        </option>
                      ))}
                    </select>
                  )}
                  {service === "Pest Control Services" && (
                    <select required name="Sub Service">
                      <option value="">Select Pest Control Type</option>
                      {pestControlOptions.map((item, idx) => (
                        <option key={idx} value={item} >
                          {item}
                        </option>
                      ))}
                    </select>
                  )}

                  <textarea
                    name="message"
                    placeholder="Your Message"
                  ></textarea>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
