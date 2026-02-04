// app/[slug]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import SanityServiceContent, {
  SanityServiceContentType,
} from "@/components/SanityComponents/SanityService";
import PostContent, { PostContentType } from "@/components/SanityComponents/Post";
import BlogSidebar from './../../components/BlogPage/BlogSidebar/BlogSidebar';
import ServiceContent, { ServiceContentType } from "@/components/SanityComponents/ServiceContent";
import SanityServiceLocality from "@/components/SanityComponents/SanityServiceLocality";

/* =========================
   GROQ QUERY
========================= */
const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, body,
    mainImage{ asset->{url} },
    publishedAt,
    youtubeVideoUrl,
    faq[]{ question, answer }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  }
}`;

const SERVICE_QUERY = `
{
  "service": *[_type == "service" && slug.current == $slug][0]{
    title,
    slug,
    metaTitle,
    metaDescription,
    mainImage,
    description,
    services[]{
      title,
      link,
      image
    },
        pricing{
      originalPrice,
      discountPrice,
      monthlyBookings,
      unit,
    },
    subServicesLabel,
    subServices[]{ name, link },
    essentials{
      description,
      benefits,
      faq,
      reviews[]{
        name,
        rating,
        location,
        image,
        comment
      }
    },
    seoKeywords{
  keywords
},
       seoContent {
    intro,
    expanded,
  },

  },
            "globalOffer": *[_type == "globalOffer"][0]{
    label
  },
}
`;
const SERVICE_CONTENT_QUERY = `{
  "service": *[_type == "ServiceCategory" && slug.current == $slug][0]{
    _id, title, slug,metaTitle ,metaDescription,body1, body2,
    mainImage{ asset->{url} },
    youtubeVideoUrl,
    faq[]{ question, answer },
   tableOfContent[]{
      title
    },
    customTable{ title, headers, rows[]{ cells } }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  },

}`;

const SERVICE_LOCALITY = `
{
  "service": *[_type == "serviceLocality" && slug.current == $slug][0]{
    title,
    slug,
    metaTitle,
    metaDescription,
    mainImage,
    description,
    services[]{
      title,
      link,
      image
    },
    pricing{
      originalPrice,
      discountPrice,
      monthlyBookings,
      unit,
    },
    subServicesLabel,
    subServices[]{ name, link },
    essentials{
      description,
      benefits,
      faq,
      reviews[]{
        name,
        rating,
        location,
        image,
        comment
      }
    },
    seoKeywords{ keywords },
    seoContent{
      intro,
      expanded
    }

  },
"globalOffer": *[_type == "globalOffer"][0]{
    label
  },
}
`;


type SlugParams = { slug: string };

type CarouselImage = {
  alt?: string;
  caption?: string;
  link?: string;
  asset?: { url?: string };
};

type CarouselBlock = {
  title?: string;
  images?: CarouselImage[];
};
/* =========================
   ISR
========================= */

export const revalidate = 60;

/* =========================
   METADATA (SEO)
========================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // 1️⃣ Try POST first
  const postData = await client.fetch<{
    post: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(POST_QUERY, { slug });

  if (postData?.post) {
    return {
      title:
        postData.post.metaTitle ||
        postData.post.title ||
        "Prime Clean Blog",
      description:
        postData.post.metaDescription ||
        "Read the latest blog articles from Prime Clean.",
    };
  }

  // 2️⃣ Fallback to SERVICE
  const serviceData = await client.fetch<{
    service: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(SERVICE_CONTENT_QUERY, { slug });

  if (serviceData?.service) {
    return {
      title:
        serviceData.service.metaTitle ||
        serviceData.service.title ||
        "Prime Clean Services",
      description:
        serviceData.service.metaDescription ||
        "Professional services by Prime Clean.",
    };
  }
  const serviceContentData = await client.fetch<{
    service: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(SERVICE_QUERY, { slug });

  if (serviceContentData?.service) {
    return {
      title:
        serviceContentData.service.metaTitle ||
        serviceContentData.service.title ||
        "Prime Clean Services",
      description:
        serviceContentData.service.metaDescription ||
        "Professional services by Prime Clean.",
    };
  }
  const serviceLocalityData = await client.fetch<{
    service: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(SERVICE_LOCALITY, { slug });

  if (serviceLocalityData?.service) {
    return {
      title:
        serviceLocalityData.service.metaTitle ||
        serviceLocalityData.service.title ||
        "Prime Clean Services",
      description:
        serviceLocalityData.service.metaDescription ||
        "Professional services by Prime Clean.",
    };
  }
  // 3️⃣ Not found
  return {
    title: "Not Found | Prime Clean",
    description: "The page you are looking for does not exist.",
  };
}

/* =========================
   PAGE
========================= */

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1️⃣ POST
  const postData = await client.fetch<{
    post: PostContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(POST_QUERY, { slug });

  if (postData.post) {
    return (
      <div className="blog-container">
        <PostContent
          content={{
            ...postData.post,
            carouselBlock: postData.carouselBlock ?? undefined,
          }}
        />
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      </div>
    );
  }
  // 2️⃣ SERVICE
  const serviceData = await client.fetch<{
    service: ServiceContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(SERVICE_CONTENT_QUERY, { slug });

  if (serviceData.service) {
    return (
      <ServiceContent
        content={{
          ...serviceData.service,
          carouselBlock: serviceData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // ----------------------------------Locality------------------------------------
  const localityData = await client.fetch<{
    service: SanityServiceContentType | null;
    globalOffer?: { label?: string };
  }>(SERVICE_LOCALITY, { slug });

  if (localityData?.service) {
    return <SanityServiceLocality content={localityData.service} globalOffer={localityData.globalOffer} />;
  }

  // ---------------------------------ServiceSanity-------------------------------------------
  const data = await client.fetch<{
    service: SanityServiceContentType | null;
    globalOffer?: { label?: string };
  }>(SERVICE_QUERY, { slug });

  if (data?.service) {
    return <SanityServiceContent content={data.service}
      globalOffer={data.globalOffer}
    />;
  }

  // ✅ FINAL FALLBACK
  notFound();
}

