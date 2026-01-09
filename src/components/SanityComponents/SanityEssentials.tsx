"use client";

import React, { useState } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { portableTextComponents } from "../PortableTextComponents";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import ratingImg from "@/images/rating.png";
import { urlFor } from "../../../sanity/lib/image";

/* ---------------- TYPES ---------------- */
type SanityImage = {
  _type: "image";
  asset?: {
    _ref: string;
    _type: "reference";
  };
};
type ServiceReview = {
  name?: string;
  location?: string;
  rating?: number;
  image?: SanityImage;
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

        {/* REVIEWS */}
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
                        {review.image?.asset ? (
                          <img
                            src={urlFor(review.image).width(120).height(120).url()}
                            alt={review.name || "review"}
                            className="serviceReviews-avatar"
                          />
                        ) : (
                          <div className="serviceReviews-avatarPlaceholder">
                            {review.name?.charAt(0) ?? "U"}
                          </div>
                        )}
                        <h5>{review.name}</h5>
                        {review.location && <h6>{review.location}</h6>}
                      </div>

                      {/* RATING */}
                      {review.rating && (
                        <div className="serviceReviews-rating">
                          <Image src={ratingImg} alt="rating" />
                        </div>
                      )}

                      {/* COMMENT */}
                      {review.comment && (
                        <div className="serviceReviews-item">
                          <PortableText
                            value={review.comment}
                            components={portableTextComponents}
                          />
                        </div>
                      )}
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
