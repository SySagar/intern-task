/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  distDir: "build",
  images: {
    domains: ["images.unsplash.com", "unsplash.com", "source.unsplash.com"],
  },
}

module.exports = nextConfig
