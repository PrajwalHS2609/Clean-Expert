import React from "react";
import "./HomeHeader.css";

const HomeHeader = () => {
  const card = [
    { id: 1, title: "Cleaning Services", vid: "/vid/Cleaning Service.mp4" },
    { id: 2, title: "Painting Services", vid: "/vid/Painting Services.mp4" },
    {
      id: 3,
      title: "Bathroom Renovation",
      vid: "/vid/Bathroom Renovation.mp4",
    },
    { id: 4, title: "Marble Polishing", vid: "/vid/Marbles Polishing.mp4" },
    { id: 5, title: "Civil Works", vid: "/vid/Civil Works.mp4" },
    { id: 6, title: "Waterproofing", vid: "/vid/Water Proofing.mp4" },
    { id: 7, title: "Shower Cubicle", vid: "/vid/Shower Cubicle.mp4" },
    { id: 8, title: "Pest Control", vid: "/vid/Pest Control.mp4" },
  ];
  return (
    <div className="homeHeader-container">
      <h2>Let Your Home Shine Brighter Than Ever</h2>
      <div className="homeHeader-wrapper">
        <div className="homeHeader-content">
          {card.map((x) => (
            <div className="homeHeader-itemCard" key={x.id}>
              <div className="homeHeader-itemCardImg">
                <video src={x.vid} muted loop autoPlay preload="none" />
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
