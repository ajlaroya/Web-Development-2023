/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['encrypted-tbn0.gstatic.com','upload.wikimedia.org','static.wikia.nocookie.net'],
  }
}

module.exports = nextConfig
