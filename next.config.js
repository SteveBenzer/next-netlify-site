/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export static HTML (replaces the deprecated `next export` workflow)
  output: 'export',
  images: { unoptimized: true } // friendlier for simple Netlify deploys
};
module.exports = nextConfig;
