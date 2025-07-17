import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "htojocompany.wordpress.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
