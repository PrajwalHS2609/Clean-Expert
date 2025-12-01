import React from "react";
import "./HeadingProps.css";
const HeadingProps = (props) => {
  return (
    <div className="headingProps-container">
      <div className="headingProps-content">
        <h2>{props.title}</h2>
        <div className="headingLine"></div>
      </div>
      <p>{props.para}</p>
    </div>
  );
};

export default HeadingProps;
