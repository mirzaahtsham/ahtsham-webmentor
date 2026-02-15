/** @type {import('next').NextConfig} */
const nextConfig = {
 typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: false,
  },

};

module.exports = nextConfig;
