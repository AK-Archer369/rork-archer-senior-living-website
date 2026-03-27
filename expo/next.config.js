/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'www.google.com' },
      { protocol: 'https', hostname: 'pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev' },
    ],
  },
};

module.exports = nextConfig;
