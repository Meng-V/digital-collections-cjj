// postcss.config.js (ESM 版本，适配 Tailwind v4 + Next 16)
/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
