import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { projectId, dataset } from "../env";

const builder =
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset })
    : null;

export function urlFor(source?: SanityImageSource) {
  if (!builder || !source) {
    return null;
  }
  return builder.image(source);
}
