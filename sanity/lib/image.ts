import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { projectId, dataset } from "../env";

if (!projectId || !dataset) {
  throw new Error(
    "Sanity projectId or dataset is missing. Check NEXT_PUBLIC_SANITY_* env vars."
  );
}

const builder = imageUrlBuilder({
  projectId,
  dataset,
});

export function urlFor(source?: SanityImageSource) {
  if (!source) return null;
  return builder.image(source);
}
