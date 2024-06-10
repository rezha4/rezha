/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
};

export default nextConfig;
