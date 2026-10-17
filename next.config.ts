import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // R3F canvases double-mount under StrictMode in dev and log "unmount a root" errors.
  reactStrictMode: false,
};

export default nextConfig;
