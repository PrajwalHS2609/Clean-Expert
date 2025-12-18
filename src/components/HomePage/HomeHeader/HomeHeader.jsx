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
import paintingOffer from "@/images/offerImgs/Painting-Offer.png"
import pestControlOffer from "@/images/offerImgs/Pest-Control-Offer.png"
import professionalOffer from "@/images/offerImgs/Professional-Cleaning-Service.png"
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
            <Image
              src={paintingOffer}
              alt="Painting Offer"
            />
          </div>
          <div className="homeHeader-imgContainer">
           <Image
              src={pestControlOffer}
              alt="Pest Control Offer"
            />
          </div>
          <div className="homeHeader-imgContainer">
            <Image
              src={professionalOffer}
              alt="Professional Offer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
