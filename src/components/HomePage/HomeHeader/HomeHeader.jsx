import React from "react";
import "./HomeHeader.css";
const HomeHeader = () => {
  const card = [
    { id: 1, title: "Cleaning Services" },
    { id: 2, title: "Painting Services" },
    { id: 3, title: "Bathroom Renovation" },
    { id: 4, title: "Marble Polishing" },
    { id: 5, title: "Civil Works" },
    { id: 6, title: "Waterproofing" },
    { id: 7, title: "Shower Cubicle" },
    { id: 8, title: "Pest Control" },
  ];
  return (
    <div className="homeHeader-container">
      <h2>Make Your Home Shine Again</h2>
      <div className="homeHeader-wrapper">
        <div className="homeHeader-content">
         {card.map((x)=>(
             <div className="homeHeader-itemCard" key={x.id}>
            <div className="homeHeader-itemCardImg">
              <img
                src="https://images.pexels.com/photos/245207/pexels-photo-245207.jpeg"
                alt=""
              />
            </div>
            <button>{x.title}</button>
          </div>
         ))}
        </div>
        <div className="homeHeader-content">
          <div className="homeHeader-imgContainer">
            <img src="https://img.freepik.com/free-photo/attractive-carpenter-with-protective-helmet-glasses-working-while-drilling-wooden-bar-construction-site_662251-483.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740&q=80" alt="" />
          </div>
          <div className="homeHeader-imgContainer">
            <img src="https://img.freepik.com/free-photo/attractive-carpenter-with-protective-helmet-glasses-working-while-drilling-wooden-bar-construction-site_662251-483.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740&q=80" alt="" />
          </div>
          <div className="homeHeader-imgContainer">
            <img src="https://img.freepik.com/free-photo/attractive-carpenter-with-protective-helmet-glasses-working-while-drilling-wooden-bar-construction-site_662251-483.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740&q=80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
