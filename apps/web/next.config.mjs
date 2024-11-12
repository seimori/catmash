/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*.media.tumblr.com",
      },
      {
        protocol: "https",
        hostname: "*.media.tumblr.com",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
