import React from "react";
import "./HomeBlog.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
const HomeBlog = () => {
  const posts = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
      title: "The Ultimate Guide to Professional Cleaning Services",
      link: "/",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
      title: "Why Professional Cleaning Makes a Real Difference",
      link: "/",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
      title: "How Regular Cleaning Improves Health & Productivity",
      link: "/",
    },
  ];
  return (
    <div className="blogPage-container">
      <div className="blogPage-heading">
        <h2>
          Read Our Latest <span>Blog</span>
        </h2>
      </div>

      <div className="blogPage-content">
        {posts.map((post) => (
          <div className="blogPage-Card" key={post._id}>
            <div className="blogPage-ImgContainer">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="blogPage-wrapper">
              <h3>{post.title}</h3>
            </div>
            <div className="blogPage-wrapper">
              <Link href={`/${post.link}`}>
                READ MORE <FaArrowRight className="blogPage-ReadIcon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
