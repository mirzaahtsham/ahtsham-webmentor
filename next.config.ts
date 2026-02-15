/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep your experimental features if needed
  // experimental: {
  //   appDir: true, // required for App Router
  //   // add other experimental flags here if used
  // },

  // Official way to disable linting during build
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },

  typescript: {
  ignoreBuildErrors: true,
},

  // You can also add any other modern flags here
  // e.g., images, compiler, etc.
};

module.exports = nextConfig;
