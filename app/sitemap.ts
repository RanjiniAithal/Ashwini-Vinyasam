import type { MetadataRoute } from "next";
import { siteMetadata } from "@/lib/siteMetadata";

const baseUrl = siteMetadata.url;

const routes = ["/", "/about", "/services", "/contact", "/gallery"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified,
  }));
}
