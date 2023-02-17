/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com', 'cdn.sanity.io'],
      },
  };
  
  module.exports = nextConfig;