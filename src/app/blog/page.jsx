import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { client } from "./../../sanity/client";
export const revalidate = 0;

const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...100]{
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
export default async function Blog() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <div>
      {/* <ServiceHeader
        title="Our Blog"
        img={blog}
        para="Easy-to-understand articles about health tests, reports, and wellness—because informed patients make healthier choices."
      /> */}
      <div className="blogPage-container">
        <div className="blogPage-content">
          {posts.map((post) => (
            <div className="blogPage-Card" key={post._id}>
              <div className="blogPage-ImgContainer">
                {post.mainImage?.asset?.url && (
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                  />
                )}{" "}
              </div>
              {/* <div className="blogPage-wrapper">
            <div className="blogPage-item"></div>
          </div> */}

              <div className="blogPage-wrapper">
                <h3>{post.title}</h3>
              </div>
              <div className="blogPage-wrapper">
                <Link href={`/${post.slug.current}`}>
                  {" "}
                  <button>
                    READ MORE <FaArrowRight className="blogPage-ReadIcon" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
