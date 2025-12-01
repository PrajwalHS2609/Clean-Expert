import React from "react";
import "./Footer.css";
import Link from "next/link";
const FooterBelow = () => {
  return (
    <div className="footerBelow-container">
      <div className="footerBelow-content">
        <h4>Service Locations</h4>
        <ul>
          <li>
            <Link href={"/"}>Bannergatta Road</Link>
          </li>
          <li>
            <Link href={"/"}>Banashankari</Link>
          </li>
          <li>
            <Link href={"/"}>Bellandur</Link>
          </li>
          <li>
            <Link href={"/"}>BTM Layout</Link>
          </li>
          <li>
            <Link href={"/"}>Electronic City</Link>
          </li>
          <li>
            <Link href={"/"}>Frazer Town</Link>
          </li>
          <li>
            <Link href={"/"}>HBR Layout</Link>
          </li>
          <li>
            <Link href={"/"}>Hebbal</Link>
          </li>
          <li>
            <Link href={"/"}>Hosur Road</Link>
          </li>
          <li>
            <Link href={"/"}>HRBR Layout</Link>
          </li>
          <li>
            <Link href={"/"}>HSR Layout</Link>
          </li>
          <li>
            <Link href={"/"}>Indira Nagar</Link>
          </li>
          <li>
            <Link href={"/"}>Jayanagar</Link>
          </li>
          {/* JP Nagar Kadugodi Kasturi Nagar Koramangala Madiwala Marathahalli
        Richmond Town Sarjapur Whitefield Yelahanka RT Nagar RR Nagar Kalyan
        Nagar Chikkbanavara Kengeri Horamavu Vijayanagar Yeshwanthpura Jalahalli
        Shanti Nagar Hennur Sadashiva Nagar Basavanagudi Malleshwaram
        Uttarahalli Dasarahalli Ulsoor Benson Town Basaveshwara Nagar Jakkur
        Sahakar Nagar Mathikere Banaswadi KR Puram Rajaji Nagar Sanjay Nagar
        Mahadevapura Nagarbhavi */}
        </ul>
      </div>
      <div className="footerBelow-content">
        <p>
          © Copyright 2025 | Clean Experts Designed and Developed By
          TrySeoServices.com
        </p>
      </div>
    </div>
  );
};

export default FooterBelow;
