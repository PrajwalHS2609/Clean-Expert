import { PortableText, PortableTextBlock, PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FAQAccordion } from "./SanityComponents/SanityFAQAccordion";
import "@/components/styles.css";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
/* ================= TYPES ================= */

interface CustomTableValue {
  title?: string;
  headers: string[];
  rows: { cells: string[] }[];
}

interface AccordionBlockValue {
  title: string;
  content: PortableTextBlock[];
}

interface QuoteBlockValue {
  text: string;
  author?: string;
}

interface CarouselImage {
  _type: "image";
  asset?: { _ref?: string };
  alt?: string;
  caption?: string;
  link?: string;
}

interface CarouselBlockValue {
  title?: string;
  images?: CarouselImage[];
}

/* ================= PORTABLE TEXT ================= */

export const portableTextComponents: PortableTextComponents = {
  types: {
    /* ---------- IMAGE ---------- */
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      const imageUrl = urlFor(value.asset).width(1200).auto("format").url();

      return (
        <div className="portableImg">
          <img src={imageUrl} alt={value.alt || "image"} />
        </div>
      );
    },

    /* ---------- CUSTOM TABLE ---------- */
    customTable: ({ value }: { value: CustomTableValue }) => {
      if (!value?.headers?.length || !value?.rows?.length) return null;

      return (
        <div className="custom-table">
          {value.title && <h3>{value.title}</h3>}
          <table>
            <thead>
              <tr>
                {value.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {value.rows.map((row, i) => (
                <tr key={i}>
                  {row.cells.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },

    /* ---------- ACCORDION ---------- */
    // 🔽 Accordion Renderer
    accordionBlock: ({ value }: { value: AccordionBlockValue }) => {
      if (!value?.content) return null;
      return (
        <details className="accordion-item">
          <summary className="accordion-title">
            <h3>{value.title}</h3>
          </summary>
          <div className="accordion-content">
            <PortableText
              value={value.content}
              components={portableTextComponents}
            />
          </div>
        </details>
      );
    },

    /* ---------- FAQ ---------- */
    faq: ({ value }) => {
      return <FAQAccordion value={value} components={portableTextComponents} />;
    },

    /* ---------- QUOTE ---------- */
    quoteBlock: ({ value }: { value: QuoteBlockValue }) => {
      if (!value?.text) return null;

      return (
        <blockquote>
          <p>{value.text}</p>
          {value.author && <cite>— {value.author}</cite>}
        </blockquote>
      );
    },

    /* ---------- HIGHLIGHT ---------- */
    highlightBlock: ({ value }) => {
      return (
        <div className="highlight-box">
          {value.title && <h5>{value.title}</h5>}
          <PortableText value={value.content} components={portableTextComponents} />
        </div>
      );
    },

    /* ---------- CAROUSEL (FIXED) ---------- */
    carouselBlock: ({ value }: { value: CarouselBlockValue }) => {
      if (!value?.images?.length) return null;

      return (
        <Carousel interval={3000} className="carouselContainer">
          {value.images.map((img, i) => {
            if (!img.asset?._ref) return null;

            const imageUrl = urlFor(img.asset)
              .width(1200)
              .auto("format")
              .url();

            const image = (
              <img
                src={imageUrl}
                alt={img.alt || `Slide ${i + 1}`}
                className="d-block w-100"
              />
            );

            return (
              <Carousel.Item key={i}>
                {img.link ? (
                  <a href={img.link} target="_blank" rel="noopener noreferrer">
                    {image}
                  </a>
                ) : (
                  image
                )}

                {img.caption && (
                  <Carousel.Caption>
                    <h3>{img.caption}</h3>
                  </Carousel.Caption>
                )}
              </Carousel.Item>
            );
          })}
        </Carousel>
      );
    },
  },
};
