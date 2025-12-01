import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import Menu from "./Menu";
const NavBar = () => {
  return (
    <div className="navBarContainer" id="navBar">
      <Logo />
      <Menu />
    </div>
  );
};

export default NavBar;
