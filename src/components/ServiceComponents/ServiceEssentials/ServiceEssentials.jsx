"use client";
import React, { useState } from "react";
import "./ServiceEssentials.css";
import CleaningServicesDescription from "../../ServicePages/CleaningServices/CleaningServicesDescription";
import CleaningServicesSub from "../../ServicePages/CleaningServices/CleaningServicesBenefits";
import CleaningServiceReview from "../../ServicePages/CleaningServices/CleaningServiceReview";

const ServiceEssentials = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return <CleaningServicesDescription />;
      case "subservices":
        return <CleaningServicesSub />;
      case "reviews":
        return <CleaningServiceReview />;
      default:
        return null;
    }
  };

  return (
    <div className="serviceEssentials-container">
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
              className={activeTab === "reviews" ? "routeActives" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </li>

          <li>
            <button
              className={activeTab === "subservices" ? "routeActives" : ""}
              onClick={() => setActiveTab("subservices")}
            >
              Benefits
            </button>
          </li>
        </ul>
      </div>

      <div className="serviceEssentials-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default ServiceEssentials;
