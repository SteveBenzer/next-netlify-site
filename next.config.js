/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true } // friendlier for simple Netlify deploys
};
module.exports = nextConfig;
