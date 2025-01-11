/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

export default nextConfig;
