import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/consulting", "/resume", "/contact"];
  return routes.map((route) => ({
    url: `https://sarahhamilton.work${route}`,
    lastModified: new Date(),
  }));
}
