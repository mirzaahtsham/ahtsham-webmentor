/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    tailwindcss: {
      experimental: {
        optimizeUniversalDefaults: false,
      },
    },
    autoprefixer: {},
  },
};

export default config;





// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;
