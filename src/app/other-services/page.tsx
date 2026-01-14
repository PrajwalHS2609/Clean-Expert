import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { client } from "../../sanity/client";

// 🔥 Force dynamic rendering on every request (not cached)
export const dynamic = "force-dynamic";

const SERVICE_QUERY = `*[_type == "service"] | order(publishedAt desc)[0...100]{
  _id,
  title,
  slug
}`;

export default async function OtherServices() {
  const services = await client.fetch<SanityDocument[]>(
    SERVICE_QUERY,
    {},
    {
      cache: "no-store",
    }
  );


  return (
    <div className="head-container">
      <h2>Services</h2>

      <ul>
        {services.map((service) => {
          const slug = service?.slug?.current;
          if (!slug) return null; // Skip items missing slug

          return (
            <li key={service._id}>
              <Link href={`/${slug}`}>{service.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
