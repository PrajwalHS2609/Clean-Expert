import React from "react";
import "./LpPaintNavbar.css";
import LpPaintLogo from "./LpPaintLogo";
import LpPaintMenu from "./LpPaintMenu";
import LpPaintTopbar from "./LpPaintTopbar";
const LpPaintNavbar = () => {
  return (
    <>
      <LpPaintTopbar />
      <div className="lpPaintNavbar-container">
        <LpPaintLogo />
        <LpPaintMenu />
      </div>
    </>
  );
};

export default LpPaintNavbar;
