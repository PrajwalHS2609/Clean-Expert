"use client";
import React from "react";

type HomeKeywordsProps = {
  keywords?: string[];
};

const SanitySeoKeywords = ({ keywords = [] }: HomeKeywordsProps) => {
  if (!keywords.length) return null;

  return (
    <div className="keywords-container">
      <ul className="keywords-list">
        {keywords.map((item, index) => (
          <li key={index} className="keywords-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SanitySeoKeywords;
