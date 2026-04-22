import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lunss.com',
      },
      {
        protocol: 'https',
        hostname: 'dynamic.zacdn.com',
      },
      {
        protocol: 'https',
        hostname: 'image.made-in-china.com',
      },
      {
        protocol: 'https',
        hostname: 'evermos.com',
      },
      {
        protocol: 'https',
        hostname: 'images.tokopedia.net',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;