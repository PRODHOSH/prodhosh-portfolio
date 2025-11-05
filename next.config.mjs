/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/prodhosh-portfolio',
  assetPrefix: '/prodhosh-portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/prodhosh-portfolio',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
