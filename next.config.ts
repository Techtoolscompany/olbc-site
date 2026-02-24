import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'oklahomalbc.org',
      },
      {
        protocol: 'https',
        hostname: 'en.wikipedia.org',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'okhouse.gov',
      },
      {
        protocol: 'https',
        hostname: 'dgbf0g52sf9l0.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
