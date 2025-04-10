import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img.clerk.com', 'localhost'], // Adjust this if Clerk uses a different domain
  },
};

export default nextConfig;
