
import { PortableTextComponents, PortableTextBlock } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "@portabletext/react";
import "@/components/styles.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "../../sanity/client";
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ✅ Define types
interface CustomTableRow {
  cells: string[];
}
interface CustomTableValue {
  title?: string;
  headers: string[];
  rows: CustomTableRow[];
}
interface AccordionBlockValue {
  title: string;
  content: PortableTextBlock[]; // ✅ Proper type instead of any[]
}

interface FAQItem {
  question: string;
  answer: PortableTextBlock[];
}
interface FAQBlockValue {
  title?: string;
  items: FAQItem[];
}
interface QuoteBlockValue {
  text: string;
  author?: string;
}
export interface ContentHighlight {
  title: string;
  description?: string;
}
interface CarouselImage {
  _type: "image";
  asset: {
    _ref: string;
  };
  alt?: string;
  caption?: string;
  link?: string;
}
interface CarouselBlockValue {
  title?: string;
  images: CarouselImage[];
}
export const portableTextComponents: PortableTextComponents = {
  types: {
    // 🖼️ Image Renderer
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value).url();
      const href = value.link || null;

      return (
        <div className="portableImg">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                src={imageUrl}
                alt={value.alt || "img"}

              />
            </a>
          ) : (
            <img
              src={imageUrl}
              alt={value.alt || "img"}
            />
          )}
        </div>
      );
    },

    // 📊 Custom Table Renderer
    customTable: ({ value }: { value: CustomTableValue }) => {
      if (!value?.rows || !value?.headers) return null;
      return (
        <div className="custom-table">
          {value.title && <h3>{value.title}</h3>}
          <table className="customTable-table">
            <thead>
              <tr>
                {value.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {value.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },

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

    // ------------------------------FAQ----------------------------------

    faq: ({ value }: { value: FAQBlockValue }) => {
      if (!value?.items?.length) return null;

      return (
        <div className="faq-section">
          {value.title && <h2 className="faq-title">{value.title}</h2>}
          <div className="accordion-items">
            {value.items.map((item: FAQItem, idx: number) => (
              <details key={idx} className="faq-item">
                <summary className="faq-question">{item.question}</summary>
                <div className="faq-answer">
                  <PortableText
                    value={item.answer}
                    components={portableTextComponents}
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
      );
    },

    // --------------------------------------Quote------------------------------------
    // 📝 Quote Block Renderer
    quoteBlock: ({ value }: { value: QuoteBlockValue }) => {
      if (!value?.text) return null;

      return (
        <blockquote className="quote-block">
          <p className="quote-text"> {value.text} </p>
          {value.author && (
            <cite className="quote-author">— {value.author}</cite>
          )}
        </blockquote>
      );
    },

    // ----------------------------------HighlightBlock----------------------------------
    highlightBlock: ({ value }) => {
      return (
        <div className="highlight-box">
          {value.title && <h5 className="highlight-title">{value.title}</h5>}
          <div className="highlight-content">
            <PortableText
              value={value.content}
              components={portableTextComponents}
            />
          </div>
        </div>
      );
    },

    // ----------------------------Carousel--------------------------------
    carouselBlock: ({ value }: { value: CarouselBlockValue }) => {
      if (!value?.images?.length) return null;

      return (
        <Carousel className="carouselContainer" interval={3000}>
          {value.images.map((img: CarouselImage, i: number) => {
            // ✅ Build URL with Sanity's image URL builder
            const imageUrl = img.asset?._ref ? urlFor(img.asset).url() : null;

            if (!imageUrl) return null;

            const ImageElement = (
              <img
                src={imageUrl}
                alt={img.alt || `Slide ${i + 1}`}
              />
            );

            return (
              <Carousel.Item key={i} className="carouselItem">
                {img.link ? (
                  <a href={img.link} target="_blank" rel="noopener noreferrer">
                    {ImageElement}
                  </a>
                ) : (
                  ImageElement
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
