export const SITEMAP_QUERY = `*[_type in ["page", "post","service"] && defined(slug.current)] {
  "href": select(
    _type == "page" => "/" + slug.current,
    _type == "post" => "/" + slug.current,
    _type == "service" => "/" + slug.current,
    "/" + slug.current
  ),
  _updatedAt
}`;
//  add name of the schema
