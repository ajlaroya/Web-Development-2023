/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
        domains: ['upload.wikimedia.org','images.unsplash.com', 'res.cloudinary.com', 'cdn.sanity.io'],
      },
  };
  
  module.exports = nextConfig;