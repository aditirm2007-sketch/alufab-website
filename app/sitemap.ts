import type { MetadataRoute } from "next";

const baseUrl = "https://alufab.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
