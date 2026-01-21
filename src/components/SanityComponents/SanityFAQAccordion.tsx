"use client";

import { useState } from "react";
import {
  PortableText,
  PortableTextComponents,
  PortableTextBlock,
} from "@portabletext/react";

interface FAQItem {
  question: string;
  answer: PortableTextBlock[];
}

interface FAQBlockValue {
  title?: string;
  items: FAQItem[];
}

interface FAQAccordionProps {
  value: FAQBlockValue;
  components: PortableTextComponents;
}

export function FAQAccordion({
  value,
  components,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!value?.items?.length) return null;

  return (
    <div className="faq-section">
      {value.title && <h2 className="faq-title">{value.title}</h2>}

      <div className="accordion-items">
        {value.items.map((item, idx) => (
          <details
            key={idx}
            className="faq-item"
            open={openIndex === idx}
          >
            <summary
              className="faq-question"
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === idx ? null : idx);
              }}
            >
              {item.question}
            </summary>

            <div className="faq-answer">
              <PortableText
                value={item.answer}
                components={components}
              />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
