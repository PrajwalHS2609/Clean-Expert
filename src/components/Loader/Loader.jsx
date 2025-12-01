"use client";

import React from "react";
import "./Loader.css";
import clean from "./../../images/cleaning.gif";
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={clean.src} alt="clean loader" />
    </div>
  );
};

export default Loader;

