"use client";
import type { PortableTextBlock } from "@portabletext/types";
import { portableTextComponents } from "../PortableTextComponents";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { PortableText } from '@portabletext/react';
import BlogAuthor from '../BlogPage/BlogAuthor';
import "@/components/styles.css"
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type PostContentType = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  publishedAt?: string;
  faq?: FaqItem[];
  carouselBlock?: {
    title?: string;
    images?: CarouselImage[];
  };
};
export type CarouselImage = {
  asset?: { url?: string };
  alt?: string;
  caption?: string;
  link?: string; // ✅ Added link field
};
export default function PostContent({
  content,
}: {
  content: PostContentType;
}) {
  const imageUrl = content?.mainImage?.asset?.url;
  const [index, setIndex] = useState(0);

  return (
    <div className="blog-wrapper1">
      {/* Main Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={content.title}
        // width={550}
        // height={310}
        // priority
        />
      )}

      <div className="blogHead-content">
        <h1>{content.title}</h1>

        {content.publishedAt && (
          <p className="postPublished-date">
            📅{" "}
            {new Date(content.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}

        {/* Carousel */}
        {content.carouselBlock?.images?.length ? (
          <Carousel
            activeIndex={index}
            onSelect={(i) => setIndex(i)}
            className="carouselContainer"
          >
            {content.carouselBlock.images.map((img, i) =>
              img.asset?.url ? (
                <Carousel.Item key={i} className="carouselItem">
                  {img.link ? (
                    <a
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={img.asset.url}
                        alt={img.alt || `Slide ${i + 1}`}
                        className="d-block w-100 rounded"
                      />
                    </a>
                  ) : (
                    <img
                      src={img.asset.url}
                      alt={img.alt || `Slide ${i + 1}`}
                      className="d-block w-100 rounded"
                    />
                  )}

                  {img.caption && (
                    <Carousel.Caption>
                      <h3>{img.caption}</h3>
                    </Carousel.Caption>
                  )}
                </Carousel.Item>
              ) : null
            )}
          </Carousel>
        ) : null}

        {/* Blog Body */}
        <PortableText
          value={content.body}
          components={portableTextComponents}
        />
      </div>
      <BlogAuthor slug={content.slug.current} />

    </div>

  );
}
