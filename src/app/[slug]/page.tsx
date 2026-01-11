// app/[slug]/page.tsx

import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import SanityServiceContent, {
  SanityServiceContentType,
} from "@/components/SanityComponents/SanityService";

/* =========================
   GROQ QUERY
========================= */

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
    }
  }
}
`;

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

  const data = await client.fetch<{
    service: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(SERVICE_QUERY, { slug });

  if (!data?.service) {
    return {
      title: "Service Not Found | Prime Clean",
      description: "The requested service does not exist.",
    };
  }

  return {
    title:
      data.service.metaTitle ||
      data.service.title ||
      "Prime Clean Services",
    description:
      data.service.metaDescription ||
      "Professional cleaning services by Prime Clean.",
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

  const data = await client.fetch<{
    service: SanityServiceContentType | null;
  }>(SERVICE_QUERY, { slug });

  if (!data?.service) {
    notFound();
  }

  return <SanityServiceContent content={data.service} />;
}
