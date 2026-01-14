import { MetadataRoute } from "next";
import { client } from "../sanity/client";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths =
      await client.fetch<{ href: string; _updatedAt: string }[]>(SITEMAP_QUERY);

    const baseUrl =
      process.env.VERCEL && process.env.VERCEL_ENV === "production"
        ? "https://primecleanco.in/"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";

    const dynamicPaths: MetadataRoute.Sitemap = paths.map((path) => ({
      url: new URL(path.href, baseUrl).toString(),
      lastModified: new Date(path._updatedAt),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 1,
    }));

    const staticUrls = [
      "/",
      "/other-services",
      "/about-us",
      "contact-us",
      "our-gallery",
    ].map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    }));

    return [...dynamicPaths, ...staticUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
