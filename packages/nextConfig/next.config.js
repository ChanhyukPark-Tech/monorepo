/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui"],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};
