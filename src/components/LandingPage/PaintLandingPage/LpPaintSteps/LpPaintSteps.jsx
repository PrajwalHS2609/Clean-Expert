import React from "react";
import "./LpPaintSteps.css";
import { HiArrowLongRight } from "react-icons/hi2";
const LpPaintSteps = () => {
  const card = [
    {
      id: 1,
      img: "https://images.bergerpaints.com/s3fs-public/2024-04/get%20in%20touch.png?VersionId=Qh5ZfGtU3W6Y.wiC8XnHjVNySctveqXg&format=webp&width=640&quality=75",
      title: "Get in Touch with XP",
      icon: <HiArrowLongRight />,
    },
    {
      id: 2,
      img: "https://images.bergerpaints.com/s3fs-public/2024-04/get%20in%20touch.png?VersionId=Qh5ZfGtU3W6Y.wiC8XnHjVNySctveqXg&format=webp&width=640&quality=75",
      title: "Get in Touch with XP",
      icon: <HiArrowLongRight />,
    },
    {
      id: 3,
      img: "https://images.bergerpaints.com/s3fs-public/2024-04/get%20in%20touch.png?VersionId=Qh5ZfGtU3W6Y.wiC8XnHjVNySctveqXg&format=webp&width=640&quality=75",
      title: "Get in Touch with XP",
      icon: <HiArrowLongRight />,
    },
    {
      id: 4,
      img: "https://images.bergerpaints.com/s3fs-public/2024-04/get%20in%20touch.png?VersionId=Qh5ZfGtU3W6Y.wiC8XnHjVNySctveqXg&format=webp&width=640&quality=75",
      title: "Get in Touch with XP",
      icon: <HiArrowLongRight />,
    },
    {
      id: 5,
      img: "https://images.bergerpaints.com/s3fs-public/2024-04/get%20in%20touch.png?VersionId=Qh5ZfGtU3W6Y.wiC8XnHjVNySctveqXg&format=webp&width=640&quality=75",
      title: "Get in Touch with XP",
      icon: <HiArrowLongRight />,
    },
  ];
  return (
    <div className="lpPaintSteps-container">
      <div className="lpPaintSteps-heading">
        <h2>Steps involved in Prime Clean Painting</h2>
      </div>
      <div className="lpPaintSteps-content">
        {card.map((x) => (
          <>
            <div className="lpPaintSteps-itemCard" key={x.id}>
              <img src={x.img} alt={x.title} />
              <p>{x.title}</p>
            </div>
            <span className="lpPaintSteps-itemIcon">{x.icon}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default LpPaintSteps;
