"use client";
import React, { useState } from "react";
import "./Career.css";
import PopupFormCareer from "../PopUpCareer/PopUpCareer";
const Career = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="career-container">
      {/* Job Card */}
      <section className="career-job">
        <h2>Customer Support Executive</h2>

        <div className="job-meta">
          <span>
            <strong>Company:</strong> Prime Clean
          </span>
          <span>
            <strong>Location:</strong> Bangalore
          </span>
          <span>
            <strong>Openings:</strong> 3
          </span>
        </div>

        <div className="job-section">
          <h3>Roles & Responsibilities</h3>
          <ul>
            <li>Handle inbound and outbound customer calls</li>
            <li>Understand customer needs and recommend cleaning services</li>
            <li>
              Schedule service appointments and coordinate with operations
            </li>
            <li>Provide accurate service, pricing, and offer details</li>
            <li>Respond via phone, WhatsApp, and email</li>
            <li>Maintain CRM records and customer data</li>
            <li>Handle complaints and ensure quick resolution</li>
            <li>Follow up post-service for feedback</li>
            <li>Manage rescheduling and cancellations</li>
            <li>Coordinate with field teams</li>
          </ul>
        </div>

        <div className="job-section">
          <h3>Requirements & Qualifications</h3>
          <ul>
            <li>12th pass or graduate in any discipline</li>
            <li>Experience in customer support or call center preferred</li>
            <li>Good communication in English (Kannada/Hindi preferred)</li>
            <li>Customer-friendly attitude</li>
            <li>Basic computer and CRM knowledge</li>
            <li>Ability to multitask and solve problems</li>
            <li>Willingness to work shifts/weekends</li>
            <li>Home services experience is a plus</li>
          </ul>
        </div>

        <div className="job-section">
          <h3>Key Skills</h3>
          <div className="skills">
            <span>Customer Handling</span>
            <span>Communication</span>
            <span>Time Management</span>
            <span>Multitasking</span>
            <span>Complaint Resolution</span>
            <span>Data Entry</span>
          </div>
        </div>

        <div className="job-footer">
          <div className="salary">
            <h3>Salary</h3>
            <p>₹18,000 / month + Performance Bonus up to ₹5,000</p>
          </div>

          <button className="apply-btn" onClick={() => setShowPopup(true)}>
            Apply Now
          </button>
          {showPopup && <PopupFormCareer onClose={() => setShowPopup(false)} />}
        </div>
      </section>
    </div>
  );
};

export default Career;
