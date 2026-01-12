import Link from "next/link";
import React from "react";
import "./BreadCrumb.css"
import { FaChevronRight } from "react-icons/fa";
const BreadCrumb = (props) => {
  return (
    <div className="bread-container">
      <Link href={"/"}>Home</Link> <FaChevronRight /> <Link href={"/"}>{props.text}</Link>
    </div>
  );
};

export default BreadCrumb;
