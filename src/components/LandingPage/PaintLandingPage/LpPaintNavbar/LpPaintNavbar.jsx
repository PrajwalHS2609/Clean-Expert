import React from "react";
import "./LpPaintNavbar.css";
import LpPaintLogo from "./LpPaintLogo";
import LpPaintMenu from "./LpPaintMenu";
const LpPaintNavbar = () => {
  return (
    <div className="lpPaintNavbar-container">
      <LpPaintLogo />
      <LpPaintMenu />
    </div>
  );
};

export default LpPaintNavbar;
