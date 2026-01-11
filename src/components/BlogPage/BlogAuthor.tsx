"use client";

import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "@/components/BlogPage/BlogSidebar/Blog.css";
import { client } from "../../sanity/client";

/* ---------------- TYPES ---------------- */

type Author = {
  _id: string;
  name: string;
  designation?: string;
  bio?: any;
  mainImage?: {
    asset?: {
      url?: string;
    };
  };
};

type BlogAuthorProps = {
  slug: string;
};

/* ---------------- COMPONENT ---------------- */

export default function BlogAuthor({ slug }: BlogAuthorProps) {
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          author->{
            _id,
            name,
            designation,
            bio,
            mainImage{
              asset->{url}
            }
          }
        }`,
        { slug }
      )
      .then((data) => setAuthor(data?.author ?? null))
      .catch(console.error);
  }, [slug]);

  if (!author) return null;

  return (
    <div className="blogAuthorContainer">
      <div className="blogAuthorContent">
        <div className="blogAuthorImg">
          {author.mainImage?.asset?.url && (
            <img src={author.mainImage.asset.url} alt={author.name} />
          )}
        </div>

        <div className="blogAuthorName">
          {author.designation && <h4>{author.designation}</h4>}
          <h3>{author.name}</h3>
        </div>
      </div>

      {author.bio && <PortableText value={author.bio} />}

      <div className="blogAuthorSocial">
        <FaInstagram className="authorSocialIcon" />
        <FaLinkedin className="authorSocialIcon" />
        <FaXTwitter className="authorSocialIcon" />
      </div>
    </div>
  );
}