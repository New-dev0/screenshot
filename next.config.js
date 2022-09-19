/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "ss.newdev0.in"]
  },
  pageExtensions: ["p.js"]
}

module.exports = nextConfig
