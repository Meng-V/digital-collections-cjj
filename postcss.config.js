// postcss.config.js
module.exports = {
    plugins: {
      '@tailwindcss/postcss': {},   // ← the correct plugin for Tailwind CSS v4+
      autoprefixer: {}              // ← Autoprefixer
    }
  }