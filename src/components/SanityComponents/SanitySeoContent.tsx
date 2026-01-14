"use client";

import React, { useState } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { portableTextComponents } from "../PortableTextComponents";

type Props = {
  data?: {
    intro?: PortableTextBlock[];
    expanded?: PortableTextBlock[];
  };
};

const SanitySeoContent = ({ data }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!data?.intro?.length) return null;

  return (
    <div className="contentHead">
      <div className="contentHead-wrapper">

        {/* Always visible */}
        <div className="contentHead-content">
          <PortableText
            value={data.intro}
            components={portableTextComponents}
          />
        </div>

        {/* Read more */}
        {expanded && data.expanded?.length && (
          <div className="contentHead-content">
            <PortableText
              value={data.expanded}
              components={portableTextComponents}
            />
          </div>
        )}

        {data.expanded?.length && (
          <button
            className="readMoreBtn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>
        )}

      </div>
    </div>
  );
};

export default SanitySeoContent;
