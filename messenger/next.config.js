/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['encrypted-tbn0.gstatic.com','upload.wikimedia.org','static.wikia.nocookie.net','avatars.githubusercontent.com','lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
