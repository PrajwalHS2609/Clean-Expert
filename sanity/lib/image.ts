import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { projectId, dataset } from "../env";

const builder = imageUrlBuilder({
  projectId,
  dataset,
});

export function urlFor(source?: SanityImageSource) {
  return source ? builder.image(source) : null;
}
