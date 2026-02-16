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
      "/contact-us",
      "/our-gallery",
      "/home-cleaning-services-near-jayanagar",
      "/home-cleaning-services-near-hsr-layout",
      "/home-cleaning-services-near-koramangala",
      "/home-cleaning-services-near-marathahalli",
      "/home-cleaning-services-near-vijayanagar",
      "/home-cleaning-services-near-btm-layout",
      "/home-cleaning-services-near-malleshwaram",
      "/home-cleaning-services-near-jp-nagar",
      "/home-cleaning-services-near-indiranagar",
      "/home-cleaning-services-near-bannerghatta-road",
      "/home-cleaning-services-near-banashankari",
      "/home-cleaning-services-near-basavanagudi",
      "/home-cleaning-services-near-brookefield",
      "/home-cleaning-services-near-yelahanka",
      "/home-cleaning-services-near-sarjapur-road",
      "/home-cleaning-services-near-sadashiva-nagar",
      "/home-cleaning-services-near-whitefield",
      "/home-cleaning-services-near-indiranagar",
      "/home-cleaning-service-in-adugodi",
      "/home-cleaning-service-in-kodihalli",
      "/home-cleaning-service-in-chamarajpet",
      "/home-cleaning-service-in-nagavara",
      "/home-cleaning-service-in-ganga-nagar",
      "/home-cleaning-service-in-uttarahalli",
      "/home-cleaning-service-in-rt-nagar",
      "/home-cleaning-service-in-hoodi",
      "/home-cleaning-service-in-kadubeesanahalli",
      "/home-cleaning-service-in-jayamahal",
      "/home-cleaning-service-in-begur",
      "/home-cleaning-service-in-konanakunte",
      "/home-cleaning-service-in-jeevanbheema-nagar",
      "/home-cleaning-service-in-nandini-layout",
      "/home-cleaning-service-in-jeevanbheema-nagar",
      "/home-cleaning-service-in-rmv-2nd-stage",
      "/home-cleaning-service-in-shanthi-nagar",
      "/home-cleaning-service-in-bannerghatta",
      "/home-cleaning-service-in-kamala-nagar",
      "/home-cleaning-service-in-chikkalasandra",
      "/home-cleaning-service-in-richmond-town",
      "/home-cleaning-service-in-kadugodi",
      "/home-cleaning-service-in-varthur",
      "/home-cleaning-service-in-jakkur",
      "/home-cleaning-service-in-battarahalli",
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
