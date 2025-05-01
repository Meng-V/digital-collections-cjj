/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/research/:slug*",
        destination: "https://www.lib.miamioh.edu/research/:slug*", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/use/:slug*",
        destination: "https://www.lib.miamioh.edu/use/:slug*", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/about/:slug*",
        destination: "https://www.lib.miamioh.edu/about/:slug*", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "livedmu.lib.miamioh.edu" },
      { protocol: "https", hostname: "www.lib.miamioh.edu" },
      { protocol: "https", hostname: "tailwindui.com" },
      { protocol: "http", hostname: "localhost:3032" },
    ],
  },
};

export default nextConfig;
