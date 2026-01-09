"use client";

import React, { useState } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { portableTextComponents } from "../PortableTextComponents";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import ratingImg from "@/images/rating.png";
import { urlFor } from "../../../sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


/* ---------------- TYPES ---------------- */

type ServiceReview = {
  name?: string;
  location?: string;
  rating?: number;
  image?: SanityImageSource; // ✅ FIXED
  comment?: PortableTextBlock[];
};

type ServiceEssentialsProps = {
  data?: {
    description?: PortableTextBlock[];
    benefits?: PortableTextBlock[];
    reviews?: ServiceReview[];
  };
};

/* ---------------- COMPONENT ---------------- */

export default function SanityEssentials({ data }: ServiceEssentialsProps) {
  const [activeTab, setActiveTab] = useState<
    "description" | "benefits" | "reviews"
  >("description");

  return (
    <div className="serviceEssentials-container">
      {/* NAVBAR */}
      <div className="serviceEssentials-navbar">
        <ul>
          <li>
            <button
              className={activeTab === "description" ? "routeActives" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>

          <li>
            <button
              className={activeTab === "benefits" ? "routeActives" : ""}
              onClick={() => setActiveTab("benefits")}
            >
              Benefits
            </button>
          </li>

          <li>
            <button
              className={activeTab === "reviews" ? "routeActives" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </li>
        </ul>
      </div>

      {/* CONTENT */}
      <div className="serviceEssentials-content">
        {/* DESCRIPTION */}
        {activeTab === "description" && data?.description && (
          <PortableText
            value={data.description}
            components={portableTextComponents}
          />
        )}

        {/* BENEFITS */}
        {activeTab === "benefits" && data?.benefits && (
          <PortableText
            value={data.benefits}
            components={portableTextComponents}
          />
        )}

        {/* REVIEWS (CAROUSEL + CARD DESIGN) */}
        {activeTab === "reviews" && data?.reviews?.length ? (
          <div className="serviceReviews-container">
            <Carousel className="serviceReviews-carouselContainer">
              {data.reviews.map((review, index) => (
                <Carousel.Item
                  key={index}
                  className="serviceReviews-carouselItem"
                >
                  <div className="serviceReviews-content">
                    <div className="serviceReviews-itemWrapper">
                      {/* USER */}
                      <div className="serviceReviews-item">
                        {review.image && (
                          <img
                            src={urlFor(review.image)?.width(120)?.height(120)?.url() ?? ""}
                            alt={review.name || "review"}
                            className="serviceReviews-avatar"
                          />
                        )}
                        <h5>{review.name}</h5>
                        {review.location && <h6>{review.location}</h6>}
                      </div>

                      {/* RATING */}
                      {typeof review.rating === "number" && (
                        <div className="serviceReviews-rating">
                          <Image src={ratingImg} alt="rating" />
                        </div>
                      )}

                      {/* COMMENT */}
                      <div className="serviceReviews-item">
                        {review.comment && (
                          <PortableText
                            value={review.comment}
                            components={portableTextComponents}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          activeTab === "reviews" && <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
}
