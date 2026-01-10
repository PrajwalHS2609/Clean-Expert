
import React from "react";
import Link from "next/link";
import "./BlogSidebar.css";
import { client } from "../../../sanity/client";

const CATEGORY_QUERY = `*[_type == "blogCategory"] | order(title asc){
  _id,
  title,
  slug
}`;
export default async function BlogCategories() {
  const categories = await client.fetch(CATEGORY_QUERY);

  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <li>
          <Link href={"/blog"}>All</Link>
        </li>
        {categories
          .filter((category) => category.slug && category.slug.current)
          .map((category) => (
            <li key={category._id}>
              <Link href={`/category/${category.slug.current}`}>
                {category.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
