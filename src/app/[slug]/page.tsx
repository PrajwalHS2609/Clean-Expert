// app/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import { client } from "../../sanity/client";
import SanityServiceContent from "@/components/SanityComponents/SanityService";
import { SanityServiceContentType } from '@/components/SanityComponents/SanityService';

// =========================
// GROQ QUERY
// =========================

const SERVICE_QUERY = `
{
  "service": *[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    slug,
  banner{
    asset->{url}
  },
    description,
    services[]{
      title,
      link,
      image { asset->{ url } }
    },
    subServices[]{ name, link },
    location,
    phone,
    socialLinks{
      instagram,
      youtube,
      facebook,
      linkedin
    }
  }
}
`;

export const revalidate = 10; // optional ISR, refresh every 10 seconds

// =========================
// TYPES
// =========================

type SlugParams = { slug: string };

// =========================
// PAGE COMPONENT
// =========================

export default async function SlugPage({
  params: paramsPromise,
}: {
  params: Promise<SlugParams>;
}) {
  const { slug } = await paramsPromise;

  // Fetch service data from Sanity
  const serviceData = await client.fetch<{
    service: SanityServiceContentType | null;
  }>(SERVICE_QUERY, { slug });

  if (!serviceData.service) {
    return notFound();
  }

  return (
    <SanityServiceContent
      content={serviceData.service}
    />
  );
}
