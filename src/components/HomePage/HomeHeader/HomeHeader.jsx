import React from "react";
import "./HomeHeader.css";
import Image from "next/image";
import cleaning from "@/images/serviceImgs/Cleaning Service.png";
import painting from "@/images/serviceImgs/Painting Services.png";
import bathroom from "@/images/serviceImgs/Bathroom Renovation.png";
import marble from "@/images/serviceImgs/Marbles Polishing.png";
import civil from "@/images/serviceImgs/Civil Works.png";
import waterproofing from "@/images/serviceImgs/Water Proofing.png";
import shower from "@/images/serviceImgs/Shower Cubicle.png";
import pest from "@/images/serviceImgs/Pest Control.png";

const HomeHeader = () => {
  const card = [
    { id: 1, title: "Cleaning Services", img: cleaning },
    { id: 2, title: "Painting Services", img: painting },
    {
      id: 3,
      title: "Bathroom Renovation",
      img: bathroom,
    },
    { id: 4, title: "Marble Polishing", img: marble },
    { id: 5, title: "Civil Works", img: civil },
    { id: 6, title: "Waterproofing", img: waterproofing },
    { id: 7, title: "Shower Cubicle", img: shower },
    { id: 8, title: "Pest Control", img: pest },
  ];
  return (
    <div className="homeHeader-container">
      <h2>Let Your Home Shine Brighter Than Ever</h2>
      <div className="homeHeader-wrapper">
        <div className="homeHeader-content">
          {card.map((x) => (
            <div className="homeHeader-itemCard" key={x.id}>
              <div className="homeHeader-itemCardImg">
                {/* <video src={x.vid} muted loop autoPlay preload="none" /> */}
                <Image src={x.img} alt={x.title}/>
              </div>
              <button>{x.title}</button>
            </div>
          ))}
        </div>
        <div className="homeHeader-content">
          <div className="homeHeader-imgContainer">
            <img
              src="https://img.freepik.com/free-photo/attractive-carpenter-with-protective-helmet-glasses-working-while-drilling-wooden-bar-construction-site_662251-483.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740&q=80"
              alt=""
            />
          </div>
          <div className="homeHeader-imgContainer">
            <img
              src="https://img.freepik.com/free-photo/attractive-carpenter-with-protective-helmet-glasses-working-while-drilling-wooden-bar-construction-site_662251-483.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740&q=80"
              alt=""
            />
          </div>
          <div className="homeHeader-imgContainer">
            <img
              src="https://img.freepik.com/free-photo/attractive-carpenter-with-protective-helmet-glasses-working-while-drilling-wooden-bar-construction-site_662251-483.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
