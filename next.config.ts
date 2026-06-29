import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 768, 1280, 1920],
  },
};

export default nextConfig;
