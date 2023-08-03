/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "127.0.0.1",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
