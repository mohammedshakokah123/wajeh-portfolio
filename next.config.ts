import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wajeh-s-portfolio.vercel.app",
      },
    ],
  },
};

export default nextConfig;
