/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['s3.amazonaws.com']
  }
}

module.exports = nextConfig
