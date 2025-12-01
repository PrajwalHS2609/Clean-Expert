import React from "react";
import "./NavBar.css";
import logo from "./../../images/logo.png";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="logoContainer">
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
