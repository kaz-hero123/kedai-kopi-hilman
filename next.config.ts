import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance & image optimization */
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
