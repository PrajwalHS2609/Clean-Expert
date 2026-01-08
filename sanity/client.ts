import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "j2q8knys",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
export async function sanityFetch({ query }: { query: string }) {
  const data = await client.fetch(query)
  return { data }
}