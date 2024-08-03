/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  experimental: {
    optimizePackageImports: [
      '@material-ui/core',
    ]
  },
};

export default nextConfig;
