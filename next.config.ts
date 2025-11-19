/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // 🚫 Disable LightningCSS to fix Netlify build error
  },

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
