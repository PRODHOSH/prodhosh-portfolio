import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prodhosh V S — Freelance full-stack developer & designer",
    short_name: "Prodhosh",
    description: "Websites, web apps, mobile apps, AI features and automations.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9e2e1",
    theme_color: "#ff5400",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
