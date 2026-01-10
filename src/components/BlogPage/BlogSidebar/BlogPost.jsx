import React from "react";
import Link from "next/link";
import "./BlogSidebar.css";

import Image from "next/image";
import { client } from "../../../sanity/client";
export const revalidate = 0;

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...2]{
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
export default async function BlogPost() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <div className="blogPost-container">
      <ul>
        <h2>Recent Posts</h2>
        {posts.map((post) => (
          <Link href={`/${post.slug.current}`} key={post._id}>
            <ul>
              <li>
                {post.mainImage?.asset?.url && (
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="rounded-md object-cover aspect-video"
                  />
                )}
                <h4>{post.title}</h4>
              </li>
            </ul>
          </Link>
        ))}
      </ul>
    </div>
  );
}
