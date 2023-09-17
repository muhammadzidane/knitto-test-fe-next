/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'thisis-images.scdn.co',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
