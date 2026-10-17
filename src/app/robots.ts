import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://prodhosh.me/sitemap.xml",
    host: "https://prodhosh.me",
  };
}
