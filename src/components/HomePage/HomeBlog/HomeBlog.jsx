import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { client } from "@/sanity/client";
import"./HomeBlog.css"
const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    description,
    mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }
  }`;
export default async function HomeBlogPage() {
  const posts = await client.fetch(POSTS_QUERY);

  // const card = [
  //   {
  //     id: 1,
  //     title: "5 Essential Skills Every Digital Marketer Should Master",
  //     link: "/",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Graphic Design Trends Shaping Visual Communication",
  //     link: "",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Navigating the Data Science Job Market",
  //     link: "",
  //     img: "https://demo.themeies.com/edugen-html/assets/images/blog/blog3.jpg",
  //   },
  // ];
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
              {post.mainImage?.asset?.url && (
                <img src={post.mainImage.asset.url} alt={post.title} />
              )}{" "}
            </div>
            <div className="blogPage-wrapper">
              <h3>{post.title}</h3>
            </div>
            <div className="blogPage-wrapper">
              <Link href={`/${post.slug.current}`}>
                READ MORE <FaArrowRight className="blogPage-ReadIcon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
