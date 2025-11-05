/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/prodhosh-portfolio',
  assetPrefix: '/prodhosh-portfolio',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
