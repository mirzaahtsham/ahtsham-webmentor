import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tawk.to",
      },
    ],
  },
};

export default nextConfig;
